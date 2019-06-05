// @flow
import gql from "graphql-tag";
import { getPlugins } from "webiny-plugins";
import type { SiteBuilderPageSettingsPluginType } from "webiny-app-site-builder/types";

const error = `
error {
    code
    message
}`;

const sharedFields = `
    id
    title
    url
    version
    parent
    published
    isHomePage
    isErrorPage
    isNotFoundPage
    locked
    savedOn
`;

export const createPage = gql`
    mutation SbCreatePage($category: ID!) {
        siteBuilder {
            page: createPage(data: { category: $category }) {
                data {
                    id
                }
                ${error}
            }
        }
    }
`;

export const listPages = gql`
    query SbListPages($sort: JSON, $page: Int, $perPage: Int, $search: String) {
        siteBuilder {
            pages: listPages(sort: $sort, page: $page, perPage: $perPage, search: $search) {
                data {
                    ${sharedFields}
                    category {
                        id
                        name
                    }
                    createdBy {
                        firstName
                        lastName
                    }
                }
                meta {
                    totalCount
                    to
                    from
                    nextPage
                    previousPage
                }
            }
        }
    }
`;

export const getPage = () => gql`
    query SbGetPage($id: ID!) {
        siteBuilder {
            page: getPage(id: $id) {
                data {
                    ${sharedFields}
                    snippet
                    content
                    settings {
                        _empty
                        ${getPlugins("sb-editor-page-settings")
                            .map((pl: SiteBuilderPageSettingsPluginType) => pl.fields)
                            .join("\n")}
                    }
                    category {
                        id
                        name
                        url
                    }
                    revisions {
                        ${sharedFields}
                    }
                }
                ${error}
            }
        }
    }
`;

export const createRevisionFrom = gql`
    mutation SbCreateRevisionFrom($revision: ID!) {
        siteBuilder {
            revision: createRevisionFrom(revision: $revision) {
                data {
                    id
                }
                ${error}
            }
        }
    }
`;

export const publishRevision = gql`
    mutation SbPublishRevision($id: ID!) {
        siteBuilder {
            publishRevision(id: $id) {
                data {
                    ${sharedFields}
                }
                ${error}
            }
        }
    }
`;

export const deleteRevision = gql`
    mutation SbDeleteRevision($id: ID!) {
        siteBuilder {
            deleteRevision(id: $id) {
                data
                ${error}
            }
        }
    }
`;

export const deletePage = gql`
    mutation DeletePage($id: ID!) {
        siteBuilder {
            deletePage(id: $id) {
                data
                ${error}
            }
        }
    }
`;

const elementFields = /*GraphQL*/ `
    id
    name
    type
    category
    content
    preview {
        src
        meta
    }
`;

export const listElements = gql`
    query SbListElements {
        siteBuilder {
            elements: listElements(perPage: 1000) {
                data {
                    ${elementFields}
                }
            }
        }
    }
`;

export const createElement = gql`
    mutation SbCreateElement($data: ElementInput!) {
        siteBuilder {
            element: createElement(data: $data) {
                data {
                    ${elementFields}
                }
                ${error}
            }
        }
    }
`;

export const updateElement = gql`
    mutation SbUpdateElement($id: ID!, $data: UpdateElementInput!) {
        siteBuilder {
            element: updateElement(id: $id, data: $data) {
                data {
                    ${elementFields}
                }
                ${error}
            }
        }
    }
`;
