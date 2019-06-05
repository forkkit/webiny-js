// @flow
import * as React from "react";
import { ReactComponent as PageListIcon } from "./round-format_list_bulleted-24px.svg";
import PageListForm from "./PageListForm";
import type { SiteBuilderMenuItemPluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-menu-item-page-list",
    type: "sb-menu-item",
    menuItem: {
        type: "page-list",
        title: "Page list",
        icon: <PageListIcon />,
        canHaveChildren: false,
        renderForm(props: Object) {
            return <PageListForm {...props} />;
        }
    }
}: SiteBuilderMenuItemPluginType);
