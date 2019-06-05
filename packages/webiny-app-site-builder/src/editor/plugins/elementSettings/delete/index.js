//@flow
import React from "react";
import { ReactComponent as DeleteIcon } from "webiny-app-site-builder/editor/assets/icons/delete.svg";
import DeleteAction from "./DeleteAction";
import Action from "../components/Action";

export default {
    name: "sb-page-element-settings-delete",
    type: "sb-page-element-settings",
    renderAction() {
        return (
            <DeleteAction>
                <Action tooltip={"Delete element"} shortcut={["Backspace", "Delete"]} icon={<DeleteIcon />} />
            </DeleteAction>
        );
    }
};