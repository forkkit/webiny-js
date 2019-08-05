// @flow
// $FlowFixMe
import React, { useState } from "react";
import { useI18N } from "webiny-app-i18n/components";
import { css } from "emotion";
import { camelCase, cloneDeep } from "lodash";
import { OptionsListItem, AddOptionInput, EditFieldOptionDialog } from "./OptionsListComponents";
const optionsUl = css({
    "> li": {
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid gray"
    }
});

const OptionsList = ({ form, multiple }: Object) => {
    const { Bind } = form;

    const [editOption, setEditOption] = useState(null);
    const { getDefaultLocale } = useI18N();

    return (
        <Bind name={"options"} validators={["minLength:2", "required"]}>
            {({ validation, value, onChange: setOptionsValue }) => (
                <>
                    <EditFieldOptionDialog
                        onClose={() => setEditOption(null)}
                        open={editOption !== null}
                        options={value}
                        data={editOption}
                        onSubmit={data => {
                            const newValue = [...value];
                            const [, optionIndex] = editOption;
                            newValue.splice(optionIndex, 1, data);
                            setOptionsValue(newValue);
                            setEditOption(null);
                        }}
                    />

                    <div>Options</div>
                    <div>
                        <AddOptionInput
                            options={value}
                            validation={validation}
                            onAdd={label => {
                                const newValue = Array.isArray(value) ? [...value] : [];
                                newValue.push({
                                    value: camelCase(label),
                                    label: {
                                        values: [{ locale: getDefaultLocale().id, value: label }]
                                    }
                                });
                                setOptionsValue(newValue);
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
                                            setOptionsValue(newValue);
                                        }}
                                        editOption={() =>
                                            setEditOption([cloneDeep(option), optionIndex])
                                        }
                                        setOptionTranslations={label => {
                                            const newValue = [...value];
                                            newValue.splice(optionIndex, 1, {
                                                value: option.value,
                                                label
                                            });
                                            setOptionsValue(newValue);
                                        }}
                                    />
                                ))}
                            </ul>
                        ) : (
                            <div style={{ padding: 40, textAlign: "center" }}>
                                No options added.
                            </div>
                        )}
                    </div>
                </>
            )}
        </Bind>
    );
};

export default OptionsList;
