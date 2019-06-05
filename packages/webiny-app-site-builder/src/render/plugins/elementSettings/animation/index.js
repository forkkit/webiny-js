// @flow
import { get } from "lodash";
import type { SiteBuilderRenderElementAttributesPluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-render-page-element-attributes-animation",
    type: "sb-render-page-element-attributes",
    renderAttributes({ element, attributes }) {
        const { animation } = get(element, "data.settings", {});
        if (!animation) {
            return attributes;
        }

        const attrs: Object = { "data-aos": animation.name };

        if (animation.advanced) {
            attrs["data-aos-duration"] = animation.duration;
            attrs["data-aos-delay"] = animation.delay;
            attrs["data-aos-offset"] = animation.offset;
            attrs["data-aos-easing"] = animation.easing;
        }

        return { ...attributes, ...attrs };
    }
}: SiteBuilderRenderElementAttributesPluginType);
