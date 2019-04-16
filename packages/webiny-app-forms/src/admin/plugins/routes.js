// @flow
import React from "react";
import Helmet from "react-helmet";
import Loadable from "react-loadable";
import { SecureRoute } from "webiny-app-security/components";
import { CircularProgress } from "webiny-ui/Progress";

const FormEditor = Loadable({
    loader: () => import("../views/Editor"),
    loading: CircularProgress
});

export default [
    {
        name: "route-cms-form-editor",
        type: "route",
        route: {
            name: "Cms.Forms.Editor",
            path: "/cms/forms/:id",
            render() {
                return (
                    <SecureRoute roles={["cms-forms-editor"]}>
                        <Helmet>
                            <title>CMS - Edit form</title>
                        </Helmet>
                        <FormEditor />
                    </SecureRoute>
                );
            }
        }
    }
];
