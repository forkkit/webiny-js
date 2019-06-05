//@flow
import React from "react";
import styled from "react-emotion";
import { set } from "dot-prop-immutable";
import { redux } from "webiny-app-site-builder/editor/redux";
import Column from "./Column";
import {
    createElement,
    createColumn,
    cloneElement,
    addElementToParent
} from "webiny-app-site-builder/editor/utils";
import { updateElement, deleteElement, elementCreated } from "webiny-app-site-builder/editor/actions";
import { getParentElementWithChildren } from "webiny-app-site-builder/editor/selectors";
import { ReactComponent as ColumnIcon } from "webiny-app-site-builder/editor/assets/icons/column-icon.svg";
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
        name: "sb-page-element-column",
        type: "sb-page-element",
        elementType: "column",
        toolbar: {
            title: "Column",
            group: "sb-page-element-group-layout",
            preview() {
                return (
                    <PreviewBox>
                        <ColumnIcon />
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
            "sb-page-element-settings-horizontal-align",
            "sb-page-element-settings-vertical-align",
            "",
            "sb-page-element-settings-clone",
            "sb-page-element-settings-delete",
            ""
        ],
        target: ["row"],
        create(options = {}) {
            return {
                type: "column",
                data: {
                    ...(options.data || {}),
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
                elements: options.elements || []
            };
        },
        render(props) {
            return <Column {...props} />;
        },
        canDelete({ element }) {
            const parent = getParentElementWithChildren(redux.store.getState(), element.id);
            return parent.elements.length > 1;
        },
        onReceived({ source, target, position = null }) {
            const droppedOnCenter = position === null;

            // Dropped a column onto a center drop zone
            if (source.type === "sb-page-element-column" && droppedOnCenter) {
                return splitColumn(source, target);
            }

            handleDroppedElement(source, target, position);
        }
    };
};

const handleDroppedElement = (source, target, position) => {
    let dispatchNew = false;
    let element;
    if (source.path) {
        // $FlowFixMe
        element = cloneElement(source);
    } else {
        dispatchNew = true;
        element = createElement(source.type, {}, target);
    }

    target = addElementToParent(element, target, position);
    redux.store.dispatch(updateElement({ element: target }));

    if (source.path) {
        redux.store.dispatch(deleteElement({ element: source }));
    }

    if (dispatchNew) {
        redux.store.dispatch(elementCreated({ element, source }));
    }
};

const splitColumn = (source, target) => {
    let dispatchNew = false;
    let row = getParentElementWithChildren(redux.store.getState(), target.id);
    // $FlowFixMe
    const targetIndex = row.elements.findIndex(el => el.id === target.id);

    // Split target column in half
    // $FlowFixMe
    row.elements[targetIndex].data.width /= 2;

    // Create a new column with half of the original target width
    let newColumn;
    if (source.path) {
        // $FlowFixMe
        newColumn = cloneElement(source);
    } else {
        dispatchNew = true;
        newColumn = createColumn();
    }

    // $FlowFixMe
    newColumn = set(newColumn, "data.width", row.elements[targetIndex].data.width);

    row = addElementToParent(newColumn, row, targetIndex + 1);
    redux.store.dispatch(updateElement({ element: row }));

    if (source.path) {
        redux.store.dispatch(deleteElement({ element: source }));
    }

    if (dispatchNew) {
        redux.store.dispatch(elementCreated({ element: newColumn, source }));
    }
};
