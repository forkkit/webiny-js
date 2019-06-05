// @flow
import React from "react";
import Text from "./Text";
import type { RenderElementPluginType } from "webiny-app-site-builder/types";

export default (): RenderElementPluginType => {
    return {
        name: "sb-render-page-element-text",
        type: "sb-render-page-element",
        elementType: "text",
        render(props) {
            return <Text {...props} />;
        }
    };
};