// @flow
import React from "react";
import { ReactComponent as HelpIcon } from "webiny-app-site-builder/editor/assets/icons/help_outline.svg";
import type { SiteBuilderElementActionPluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-page-element-action-help",
    type: "sb-page-element-action",
    render({ plugin }) {
        return plugin.help ? <HelpIcon onClick={() => window.open(plugin.help, "_blank")} /> : null;
    }
}: SiteBuilderElementActionPluginType);
