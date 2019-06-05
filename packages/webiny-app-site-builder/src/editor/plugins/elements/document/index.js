// @flow
import React from "react";
import Document from "./Document";
import type { ElementPluginType } from "webiny-app-site-builder/types";

export default (): ElementPluginType => {
    return {
        name: "sb-page-element-document",
        type: "sb-page-element",
        elementType: "document",
        create(options = {}) {
            return {
                type: "document",
                elements: [],
                ...options
            };
        },
        render({ element }) {
            return <Document element={element} />;
        }
    };
};
