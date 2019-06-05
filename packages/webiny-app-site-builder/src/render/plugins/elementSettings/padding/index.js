// @flow
import { get } from "lodash";
import type { SiteBuilderRenderElementStylePluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-render-page-element-style-padding",
    type: "sb-render-page-element-style",
    renderStyle({ element, style }) {
        const { padding } = get(element, "data.settings", {});

        if (!padding) {
            return style;
        }

        const adv = padding.advanced;
        const { desktop = {}, mobile = {} } = padding;

        ["top", "right", "bottom", "left"].forEach(side => {
            style[`--desktop-padding-${side}`] = ((adv ? desktop[side] : desktop.all) || 0) + "px";
            style[`--mobile-padding-${side}`] = ((adv ? mobile[side] : mobile.all) || 0) + "px";
        });

        return style;
    }
}: SiteBuilderRenderElementStylePluginType);
