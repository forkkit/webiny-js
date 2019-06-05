// @flow
import * as React from "react";
import { connect } from "webiny-app-site-builder/editor/redux";
import { compose, withHandlers } from "recompose";
import { getPlugins } from "webiny-plugins";
import { set } from "dot-prop-immutable";
import { redux } from "webiny-app-site-builder/editor/redux";
import { updateElement } from "webiny-app-site-builder/editor/actions";
import { getActiveElement } from "webiny-app-site-builder/editor/selectors";
import { cloneElement } from "webiny-app-site-builder/editor/utils";
import {
    getElementWithChildren,
    getParentElementWithChildren
} from "webiny-app-site-builder/editor/selectors";

const CloneAction = ({ element, children, duplicate }: Object) => {
    const plugin = getPlugins("sb-page-element").find(pl => pl.elementType === element.type);
    if (!plugin) {
        return null;
    }

    return React.cloneElement(children, { onClick: duplicate });
};

export default compose(
    connect(
        state => ({ element: getActiveElement(state) }),
        { updateElement }
    ),
    withHandlers({
        duplicate: ({ element }) => () => {
            const elementId = element && element.id;
            if (!elementId) {
                return;
            }

            const state = redux.store.getState();
            element = getElementWithChildren(state, elementId);
            if (!element) {
                return;
            }

            const parent = getParentElementWithChildren(state, elementId);
            const position = parent.elements.findIndex(el => el.id === elementId) + 1;

            const newElement = set(parent, "elements", [
                ...parent.elements.slice(0, position),
                cloneElement(element),
                ...(position < parent.elements.length ? parent.elements.slice(position) : [])
            ]);
            return redux.store.dispatch(updateElement({ element: newElement }));
        }
    })
)(CloneAction);
