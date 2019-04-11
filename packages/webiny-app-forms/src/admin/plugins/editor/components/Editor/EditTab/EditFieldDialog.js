import React, { Fragment } from "react";
import { css } from "emotion";
import {
    Dialog,
    DialogBody,
    DialogHeader,
    DialogHeaderTitle,
    DialogCancel,
    DialogFooter,
    DialogFooterButton
} from "webiny-ui/Dialog";

import { Form } from "webiny-form";
import { getPlugins } from "webiny-plugins";

import { Input } from "webiny-ui/Input";
import { Grid, Cell } from "webiny-ui/Grid";
import { Tabs, Tab } from "webiny-ui/Tabs";
import { Elevation } from "webiny-ui/Elevation";
import { Typography } from "webiny-ui/Typography";
import { Icon } from "webiny-ui/Icon";
import useEditFieldDialog from "./useEditFieldDialog";

const dialogBody = css({
    "&.mdc-dialog__body": {
        marginTop: 0,
        padding: "24px 0 0 0"
    }
});

const Thumbnail = ({ fieldType, onClick }) => {
    return (
        <Elevation z={2} onClick={onClick}>
            <Icon icon={fieldType.icon} />
            <Typography use={"headline5"}>{fieldType.label}</Typography>
            <Typography use={"caption"}>{fieldType.description}</Typography>
        </Elevation>
    );
};

const EditFieldDialog = ({ open, field, onClose, onSave }) => {
    const hook = useEditFieldDialog({ open, field });
    const { getFieldType, createSlugify, uniqueId, editField, setField } = hook;

    const fieldType = getFieldType();

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogHeader>
                <DialogHeaderTitle>Field Settings</DialogHeaderTitle>
            </DialogHeader>
            {/* If `editField` is not present, show data type fields. */}
            {!editField && (
                <Fragment>
                    <DialogBody className={dialogBody}>
                        {getPlugins("cms-form-field-type")
                            .filter(pl => pl.fieldType.dataType)
                            .map(pl => (
                                <Thumbnail
                                    key={pl.name}
                                    fieldType={pl.fieldType}
                                    onClick={() => setField(pl.fieldType.createField())}
                                />
                            ))}
                    </DialogBody>
                    <DialogFooter>
                        <DialogCancel onClick={onClose}>Cancel</DialogCancel>
                    </DialogFooter>
                </Fragment>
            )}

            {editField && (
                <Form
                    submitOnEnter
                    data={editField}
                    onSubmit={data => {
                        onSave(data);
                        onClose();
                    }}
                >
                    {({ Bind, submit, setValue }) => {
                        const slugify = createSlugify(setValue);

                        return (
                            <Fragment>
                                <DialogBody className={dialogBody}>
                                    <Tabs>
                                        <Tab label={"General"}>
                                            {typeof fieldType.renderSettings === "function" ? (
                                                fieldType.renderSettings({ Bind, slugify, uniqueId })
                                            ) : (
                                                <Grid>
                                                    <Cell span={6}>
                                                        <Bind
                                                            name={"label"}
                                                            validators={["required"]}
                                                            afterChange={slugify("id")}
                                                        >
                                                            <Input label={"Label"} />
                                                        </Bind>
                                                    </Cell>
                                                    <Cell span={6}>
                                                        <Bind
                                                            name={"id"}
                                                            validators={["required", uniqueId]}
                                                        >
                                                            <Input label={"Field ID"} />
                                                        </Bind>
                                                    </Cell>
                                                    <Cell span={12}>
                                                        <Bind name={"helpText"}>
                                                            <Input
                                                                label={"Help text"}
                                                                description={"Help text (optional)"}
                                                            />
                                                        </Bind>
                                                    </Cell>
                                                    <Cell span={12}>
                                                        <Bind name={"placeholderText"}>
                                                            <Input
                                                                label={"Placeholder text"}
                                                                description={
                                                                    "Placeholder text (optional)"
                                                                }
                                                            />
                                                        </Bind>
                                                    </Cell>
                                                    <Cell span={12}>
                                                        <Bind name={"defaultValue"}>
                                                            <Input
                                                                label={"Default value"}
                                                                description={"Default value (optional)"}
                                                            />
                                                        </Bind>
                                                    </Cell>
                                                </Grid>
                                            )}
                                        </Tab>
                                        <Tab label={"Validators"} />
                                    </Tabs>
                                </DialogBody>
                                <DialogFooter>
                                    <DialogFooterButton onClick={onClose}>Cancel</DialogFooterButton>
                                    <DialogFooterButton onClick={submit}>Save</DialogFooterButton>
                                </DialogFooter>
                            </Fragment>
                        )
                    }}
                </Form>
            )}
        </Dialog>
    );
};

export default EditFieldDialog;
