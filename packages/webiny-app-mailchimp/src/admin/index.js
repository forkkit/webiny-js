// @flow
import React from "react";
import styled from "react-emotion";
import { Tab } from "webiny-ui/Tabs";
import { Route } from "react-router-dom";
import Helmet from "react-helmet";
import { AdminLayout } from "webiny-admin/components/AdminLayout";
import MailchimpSettings from "./components/MailchimpSettings";
import MailchimpElementAdvancedSettings from "./components/MailchimpElementAdvancedSettings";
import MailchimpElement from "./components/MailchimpElement";
import { hasRoles } from "webiny-app-security";
import { SecureRoute } from "webiny-app-security/components";
import { ReactComponent as MailchimpLogo } from "./mailchimp-logo.svg";

import render from "./../render";

const PreviewBox = styled("div")({
    textAlign: "center",
    height: 80,
    svg: {
        height: 80,
        width: "auto"
    }
});

const roles = ["sb-settings"];

export default [
    ...render,
    {
        name: "sb-page-element-mailchimp",
        type: "sb-page-element",
        toolbar: {
            title: "Mailchimp",
            group: "sb-page-element-group-form",
            preview() {
                return (
                    <PreviewBox>
                        <MailchimpLogo />
                    </PreviewBox>
                );
            }
        },
        settings: ["sb-page-element-settings-delete", "", "sb-page-element-settings-height"],
        target: ["sb-page-element-column", "sb-page-element-row", "sb-page-element-list-item"],
        onCreate: "open-settings",
        render({ element }: Object) {
            return <MailchimpElement element={element} />;
        },
        create() {
            return {
                type: "sb-page-element-mailchimp",
                elements: [],
                data: {},
                settings: {}
            };
        }
    },
    {
        name: "sb-page-element-advanced-settings-mailchimp",
        type: "sb-page-element-advanced-settings",
        element: "mailchimp",
        render(props: Object) {
            return (
                <Tab label="Mailchimp">
                    <MailchimpElementAdvancedSettings {...props} />
                </Tab>
            );
        }
    },
    {
        type: "settings",
        name: "settings-mailchimp",
        settings: {
            show: () => hasRoles(roles),
            type: "integration",
            name: "Mailchimp",
            route: (
                <Route
                    path="/mailchimp"
                    render={() => (
                        <AdminLayout>
                            <Helmet title={"Mailchimp"} />
                            <SecureRoute roles={roles}>
                                <MailchimpSettings />
                            </SecureRoute>
                        </AdminLayout>
                    )}
                />
            )
        }
    }
];
