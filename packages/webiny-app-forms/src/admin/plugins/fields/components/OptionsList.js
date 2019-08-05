// @flow
// $FlowFixMe
import React, { useState } from "react";
import { useI18N } from "webiny-app-i18n/components";
import { css } from "emotion";
import { camelCase, cloneDeep } from "lodash";
import { OptionsListItem, AddOptionInput, EditFieldOptionDialog } from "./OptionsListComponents";
import { sortableContainer, sortableElement, sortableHandle } from "react-sortable-hoc";
import { Icon } from "webiny-ui/Icon";
import { ReactComponent as HandleIcon } from "webiny-app-forms/admin/icons/round-drag_indicator-24px.svg";

const optionListItem = css({
    zIndex: 10,
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid gray",
    background: "white"
});

const DragHandle = sortableHandle(() => (
    <Icon icon={<HandleIcon style={{ cursor: "pointer" }} />} />
));

const SortableContainer = sortableContainer(({ children }) => {
    return <ul>{children}</ul>;
});

const SortableItem = sortableElement(
    ({ setOptionsValue, setEditOption, value, options, Bind, multiple, index: optionIndex }) => (
        <li className={optionListItem}>
            <OptionsListItem
                dragHandle={<DragHandle />}
                key={value.value}
                Bind={Bind}
                multiple={multiple}
                option={value}
                deleteOption={() => {
                    const newValue = [...options];
                    newValue.splice(optionIndex, 1);
                    setOptionsValue(newValue);
                }}
                editOption={() => setEditOption([cloneDeep(value), optionIndex])}
                setOptionTranslations={label => {
                    const newValue = [...options];
                    newValue.splice(optionIndex, 1, {
                        value: value.value,
                        label
                    });
                    setOptionsValue(newValue);
                }}
            />
        </li>
    )
);

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
                            <SortableContainer
                                useDragHandle
                                transitionDuration={0}
                                onSortEnd={({ oldIndex, newIndex }) => {
                                    const newValue = [...value];
                                    const [movedItem] = newValue.splice(oldIndex, 1);
                                    newValue.splice(newIndex, 0, movedItem);
                                    setOptionsValue(newValue);
                                }}
                            >
                                {value.map((item, index) => (
                                    <SortableItem
                                        Bind={Bind}
                                        setEditOption={setEditOption}
                                        multiple={multiple}
                                        setOptionsValue={setOptionsValue}
                                        key={`item-${index}`}
                                        index={index}
                                        value={item}
                                        options={value}
                                    />
                                ))}
                            </SortableContainer>
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
