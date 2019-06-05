// @flow
import React from "react";
import Document from "./Document";
import type { ElementPluginType } from "webiny-app-site-builder/types";

export default (): ElementPluginType => {
    return {
        name: "sb-render-page-element-document",
        type: "sb-render-page-element",
        elementType: "document",
        create(options = {}) {
            return {
                type: "sb-page-element-document",
                elements: [],
                ...options
            };
        },
        render(props) {
            return <Document {...props} />;
        }
    };
};
