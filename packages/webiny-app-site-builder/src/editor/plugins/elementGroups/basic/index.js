// @flow
import React from "react";
import { ReactComponent as TextIcon } from "webiny-app-site-builder/editor/assets/icons/round-text_format-24px.svg";
import type { ElementGroupPluginType } from "webiny-app-site-builder/types";

const basicGroup: ElementGroupPluginType = {
    name: "sb-page-element-group-basic",
    type: "sb-page-element-group",
    group: {
        title: "Basic",
        icon: <TextIcon />
    }
};

export default basicGroup;
