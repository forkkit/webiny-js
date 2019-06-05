// @flow
import * as React from "react";
import { connect } from "webiny-app-site-builder/editor/redux";
import { getPlugins } from "webiny-plugins";
import { getActiveElement } from "webiny-app-site-builder/editor/selectors";

const AdvancedAction = ({ elementType, children }: Object) => {
    const plugins = getPlugins("sb-page-element-advanced-settings");

    if (!plugins.some(pl => pl.element === elementType)) {
        return null;
    }

    return children;
};

export default connect(state => ({ elementType: getActiveElement(state).type }))(AdvancedAction);
