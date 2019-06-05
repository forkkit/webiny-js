//@flow
import React from "react";
import styled from "react-emotion";
import { set } from "dot-prop-immutable";
import { dispatch } from "webiny-app-site-builder/editor/redux";
import {
    createElement,
    createColumn,
    cloneElement,
    addElementToParent
} from "webiny-app-site-builder/editor/utils";
import { updateElement, deleteElement, elementCreated } from "webiny-app-site-builder/editor/actions";
import "./actions";
import Row from "./Row";
import { ReactComponent as RowIcon } from "webiny-app-site-builder/editor/assets/icons/row-icon.svg";
import type { ElementPluginType } from "webiny-app-site-builder/types";

export default (): ElementPluginType => {
    const PreviewBox = styled("div")({
        textAlign: "center",
        height: 50,
        svg: {
            height: 50,
            width: 50
        }
    });

    return {
        name: "sb-page-element-row",
        type: "sb-page-element",
        elementType: "row",
        toolbar: {
            title: "Row",
            group: "sb-page-element-group-layout",
            // Render element preview
            preview() {
                return (
                    <PreviewBox>
                        <RowIcon />
                    </PreviewBox>
                );
            }
        },
        settings: [
            "sb-page-element-settings-background",
            "sb-page-element-settings-animation",
            "",
            "sb-page-element-settings-border",
            "sb-page-element-settings-shadow",
            "",
            "sb-page-element-settings-padding",
            "sb-page-element-settings-margin",
            "sb-page-element-settings-width",
            "",
            "sb-page-element-settings-clone",
            "sb-page-element-settings-delete",
            ""
        ],
        // Target drop zones that will accept this type
        target: ["block", "column"],
        // This function is called when `createElement` is called for this plugin
        create(options = {}) {
            const row = {
                type: "row",
                elements: [],
                data: {
                    settings: {
                        margin: {
                            desktop: { all: 0 },
                            mobile: { all: 0 }
                        },
                        padding: {
                            desktop: { all: 0 },
                            mobile: { all: 0 }
                        }
                    }
                },
                ...options
            };

            // A row MUST contain at least 1 column
            if (!row.elements.length) {
                row.elements.push(createColumn({ data: { width: 100 } }));
            }

            return row;
        },

        // Render element in editor
        render(props) {
            return <Row {...props} />;
        },

        // This callback is executed when another element is dropped on the drop zones with type "row"
        onReceived({ source, target, position = null }) {
            let dispatchNew = false;
            let element;
            if (source.path) {
                // $FlowFixMe
                element = cloneElement(source);
            } else {
                dispatchNew = true;
                element = createElement(source.type, {}, target);
            }

            let column;
            if (element.type !== "column") {
                column = createColumn({ elements: [element] });
            }

            // Add new child element
            let row = addElementToParent(column || element, target, position);

            // Recalculate column widths
            row = distributeColumnWidths(row);

            // Dispatch update action
            dispatch(updateElement({ element: row }));

            if (source.path) {
                dispatch(deleteElement({ element: source }));
            }

            if (dispatchNew) {
                dispatch(elementCreated({ element, source }));
            }
        },

        onChildDeleted({ element }) {
            dispatch(updateElement({ element: distributeColumnWidths(element) }));
        }
    };
};

const distributeColumnWidths = row => {
    const width = Math.round((100 / row.elements.length) * 100) / 100;
    const columns = row.elements.map(el => {
        return set(el, "data.width", width);
    });
    return set(row, "elements", columns);
};
