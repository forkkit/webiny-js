// @flow
import { hot } from "react-hot-loader";
import React from "react";
import { registerPlugins, getPlugins } from "webiny-plugins";
import { SiteBuilderProvider } from "webiny-app-site-builder/context";
import { UiProvider } from "webiny-app/context/ui";
import plugins from "./plugins";
import myTheme from "demo-theme";
import { GenericNotFoundPage, GenericErrorPage } from "./pages";

registerPlugins(plugins);

// Execute `init` plugins, they may register more plugins dynamically
getPlugins("webiny-init").forEach(plugin => plugin.callback());

const defaults = {
    pages: {
        notFound: GenericNotFoundPage,
        error: GenericErrorPage
    }
};

const App = () => {
    return (
        <UiProvider>
            <SiteBuilderProvider theme={myTheme} defaults={defaults}>
                {getPlugins("route").map((pl: Object) =>
                    React.cloneElement(pl.route, { key: pl.name, exact: true })
                )}
            </SiteBuilderProvider>
        </UiProvider>
    );
};

export default hot(module)(App);
