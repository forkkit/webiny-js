// @flow
import React from "react";
import OEmbed from "webiny-app-site-builder/render/components/OEmbed";
import type { RenderElementPluginType } from "webiny-app-site-builder/types";
import VimeoEmbed from "./VimeoEmbed";

export default (): RenderElementPluginType => {
    const renderEmbed = props => {
        return <VimeoEmbed {...props} />;
    };

    return {
        name: "sb-render-page-element-vimeo",
        type: "sb-render-page-element",
        elementType: "vimeo",
        render(props) {
            return <OEmbed element={props.element} renderEmbed={renderEmbed} />;
        }
    };
};
