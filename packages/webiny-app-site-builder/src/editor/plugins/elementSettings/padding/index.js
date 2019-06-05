//@flow
import React from "react";
import { ReactComponent as PaddingIcon } from "webiny-app-site-builder/editor/assets/icons/fullscreen_exit.svg";
import Settings from "../components/PMSettings";
import Action from "../components/Action";

export default {
    name: "sb-page-element-settings-padding",
    type: "sb-page-element-settings",
    renderAction() {
        return <Action tooltip={"Padding"} plugin={this.name} icon={<PaddingIcon />} />;
    },
    renderMenu() {
        return <Settings title="Padding" styleAttribute="padding" />;
    }
};
