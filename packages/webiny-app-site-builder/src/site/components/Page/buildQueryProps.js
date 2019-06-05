// @flow
import gql from "graphql-tag";
import { getDataFields, getNotFoundPageFields, getErrorPageFields } from "./graphql";
import type { Location } from "react-router-dom";

type Props = { location: Location, defaultPages: Object };

const settingsFields = `
settings {
    siteBuilder {
        data {
            name
            social {
                image {
                    src
                }
            }
        }
    }
}`;

export default ({ location, defaultPages }: Props) => {
    const query = new URLSearchParams(location.search);
    let defaultPagesFields = ``;
    if (!defaultPages.error) {
        defaultPagesFields += `${getErrorPageFields()}`;
    }

    if (!defaultPages.notFound) {
        defaultPagesFields += `${getNotFoundPageFields()}`;
    }

    // If a preview was requested (from admin):
    if (query.has("preview")) {
        return {
            query: gql`
                query SiteBuilderGetPage($id: ID!) {
                    siteBuilder {
                        page: getPage(id: $id) {
                            data ${getDataFields()}
                            error {
                                code
                                message
                            }
                        }
                        ${defaultPagesFields}
                    }
                    ${settingsFields}
                }
            `,
            variables: { url: location.pathname, id: query.get("preview") }
        };
    }

    if (location.pathname === "/") {
        return {
            query: gql`
                query SiteBuilderGetHomePage {
                    siteBuilder {
                        page: getHomePage {
                            data ${getDataFields()}
                            error {
                                code
                                message
                            }
                        }
                        ${defaultPagesFields}
                    }
                    ${settingsFields}
                }
            `
        };
    }

    return {
        query: gql`
                query SiteBuilderGetPage($url: String!) {
                    siteBuilder {
                        page: getPublishedPage(url: $url) {
                            data ${getDataFields()}
                            error {
                                code
                                message
                            }
                        }
                        ${defaultPagesFields}
                    }
                    ${settingsFields}
                }
            `,
        variables: { url: location.pathname }
    };
};
