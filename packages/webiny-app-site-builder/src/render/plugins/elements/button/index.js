// @flow
import React from "react";
import Button from "./Button";
import type { RenderElementPluginType } from "webiny-app-site-builder/types";

export default (): RenderElementPluginType => {
    return {
        name: "sb-render-page-element-button",
        type: "sb-render-page-element",
        elementType: "button",
        render(props) {
            return <Button {...props} />;
        }
    };
};