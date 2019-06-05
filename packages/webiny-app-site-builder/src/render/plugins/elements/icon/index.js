// @flow
import React from "react";
import Icon from "./Icon";
import type { RenderElementPluginType } from "webiny-app-site-builder/types";

export default (): RenderElementPluginType => {
    return {
        name: "sb-render-page-element-icon",
        type: "sb-render-page-element",
        elementType: "icon",
        render(props) {
            return <Icon {...props} />;
        }
    };
};
