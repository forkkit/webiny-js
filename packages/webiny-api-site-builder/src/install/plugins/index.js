// @flow
import { type InstallPluginType } from "webiny-install/types";
import { general, seo, social } from "webiny-api-site-builder/plugins/pageSettings";
import importData from "./importData";

const plugin: InstallPluginType = {
    type: "install",
    name: "install-site-builder",
    meta: {
        name: "Webiny Page Builder",
        description: "Webiny Page Builder is a powerful visual page builder."
    },
    install: async context => {
        await importData(context);
    }
};

export default [plugin, general, seo, social];
