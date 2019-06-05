// @flow
import { getPlugins } from "webiny-plugins";
import type { SiteBuilderPageSettingsFieldsPluginType } from "webiny-app-site-builder/types";

export default () => {
    return getPlugins("sb-page-settings-fields")
        .map((pl: SiteBuilderPageSettingsFieldsPluginType) => pl.fields)
        .join("\n");
};
