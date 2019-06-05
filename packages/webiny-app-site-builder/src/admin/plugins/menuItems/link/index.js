// @flow
import * as React from "react";
import { ReactComponent as LinkIcon } from "./round-link-24px.svg";
import LinkForm from "./LinkForm";
import type { SiteBuilderMenuItemPluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-menu-item-link",
    type: "sb-menu-item",
    menuItem: {
        type: "link",
        title: "Link",
        icon: <LinkIcon />,
        canHaveChildren: false,
        renderForm(props: Object) {
            return <LinkForm {...props} />;
        }
    }
}: SiteBuilderMenuItemPluginType);
