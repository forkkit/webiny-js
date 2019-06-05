// @flow
import React from "react";
import { ReactComponent as ImageGroupIcon } from "webiny-app-site-builder/editor/assets/icons/round-collections-24px.svg";
import type { ElementGroupPluginType } from "webiny-app-site-builder/types";

const imageGroup: ElementGroupPluginType = {
    name: "sb-page-element-group-image",
    type: "sb-page-element-group",
    group: {
        title: "Image",
        icon: <ImageGroupIcon/>
    }
};

export default imageGroup;