// @flow
import React from "react";
import { ReactComponent as SocialIcon } from "./round-people-24px.svg";
import type { ElementGroupPluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-page-element-group-social",
    type: "sb-page-element-group",
    group: {
        title: "Social",
        icon: <SocialIcon />
    }
}: ElementGroupPluginType);
