// @flow
import React from "react";
import OEmbed from "webiny-app-site-builder/render/components/OEmbed";
import type { RenderElementPluginType } from "webiny-app-site-builder/types";

const oembed = {
    global: "twttr",
    sdk: "https://platform.twitter.com/widgets.js",
    init({ node }) {
        window.twttr.widgets.load(node);
    }
};

export default (): RenderElementPluginType => {
    return {
        name: "sb-render-page-element-twitter",
        type: "sb-render-page-element",
        elementType: "twitter",
        render(props) {
            return <OEmbed element={props.element} {...oembed} />;
        }
    };
};
