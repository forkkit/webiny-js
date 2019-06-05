// @flow
import { get } from "lodash";
import type { SiteBuilderRenderElementStylePluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-render-page-element-style-shadow",
    type: "sb-render-page-element-style",
    renderStyle({ element, style }: Object) {
        const { shadow } = get(element, "data.settings", {});
        if (!shadow) {
            return style;
        }

        return {
            ...style,
            boxShadow: [
                (shadow.horizontal || 0) + "px",
                (shadow.vertical || 0) + "px",
                (shadow.blur || 0) + "px",
                (shadow.spread || 0) + "px",
                shadow.color || "#000"
            ].join(" ")
        };
    }
}: SiteBuilderRenderElementStylePluginType);
