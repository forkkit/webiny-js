// @flow
import * as React from "react";
import { ReactComponent as PageIcon } from "./round-subject-24px.svg";
import PageForm from "./PageForm";
import type { SiteBuilderMenuItemPluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-menu-item-page",
    type: "sb-menu-item",
    menuItem: {
        type: "page",
        title: "Page",
        icon: <PageIcon />,
        canHaveChildren: false,
        renderForm(props: Object) {
            return <PageForm {...props} />;
        }
    }
}: SiteBuilderMenuItemPluginType);
