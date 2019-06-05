// @flow
import React from "react";
import OEmbed from "webiny-app-site-builder/render/components/OEmbed";
import type { RenderElementPluginType } from "webiny-app-site-builder/types";

export default (): RenderElementPluginType => {
    return {
        name: "sb-render-page-element-codesandbox",
        type: "sb-render-page-element",
        elementType: "codesandbox",
        render(props) {
            return <OEmbed element={props.element} />;
        }
    };
};
