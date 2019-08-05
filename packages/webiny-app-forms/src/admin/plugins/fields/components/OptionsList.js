// @flow
// $FlowFixMe
import React, { useState } from "react";
import { Input } from "webiny-ui/Input";
import { useI18N, I18NValue } from "webiny-app-i18n/components";
import { I18NInputLocalesOverlay } from "webiny-app-i18n/admin/components";
import { css } from "emotion";
import { camelCase, trim, cloneDeep } from "lodash";
import { Form } from "webiny-form";
import { Hotkeys } from "react-hotkeyz";
import { IconButton } from "webiny-ui/Button";
import { Icon } from "webiny-ui/Icon";
import { Tooltip } from "webiny-ui/Tooltip";
import { Switch } from "webiny-ui/Switch";
import { ReactComponent as EditIcon } from "webiny-app-forms/admin/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "webiny-app-forms/admin/icons/delete.svg";
import { ReactComponent as HandleIcon } from "webiny-app-forms/admin/icons/round-drag_indicator-24px.svg";
import { ReactComponent as TranslateIcon } from "webiny-app-forms/admin/icons/round-translate-24px.svg";

const optionsUl = css({
    "> li": {
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid gray"
    }
});

const optionsListItemLeft = css({
    display: "flex",
    justifyContent: "left",
    alignItems: "center"
});

const optionsListItemRight = css({
    display: "flex",
    justifyContent: "right",
    alignItems: "center"
});

const AddOptionInput = ({ onAdd }) => {
    return (
        <Form>
            {({ Bind }) => (
                <Bind name={"newOption"}>
                    {({ value, onChange }) => (
                        <Hotkeys
                            zIndex={110}
                            keys={{
                                enter() {
                                    if (value) {
                                        onChange("");
                                        onAdd(trim(value));
                                    }
                                }
                            }}
                        >
                            <Input
                                value={value}
                                onChange={onChange}
                                placeholder={"Enter an option and press enter"}
                            />
                        </Hotkeys>
                    )}
                </Bind>
            )}
        </Form>
    );
};

const SetOptionAsDefaultValue = ({
    multiple,
    option,
    value: currentDefaultValue,
    onChange: setDefaultValue
}: Object) => {
    if (multiple) {
        const selected =
            Array.isArray(currentDefaultValue) && currentDefaultValue.includes(option.value);

        return (
            <Switch
                value={selected}
                onChange={() => {
                    if (selected) {
                        const value = Array.isArray(currentDefaultValue)
                            ? [...currentDefaultValue]
                            : [];

                        value.splice(value.indexOf(option.value), 1);
                        setDefaultValue(value);
                    } else {
                        const value = Array.isArray(currentDefaultValue)
                            ? [...currentDefaultValue]
                            : [];
                        value.push(option.value);
                        setDefaultValue(value);
                    }
                }}
            />
        );
    }

    const selected = currentDefaultValue === option.value;
    return (
        <Switch
            value={selected}
            onChange={() => {
                const newValue = selected ? "" : option.value;
                setDefaultValue(newValue);
            }}
        />
    );
};

/*
TODO
1. edit
2. translate
3. drag
4. key collision
*/
const OptionsListItem = props => {
    const { option, multiple, Bind, deleteOption, editOption, translateOption } = props;
    return (
        <li>
            <div className={optionsListItemLeft}>
                <span>
                    <Icon icon={<HandleIcon />} />
                </span>
                <span>
                    <div>
                        <I18NValue value={option.label} />
                    </div>
                    <div>{option.value}</div>
                </span>
            </div>
            <div className={optionsListItemRight}>
                <IconButton icon={<EditIcon />} onClick={editOption} />
                <Tooltip content={<span>Set locale values</span>} placement={"top"}>
                    <IconButton icon={<TranslateIcon />} onClick={translateOption} />
                </Tooltip>
                <IconButton icon={<DeleteIcon />} onClick={deleteOption} />
                <span>|</span>
                <Bind name={"settings.defaultValue"}>
                    <SetOptionAsDefaultValue multiple={multiple} option={option} />
                </Bind>
            </div>
        </li>
    );
};

const OptionsList = ({ form, multiple }: Object) => {
    const { Bind } = form;

    const [translateOption, setTranslateOption] = useState(null);
    const [editOption, setEditOption] = useState(null);
    const { getDefaultLocale } = useI18N();

    return (
        <Bind name={"options"} validators={["minLength:2", "required"]}>
            {({ value, onChange }) => (
                <>
                    <div>Options</div>
                    <div>
                        <AddOptionInput
                            onAdd={label => {
                                const newValue = Array.isArray(value) ? [...value] : [];
                                newValue.push({
                                    value: camelCase(label),
                                    label: {
                                        values: [{ locale: getDefaultLocale().id, value: label }]
                                    }
                                });
                                onChange(newValue);
                            }}
                        />
                    </div>
                    <div>
                        {Array.isArray(value) && value.length > 0 ? (
                            <ul className={optionsUl}>
                                {value.map((option, optionIndex) => (
                                    <OptionsListItem
                                        key={option.value}
                                        Bind={Bind}
                                        multiple={multiple}
                                        option={option}
                                        deleteOption={() => {
                                            const newValue = [...value];
                                            newValue.splice(optionIndex, 1);
                                            onChange(newValue);
                                        }}
                                        editOption={() => {
                                            const values = option.label.values;
                                            setEditOption(cloneDeep(values));
                                        }}
                                        translateOption={() => {
                                            setTranslateOption(cloneDeep(option));
                                        }}
                                    />
                                ))}
                            </ul>
                        ) : (
                            <span>Please add two or more options.</span>
                        )}
                    </div>

                    <I18NInputLocalesOverlay
                        values={translateOption ? translateOption.label.values : null}
                        open={!!translateOption}
                        onClose={() => setTranslateOption(null)}
                        onSubmit={value => {
                            console.log("value novi", value);
                        }}
                    />
                </>
            )}
        </Bind>
    );
};

export default OptionsList;
