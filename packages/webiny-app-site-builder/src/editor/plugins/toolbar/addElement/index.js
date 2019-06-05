//@flow
import * as React from "react";
import { addReducer } from "webiny-app-site-builder/editor/redux";
import { ELEMENT_DROPPED } from "webiny-app-site-builder/editor/actions";
import { ReactComponent as AddIcon } from "webiny-app-site-builder/editor/assets/icons/add_circle_outline.svg";
import AddElement from "./AddElement";
import Action from "../Action";

addReducer([ELEMENT_DROPPED], "ui.activeElement", () => null);

export default {
    name: "sb-toolbar-add-element",
    type: "sb-toolbar-top",
    renderAction() {
        return <Action tooltip={"Add Element"} plugin={this.name} icon={<AddIcon />} />;
    },
    renderDrawer() {
        return <AddElement />;
    }
};
