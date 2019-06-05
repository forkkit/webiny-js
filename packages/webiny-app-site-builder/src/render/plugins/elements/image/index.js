// @flow
import React from "react";
import Image from "./Image";
import type { RenderElementPluginType } from "webiny-app-site-builder/types";

export default (): RenderElementPluginType => {
    return {
        name: "sb-render-page-element-image",
        type: "sb-render-page-element",
        elementType: "image",
        render(props) {
            return <Image {...props} />;
        }
    };
};