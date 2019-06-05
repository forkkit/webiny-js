// @flow
import type { SiteBuilderPageSettingsFieldsPluginType } from "webiny-app-site-builder/types";

export default ([
    {
        name: "sb-page-settings-fields-general",
        type: "sb-page-settings-fields",
        fields: `
            general {
                image {
                    src
                }
                tags
                layout
            }
    `
    },
    {
        name: "sb-page-settings-fields-seo",
        type: "sb-page-settings-fields",
        fields: `
            seo {
                title
                description
                meta {
                    name
                    content
                }
            }
    `
    },
    {
        name: "sb-page-settings-fields-social",
        type: "sb-page-settings-fields",
        fields: `
            social {
                image {
                    src
                }
                title
                description
                meta {
                    property
                    content
                }
            }
    `
    }
]: Array<SiteBuilderPageSettingsFieldsPluginType>);
