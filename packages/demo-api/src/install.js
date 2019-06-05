import config from "./configs";
import { registerPlugins } from "webiny-plugins";
import installer from "webiny-install";

import securityPlugins from "webiny-api-security/install/plugins";
import siteBuilderPlugins from "webiny-api-site-builder/install/plugins";

registerPlugins(securityPlugins, siteBuilderPlugins);

export const install = async (context = {}) => {
    await installer({
        ...context,
        config: await config(),
        security: { admin: { email: "admin@webiny.com", password: "12345678" } }
    });
    process.exit();
};
