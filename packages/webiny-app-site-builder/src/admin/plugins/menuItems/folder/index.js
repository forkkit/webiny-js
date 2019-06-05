// @flow
import * as React from "react";
import { ReactComponent as LinkIcon } from "./round-folder-24px.svg";
import FolderForm from "./FolderForm";
import type { SiteBuilderMenuItemPluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-menu-item-folder",
    type: "sb-menu-item",
    menuItem: {
        type: "folder",
        title: "Folder",
        icon: <LinkIcon />,
        canHaveChildren: true,
        renderForm(props: Object) {
            return <FolderForm {...props} />;
        }
    }
}: SiteBuilderMenuItemPluginType);
