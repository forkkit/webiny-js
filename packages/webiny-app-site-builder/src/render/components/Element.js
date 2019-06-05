//@flow
import { getPlugins } from "webiny-plugins";
import { withSiteBuilder } from "webiny-app-site-builder/context";
import type { ElementType } from "webiny-app-site-builder/types";

declare type ElementProps = {
    element: ElementType,
    siteBuilder: Object
};

const Element = ({ element, siteBuilder: { theme } }: ElementProps) => {
    if (!element) {
        return null;
    }

    const plugin = getPlugins("sb-render-page-element").find(pl => pl.elementType === element.type);

    if (!plugin) {
        return null;
    }

    return plugin.render({ theme, element });
};

export default withSiteBuilder()(Element);
