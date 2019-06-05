// @flow
import React from "react";
import { ReactComponent as FormIcon } from "./round-developer_board-24px.svg";
import type { ElementGroupPluginType } from "webiny-app-site-builder/types";

export default ({
    type: "sb-page-element-group",
    name: "sb-page-element-group-form",
    group: {
        title: "Form",
        icon: <FormIcon />
    }
}: ElementGroupPluginType);
