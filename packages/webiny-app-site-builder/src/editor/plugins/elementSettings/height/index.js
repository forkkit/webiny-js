//@flow
import React from "react";
import { ReactComponent as HeightIcon } from "./arrows-alt-v-solid.svg";
import Settings from "./Settings";
import Action from "../components/Action";

export default {
    name: "sb-page-element-settings-height",
    type: "sb-page-element-settings",
    renderAction() {
        return <Action tooltip={"height"} plugin={this.name} icon={<HeightIcon />} />;
    },
    renderMenu() {
        return <Settings />;
    }
};
