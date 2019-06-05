// @flow
import React from "react";
import Column from "./Column";
import type { RenderElementPluginType } from "webiny-app-site-builder/types";

export default (): RenderElementPluginType => {
    return {
        name: "sb-render-page-element-column",
        type: "sb-render-page-element",
        elementType: "column",
        render(props) {
            return <Column {...props} />;
        }
    };
};