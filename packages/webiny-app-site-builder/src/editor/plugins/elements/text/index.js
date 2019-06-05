// @flow
import React from "react";
import loremIpsum from "lorem-ipsum";
import Text, { className } from "./Text";
import { createValue } from "webiny-app-site-builder/editor/components/Slate";
import type { ElementPluginType } from "webiny-app-site-builder/types";

export default (): ElementPluginType => {
    const defaultLipsum = {
        count: 3,
        units: "sentences",
        sentenceLowerBound: 5,
        sentenceUpperBound: 15
    };

    return {
        name: "sb-page-element-text",
        type: "sb-page-element",
        elementType: "text",
        toolbar: {
            title: "Text",
            group: "sb-page-element-group-basic",
            preview() {
                const previewText = loremIpsum(defaultLipsum);

                return <p className={className}>{previewText}</p>;
            }
        },
        settings: [
            "sb-page-element-settings-background",
            "",
            "sb-page-element-settings-border",
            "sb-page-element-settings-shadow",
            "",
            "sb-page-element-settings-padding",
            "sb-page-element-settings-margin",
            "",
            "sb-page-element-settings-clone",
            "sb-page-element-settings-delete",
            ""
        ],
        target: ["column", "row", "list-item"],
        create({ content = {}, ...options }: Object) {
            const previewText = content.text || loremIpsum(content.lipsum || defaultLipsum);

            return {
                type: "text",
                elements: [],
                data: {
                    text: createValue(previewText, content.typography || "paragraph"),
                    settings: {
                        margin: {
                            mobile: { top: 0, left: 0, right: 0, bottom: 15 },
                            desktop: { top: 0, left: 0, right: 0, bottom: 25 },
                            advanced: true
                        },
                        padding: {
                            desktop: { all: 0 },
                            mobile: { all: 0 }
                        }
                    }
                },
                ...options
            };
        },
        render({ element }: Object) {
            return <Text elementId={element.id} />;
        }
    };
};
