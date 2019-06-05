// @flow
import React from "react";
import type { PluginType } from "webiny-plugins/types";
import RenderMailchimpForm from "./components/RenderMailchimpForm";
import MailchimpDefaultForm from "./components/MailchimpDefaultForm";

export default ([
    {
        name: "sb-render-element-mailchimp",
        type: "sb-render-element",
        element: "mailchimp",
        render(props: *) {
            return <RenderMailchimpForm {...props} />;
        }
    },
    {
        type: "sb-page-element-mailchimp-component",
        name: "sb-page-element-mailchimp-component-default",
        title: "Default newsletter form",
        component: MailchimpDefaultForm
    }
]: Array<PluginType>);
