// @flow
import gql from "graphql-tag";

export const getHeaderData = gql`
    query {
        settings {
            siteBuilder {
                data {
                    name
                    logo {
                        src
                    }
                }
            }
        }
    }
`;

export const getFooterData = gql`
    query {
        settings {
            siteBuilder {
                data {
                    social {
                        facebook
                        instagram
                        twitter
                    }
                    name
                    logo {
                        src
                    }
                }
            }
        }
    }
`;
