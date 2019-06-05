// @flow
import { get, startCase } from "lodash";
import type { SiteBuilderRenderElementStylePluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-render-page-element-style-border",
    type: "sb-render-page-element-style",
    renderStyle({ element, style }) {
        const { border } = get(element, "data.settings", {});
        if (!border) {
            return style;
        }

        if (border.radius) {
            style.borderRadius = border.radius;
        }

        ["top", "right", "bottom", "left"].forEach(side => {
            let sideEnabled = get(border, `borders.${side}`);
            if (typeof sideEnabled === "undefined") {
                sideEnabled = true;
            }

            if (sideEnabled) {
                const Side = startCase(side);
                style[`border${Side}Style`] = border.style;
                style[`border${Side}Color`] = border.color;
                style[`border${Side}Width`] = border.width;
            }
        });

        return style;
    }
}: SiteBuilderRenderElementStylePluginType);
