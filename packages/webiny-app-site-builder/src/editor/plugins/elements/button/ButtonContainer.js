// @flow
import * as React from "react";
import { connect } from "webiny-app-site-builder/editor/redux";
import { compose, withHandlers } from "recompose";
import { set } from "dot-prop-immutable";
import { updateElement } from "webiny-app-site-builder/editor/actions";
import { getElement } from "webiny-app-site-builder/editor/selectors";
import ConnectedSlate from "webiny-app-site-builder/editor/components/ConnectedSlate";

const excludePlugins = [
    "sb-slate-menu-item-link",
    "sb-slate-menu-item-align",
    "sb-slate-menu-item-ordered-list",
    "sb-slate-menu-item-unordered-list",
    "sb-slate-menu-item-code",
    "sb-slate-editor-align",
    "sb-slate-editor-lists",
    "sb-slate-editor-link"
];

const ButtonContainer = ({ getAllClasses, elementStyle, elementAttributes, element, onChange }) => {
    const { type = "default", icon = {}, } = element.data || {};
    const svg = icon.svg || null;
    const { alignItems } = elementStyle;

    const { position = "left" } = icon;

    return (
        <div
            style={{
                display: "flex",
                justifyContent: alignItems
            }}
        >
            <a
                href={null}
                style={elementStyle}
                {...elementAttributes}
                className={getAllClasses(
                    "webiny-sb-page-element-button",
                    "webiny-sb-page-element-button--" + type,
                    "webiny-sb-page-element-button__icon--" + position
                )}
            >
                {svg && <span dangerouslySetInnerHTML={{ __html: svg }} />}
                <ConnectedSlate
                    elementId={element.id}
                    onChange={onChange}
                    exclude={excludePlugins}
                />
            </a>
        </div>
    );
};

export default compose(
    connect(
        (state, props) => ({ element: getElement(state, props.elementId) }),
        { updateElement }
    ),
    withHandlers({
        onChange: ({ element, updateElement }) => (value: string) => {
            updateElement({ element: set(element, "data.text", value) });
        }
    })
)(ButtonContainer);
