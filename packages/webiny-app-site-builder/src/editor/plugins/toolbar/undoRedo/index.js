//@flow
import platform from "platform";
import React from "react";
import { dispatch } from "webiny-app-site-builder/editor/redux";
import { ActionCreators } from "redux-undo";
import { ReactComponent as UndoIcon } from "webiny-app-site-builder/editor/assets/icons/undo-icon.svg";
import { ReactComponent as RedoIcon } from "webiny-app-site-builder/editor/assets/icons/redo-icon.svg";
import Action from "../Action";

const metaKey = platform.os.family === "OS X" ? "CMD" : "CTRL";

export const undo = {
    name: "toolbar-undo",
    type: "sb-toolbar-bottom",
    renderAction() {
        return (
            <Action
                tooltip={`Undo (${metaKey}+Z)`}
                onClick={() => dispatch(ActionCreators.undo())}
                icon={<UndoIcon />}
            />
        );
    }
};

export const redo = {
    name: "toolbar-redo",
    type: "sb-toolbar-bottom",
    renderAction() {
        return (
            <Action
                tooltip={`Redo (${metaKey}+SHIFT+Z)`}
                onClick={() => dispatch(ActionCreators.redo())}
                icon={<RedoIcon />}
            />
        );
    }
};