// @flow
import React from "react";
import OEmbed from "webiny-app-site-builder/render/components/OEmbed";
import type { RenderElementPluginType } from "webiny-app-site-builder/types";

const oembed = {
    global: "instgrm",
    sdk: "https://www.instagram.com/embed.js",
    init({ node }) {
        window.instgrm.Embeds.process(node.firstChild);
    }
};

export default (): RenderElementPluginType => {
    return {
        name: "sb-render-page-element-instagram",
        type: "sb-render-page-element",
        elementType: "instagram",
        render(props) {
            return <OEmbed element={props.element} {...oembed} />;
        }
    };
};
