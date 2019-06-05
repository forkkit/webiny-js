// @flow
import { settingsFactory } from "webiny-api-site-builder/entities";
import { FileType, FileInputType } from "webiny-api-files/graphql";

export default [
    {
        name: "schema-settings-site-builder",
        type: "schema-settings",
        namespace: "siteBuilder",
        typeDefs: () => [
            FileType,
            FileInputType,
            /* GraphQL */ `
                type SbSocialMedia {
                    facebook: String
                    twitter: String
                    instagram: String
                    image: File
                }

                type SbSettings {
                    name: String
                    favicon: File
                    logo: File
                    domain: String
                    social: SbSocialMedia
                    pages: SbSettingsPages
                }

                type SbSettingsResponse {
                    error: Error
                    data: SbSettings
                }

                type SbSettingsPages {
                    home: ID
                    notFound: ID
                    error: ID
                }

                type SbDefaultPage {
                    id: String
                    parent: String
                    title: String
                }

                input SbSocialMediaInput {
                    facebook: String
                    twitter: String
                    instagram: String
                    image: FileInput
                }

                input SbDefaultPageInput {
                    id: String
                    title: String
                }

                input SbSettingsInput {
                    name: String
                    favicon: FileInput
                    logo: FileInput
                    social: SbSocialMediaInput
                    pages: SbSettingsPagesInput
                }

                input SbSettingsPagesInput {
                    home: ID
                    notFound: ID
                    error: ID
                }

                extend type SettingsQuery {
                    siteBuilder: SbSettingsResponse
                }

                extend type SettingsMutation {
                    siteBuilder(data: SbSettingsInput): SbSettingsResponse
                }
            `
        ],
        entity: ({
            siteBuilder: {
                entities: { Settings }
            }
        }: Object) => Settings
    },
    {
        type: "entity",
        name: "entity-sb-settings",
        namespace: "siteBuilder",
        entity: {
            name: "Settings",
            factory: settingsFactory
        }
    }
];
