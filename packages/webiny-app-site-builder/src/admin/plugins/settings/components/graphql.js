// @flow
import gql from "graphql-tag";

const fields = /* GraphQL */ `
    {
        data {
            pages {
                home
                notFound
                error
            }
            social {
                image {
                    src
                }
            }
        }
        error {
            message
        }
    }
`;

const graphql = {
    query: gql`
            {
                settings {
                    siteBuilder ${fields}
                }
            }
        `,
    mutation: gql`
            mutation updateSettings($data: SiteBuilderSettingsInput) {
                settings {
                    siteBuilder(data: $data) ${fields}
                }
            }
        `
};

export default graphql;
