//@flow
import React from "react";
import { ReactComponent as MarginIcon } from "webiny-app-site-builder/editor/assets/icons/fullscreen.svg";
import Settings from "../components/PMSettings";
import Action from "../components/Action";

export default {
    name: "sb-page-element-settings-margin",
    type: "sb-page-element-settings",
    renderAction({ active }: Object) {
        return (
            <Action tooltip={"Margin"} active={active} plugin={this.name} icon={<MarginIcon />} />
        );
    },
    renderMenu() {
        return <Settings title="Margin" styleAttribute="margin" />;
    }
};
