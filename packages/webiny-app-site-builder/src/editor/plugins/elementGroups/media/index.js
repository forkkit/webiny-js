// @flow
import React from "react";
import { ReactComponent as MediaIcon } from "./round-music_video-24px.svg";
import type { ElementGroupPluginType } from "webiny-app-site-builder/types";

export default ({
    name: "sb-page-element-group-media",
    type: "sb-page-element-group",
    group: {
        title: "Media",
        icon: <MediaIcon />
    }
}: ElementGroupPluginType);
