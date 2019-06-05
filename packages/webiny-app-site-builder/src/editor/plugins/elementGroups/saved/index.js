// @flow
import React from "react";
import { ReactComponent as SavedIcon } from "webiny-app-site-builder/editor/assets/icons/round-favorite-24px.svg";
import type { ElementGroupPluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-page-element-group-saved",
    type: "sb-page-element-group",
    group: {
        title: "Saved",
        icon: <SavedIcon />
    }
}: ElementGroupPluginType);
