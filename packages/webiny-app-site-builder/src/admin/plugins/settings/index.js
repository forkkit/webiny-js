// @flow
import * as React from "react";
import { Route } from "react-router-dom";
import { AdminLayout } from "webiny-admin/components/AdminLayout";
import SiteBuilderSettings from "./components/Settings";
import GeneralSettings from "./components/generalSettings/GeneralSettings";
import type { SettingsPluginType } from "webiny-admin/types";
import { hasRoles } from "webiny-app-security";
import { SecureRoute } from "webiny-app-security/components";

export default ([
    {
        type: "settings",
        name: "settings-site-builder",
        settings: {
            show: () => {
                return hasRoles(["sb-settings", "sb-editor"]);
            },
            type: "app",
            name: "Site Builder",
            route: (
                <Route
                    path="/site-builder"
                    render={() => (
                        <AdminLayout>
                            <SecureRoute roles={["sb-settings", "sb-editor"]}>
                                <SiteBuilderSettings />
                            </SecureRoute>
                        </AdminLayout>
                    )}
                />
            )
        }
    },
    {
        type: "settings",
        name: "settings-general-settings",
        settings: {
            show: () => {
                return hasRoles(["sb-settings"]);
            },
            type: "other",
            name: "General settings",
            route: (
                <Route
                    path="/general"
                    render={() => (
                        <AdminLayout>
                            <SecureRoute roles={["sb-settings"]}>
                                <GeneralSettings />
                            </SecureRoute>
                        </AdminLayout>
                    )}
                />
            )
        }
    }
]: Array<SettingsPluginType>);
