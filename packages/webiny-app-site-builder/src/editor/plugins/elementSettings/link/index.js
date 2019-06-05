// @flow
import React from "react";
import type { PluginType } from "webiny-app-site-builder/types";
import { ReactComponent as LinkIcon } from "./round-link-24px.svg";
import LinkSettings from "./LinkSettings";
import Action from "../components/Action";

export default ({
    name: "sb-page-element-settings-link",
    type: "sb-page-element-settings",
    renderAction() {
        return <Action plugin={this.name} tooltip={"Link"} icon={<LinkIcon />} />;
    },
    renderMenu() {
        return <LinkSettings />;
    }
}: PluginType);
