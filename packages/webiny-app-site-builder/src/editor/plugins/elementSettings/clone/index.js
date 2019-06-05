//@flow
import React from "react";
import { ReactComponent as CloneIcon } from "webiny-app-site-builder/editor/assets/icons/round-queue-24px.svg";
import Action from "../components/Action";
import CloneAction from "./CloneAction";

export default {
    name: "sb-page-element-settings-clone",
    type: "sb-page-element-settings",
    renderAction() {
        return (
            <CloneAction>
                <Action tooltip={"Clone element"} icon={<CloneIcon />} />
            </CloneAction>
        );
    }
};
