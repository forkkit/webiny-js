//@flow
import React from "react";
import { addReducer } from "webiny-app-site-builder/editor/redux";
import { DEACTIVATE_ELEMENT } from "webiny-app-site-builder/editor/actions";
import Bar from "./ElementSettingsBar";

addReducer([DEACTIVATE_ELEMENT], "ui.plugins.element-settings", () => null);

export default {
    name: "sb-page-element-settings-settings-bar",
    type: "sb-editor-bar",
    shouldRender({ activeElement }: Object) {
        return activeElement;
    },

    render() {
        return <Bar />;
    }
};
