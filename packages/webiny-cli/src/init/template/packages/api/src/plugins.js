// @flow
import apiPlugins from "webiny-api/plugins";
import filesPlugins from "webiny-api-files/plugins";
import securityPlugins from "webiny-api-security/plugins";
import siteBuilderPlugins from "webiny-api-site-builder/plugins";
import cookiePolicyPlugins from "webiny-api-cookie-policy";
import gtmPlugins from "webiny-api-google-tag-manager";
import mailchimpPlugins from "webiny-api-mailchimp";

export default [
    apiPlugins,
    filesPlugins,
    securityPlugins,
    siteBuilderPlugins,
    cookiePolicyPlugins,
    gtmPlugins,
    mailchimpPlugins
];
