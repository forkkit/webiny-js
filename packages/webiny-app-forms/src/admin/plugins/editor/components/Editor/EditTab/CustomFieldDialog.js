import React from "react";
import { getPlugins } from "webiny-plugins";
import {
    Dialog,
    DialogBody,
    DialogHeader,
    DialogHeaderTitle,
    DialogCancel,
    DialogFooter
} from "webiny-ui/Dialog";
import { Elevation } from "webiny-ui/Elevation";
import { Typography } from "webiny-ui/Typography";
import { Icon } from "webiny-ui/Icon";

const Thumbnail = ({ fieldType, onClick }) => {
    return (
        <Elevation z={2} onClick={onClick}>
            <Icon icon={fieldType.icon} />
            <Typography use={"headline5"}>{fieldType.label}</Typography>
            <Typography use={"caption"}>{fieldType.description}</Typography>
        </Elevation>
    );
};

const CustomFieldDialog = ({ open, onClose, onSelect }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogHeader>
                <DialogHeaderTitle>New Field</DialogHeaderTitle>
            </DialogHeader>
            <DialogBody>
                {getPlugins("cms-form-field-type")
                    .filter(pl => pl.fieldType.dataType)
                    .map(pl => {
                        return (
                            <Thumbnail
                                key={pl.name}
                                fieldType={pl.fieldType}
                                onClick={() => onSelect(pl.fieldType.createField())}
                            />
                        );
                    })}
            </DialogBody>
            <DialogFooter>
                <DialogCancel>Cancel</DialogCancel>
            </DialogFooter>
        </Dialog>
    );
};

export default CustomFieldDialog;
