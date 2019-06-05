// @flow
import React from "react";
import styled from "react-emotion";
import { getPlugin } from "webiny-plugins";
import { ELEMENT_CREATED } from "webiny-app-site-builder/editor/actions";
import type { PluginType } from "webiny-plugins/types";
import { ReactComponent as ImageIcon } from "./round-image-24px.svg";
import ImageSettings from "./ImageSettings";
import Image from "./Image";
import Action from "../../elementSettings/components/Action";

export default (): Array<PluginType> => {
    const PreviewBox = styled("div")({
        textAlign: "center",
        height: 50,
        svg: {
            height: 50,
            width: 50
        }
    });

    return [
        {
            name: "sb-page-element-image",
            type: "sb-page-element",
            elementType: "image",
            toolbar: {
                title: "Image",
                group: "sb-page-element-group-basic",
                preview() {
                    return (
                        <PreviewBox>
                            <ImageIcon />
                        </PreviewBox>
                    );
                }
            },
            settings: [
                "sb-page-element-settings-image",
                ["sb-page-element-settings-background", { image: false }],
                "sb-page-element-settings-link",
                "",
                "sb-page-element-settings-border",
                "sb-page-element-settings-shadow",
                "",
                [
                    "sb-page-element-settings-horizontal-align",
                    { alignments: ["left", "center", "right"] }
                ],
                "sb-page-element-settings-padding",
                "sb-page-element-settings-margin",
                "",
                "sb-page-element-settings-clone",
                "sb-page-element-settings-delete",
                ""
            ],
            target: ["column", "row"],
            create(options) {
                return {
                    type: "image",
                    elements: [],
                    data: {
                        settings: {
                            horizontalAlign: "center",
                            margin: {
                                desktop: { all: 0 },
                                mobile: { top: 0, left: 0, right: 0, bottom: 15 },
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
            render({ element }) {
                return <Image element={element} />;
            }
        },
        {
            name: "sb-page-element-settings-image",
            type: "sb-page-element-settings",
            renderAction() {
                return <Action plugin={this.name} tooltip={"Image"} icon={<ImageIcon />} />;
            },
            renderMenu() {
                return <ImageSettings />;
            }
        },
        {
            type: "sb-editor-redux-middleware",
            name: "sb-editor-redux-middleware-image-created",
            actions: [ELEMENT_CREATED],
            middleware: ({ action, next }) => {
                const { element, source } = action.payload;

                next(action);

                if (element.type !== "image") {
                    return;
                }

                // Check the source of the element (could be `saved` element which behaves differently from other elements)
                const imagePlugin = getPlugin(source.type);
                if (!imagePlugin) {
                    return;
                }

                const { onCreate } = imagePlugin;
                if (!onCreate || onCreate !== "skip") {
                    // If source element does not define a specific `onCreate` behavior - continue with the actual element plugin
                    // TODO: this isn't an ideal approach, implement a retry mechanism which polls for DOM element
                    setTimeout(() => {
                        const image = document.querySelector(
                            `#${window.CSS.escape(element.id)} [data-role="select-image"]`
                        );

                        if (image) {
                            image.click();
                        }
                    }, 100);
                }
            }
        }
    ];
};
