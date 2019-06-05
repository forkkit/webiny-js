// @flow
import React from "react";
import OEmbed from "webiny-app-site-builder/render/components/OEmbed";
import type { RenderElementPluginType } from "webiny-app-site-builder/types";
import YoutubeEmbed from "./YoutubeEmbed";

export default (): RenderElementPluginType => {
    const renderEmbed = props => {
        return <YoutubeEmbed {...props} />;
    };

    return {
        name: "sb-render-page-element-youtube",
        type: "sb-render-page-element",
        elementType: "youtube",
        render(props) {
            return <OEmbed element={props.element} renderEmbed={renderEmbed} />;
        }
    };
};
