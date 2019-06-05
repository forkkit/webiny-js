// @flow
import { get } from "lodash";
import type { SiteBuilderRenderElementStylePluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-render-page-element-style-width",
    type: "sb-render-page-element-style",
    renderStyle({ element, style }) {
        const { width } = get(element, "data.settings", {});

        if (!width) {
            return style;
        }

        return { ...style, width: width.value };
    }
}: SiteBuilderRenderElementStylePluginType);
