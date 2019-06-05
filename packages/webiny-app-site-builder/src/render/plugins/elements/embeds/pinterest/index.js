// @flow
import React from "react";
import type { RenderElementPluginType } from "webiny-app-site-builder/types";
import PinterestEmbed from "./PinterestEmbed";

export default (): RenderElementPluginType => {
    return {
        name: "sb-render-page-element-pinterest",
        type: "sb-render-page-element",
        elementType: "pinterest",
        render(props) {
            return <PinterestEmbed element={props.element} />;
        }
    };
};
