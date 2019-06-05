// @flow
import React from "react";
import Spacer from "./Spacer";
import type { RenderElementPluginType } from "webiny-app-site-builder/types";

export default (): RenderElementPluginType => {
    return {
        name: "sb-render-page-element-spacer",
        type: "sb-render-page-element",
        elementType: "spacer",
        render(props) {
            return <Spacer {...props} />;
        }
    };
};