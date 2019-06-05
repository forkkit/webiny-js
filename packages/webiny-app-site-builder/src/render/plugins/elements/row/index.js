// @flow
import React from "react";
import Row from "./Row";
import type { RenderElementPluginType } from "webiny-app-site-builder/types";

export default (): RenderElementPluginType => {
    return {
        name: "sb-render-page-element-row",
        type: "sb-render-page-element",
        elementType: "row",
        render(props) {
            return <Row {...props} />;
        }
    };
};