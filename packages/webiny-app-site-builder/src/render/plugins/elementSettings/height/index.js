// @flow
import { get } from "lodash";
import type { SiteBuilderRenderElementStylePluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-render-page-element-style-height",
    type: "sb-render-page-element-style",
    renderStyle({ element, style }) {
        const { height } = get(element, "data.settings", {});
        if (!height) {
            return style;
        }

        if (height.fullHeight) {
            // If `fullHeight=true`, we completely ignore the height value.
            style.height = "100vh";
        } else {
            style.height = height.value;
        }

        return style;
    }
}: SiteBuilderRenderElementStylePluginType);
