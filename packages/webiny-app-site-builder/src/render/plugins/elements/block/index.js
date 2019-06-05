// @flow
import React from "react";
import Block from "./Block";
import type { RenderElementPluginType } from "webiny-app-site-builder/types";

export default (): RenderElementPluginType => {
    return {
        name: "sb-render-page-element-block",
        type: "sb-render-page-element",
        elementType: "block",
        render(props) {
            return <Block {...props} />;
        }
    };
};