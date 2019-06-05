// @flow
import React from "react";
import { connect } from "webiny-app-site-builder/editor/redux";
import { compose, withHandlers } from "recompose";
import { set } from "dot-prop-immutable";
import ConnectedSlate from "webiny-app-site-builder/editor/components/ConnectedSlate";
import { ElementRoot } from "webiny-app-site-builder/render/components/ElementRoot";
import { updateElement } from "webiny-app-site-builder/editor/actions";
import { getElement } from "webiny-app-site-builder/editor/selectors";

export const className = "webiny-sb-base-element-style webiny-sb-page-element-text";

const Text = ({ element, onChange }) => {
    return (
        <ElementRoot element={element} className={className}>
            <ConnectedSlate elementId={element.id} onChange={onChange} />
        </ElementRoot>
    );
};

export default compose(
    connect(
        (state, props) => ({
            element: getElement(state, props.elementId)
        }),
        { updateElement }
    ),
    withHandlers({
        onChange: ({ element, updateElement }) => value => {
            updateElement({ element: set(element, "data.text", value) });
        }
    })
)(Text);
