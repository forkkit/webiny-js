// @flow
import * as React from "react";
import GeneralSettings from "./components/GeneralSettings";
import SeoSettings from "./components/SeoSettings";
import SocialSettings from "./components/SocialSettings";
import type { SiteBuilderPageSettingsPluginType } from "webiny-app-site-builder/types";
import { ReactComponent as SettingsIcon } from "./icons/round-settings-24px.svg";
import { ReactComponent as SocialIcon } from "./icons/round-thumb_up-24px.svg";
import { ReactComponent as SeoIcon } from "./icons/round-search-24px.svg";

export default ([
    {
        name: "sb-editor-page-settings-general",
        type: "sb-editor-page-settings",
        title: "General settings",
        description: "Manage things like title, page status,url and more.",
        icon: <SettingsIcon />,
        fields: `
            general {
                image {
                    src
                }
                tags
                layout
            }
    `,
        render(props: Object) {
            return <GeneralSettings {...props} />;
        }
    },
    {
        name: "sb-editor-page-settings-seo",
        type: "sb-editor-page-settings",
        title: "SEO",
        description: "Control SEO settings like description and keywords.",
        icon: <SeoIcon />,
        fields: `
            seo {
                title
                description
                meta {
                    name
                    content
                }
            }
    `,
        render(props: Object) {
            return <SeoSettings {...props} />;
        }
    },
    {
        name: "sb-editor-page-settings-social",
        type: "sb-editor-page-settings",
        title: "Social media",
        description: "Set share images and settings for social media sites.",
        icon: <SocialIcon />,
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
    `,
        render(props: Object) {
            return <SocialSettings {...props} />;
        }
    }
]: Array<SiteBuilderPageSettingsPluginType>);
