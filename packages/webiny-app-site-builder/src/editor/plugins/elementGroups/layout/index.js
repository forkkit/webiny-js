// @flow
import React from "react";
import { ReactComponent as LayoutIcon } from "webiny-app-site-builder/editor/assets/icons/round-view_quilt-24px.svg";
import type { ElementGroupPluginType } from "webiny-app-site-builder/types";

const layoutGroup: ElementGroupPluginType = {
    name: "sb-page-element-group-layout",
    type: "sb-page-element-group",
    group: {
        title: "Layout",
        icon: <LayoutIcon/>
    }
};

export default layoutGroup;