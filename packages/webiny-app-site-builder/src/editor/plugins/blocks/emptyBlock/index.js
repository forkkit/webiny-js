// @flow
import * as React from "react";
import { createBlock, createRow, createColumn } from "webiny-app-site-builder/editor/utils";
import preview from "./preview.png";

export default {
    name: "sb-block-empty",
    type: "sb-block",
    category: "general",
    title: "Empty block",
    create(options: Object = {}) {
        return createBlock({
            ...options,
            elements: [
                createRow({
                    elements: [createColumn({ data: { width: 100 } })]
                })
            ]
        });
    },
    image: {
        width: 500,
        height: 73,
        aspectRatio: 500 / 73
    },
    preview() {
        return <img src={preview} alt={"Empty block"} />;
    }
};
