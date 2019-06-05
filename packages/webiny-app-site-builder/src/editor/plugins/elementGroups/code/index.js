// @flow
import React from "react";
import { ReactComponent as CodeIcon } from "./code.svg";
import type { ElementGroupPluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-page-element-group-code",
    type: "sb-page-element-group",
    group: {
        title: "Code",
        icon: <CodeIcon />
    }
}: ElementGroupPluginType);
