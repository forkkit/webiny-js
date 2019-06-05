// @flow
import React from "react";
import { Route } from "react-router-dom";
import Helmet from "react-helmet";
import Loadable from "react-loadable";
import { AdminLayout } from "webiny-admin/components/AdminLayout";
import { SecureRoute } from "webiny-app-security/components";
import { CircularProgress } from "webiny-ui/Progress";
import EditorPluginsLoader from "../components/EditorPluginsLoader";

const Categories = Loadable({
    loader: () => import("webiny-app-site-builder/admin/views/Categories/Categories"),
    loading: CircularProgress
});

const Menus = Loadable({
    loader: () => import("webiny-app-site-builder/admin/views/Menus/Menus"),
    loading: CircularProgress
});

const Pages = Loadable({
    loader: () => import("webiny-app-site-builder/admin/views/Pages/Pages"),
    loading: CircularProgress
});

const Editor = Loadable({
    loader: () => import("webiny-app-site-builder/admin/views/Pages/Editor"),
    loading: CircularProgress
});

export default [
    {
        name: "route-sb-categories",
        type: "route",
        route: (
            <Route
                exact
                path="/site-builder/categories"
                render={() => (
                    <SecureRoute roles={["sb-categories"]}>
                        <AdminLayout>
                            <Helmet title={"Site Builder - Categories"} />
                            <Categories />
                        </AdminLayout>
                    </SecureRoute>
                )}
            />
        )
    },
    {
        name: "route-sb-menus",
        type: "route",
        route: (
            <Route
                exact
                path="/site-builder/menus"
                render={() => (
                    <SecureRoute roles={["sb-menus"]}>
                        <AdminLayout>
                            <Helmet title={"Site Builder - Menus"} />
                            <Menus />
                        </AdminLayout>
                    </SecureRoute>
                )}
            />
        )
    },
    {
        name: "route-sb-pages",
        type: "route",
        route: (
            <Route
                exact
                path="/site-builder/pages"
                render={({ location }) => (
                    <SecureRoute roles={["sb-editor"]}>
                        <EditorPluginsLoader location={location}>
                            <AdminLayout>
                                <Helmet title={"Site Builder - Pages"} />
                                <Pages />
                            </AdminLayout>
                        </EditorPluginsLoader>
                    </SecureRoute>
                )}
            />
        )
    },
    {
        name: "route-sb-editor",
        type: "route",
        route: (
            <Route
                exact
                path="/site-builder/editor/:id"
                render={({ location }) => (
                    <SecureRoute roles={["sb-editor"]}>
                        <EditorPluginsLoader location={location}>
                            <Helmet title={"Site Builder - Edit page"} />
                            <Editor />
                        </EditorPluginsLoader>
                    </SecureRoute>
                )}
            />
        )
    }
];
