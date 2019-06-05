// @flow
import * as React from "react";
import { withSiteBuilder } from "webiny-app-site-builder/context";

const Layout = ({ siteBuilder: { theme }, layout, children }) => {
    const themeLayout = theme.layouts.find(l => l.name === layout);

    if (!themeLayout) {
        return children;
    }

    return React.createElement(themeLayout.component, null, children);
};

export default withSiteBuilder()(Layout);
