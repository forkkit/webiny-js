// @flow
import gql from "graphql-tag";

export const setHomePage = gql`
    mutation SetHomePage($id: ID!) {
        siteBuilder {
            setHomePage(id: $id) {
                error {
                    message
                }
            }
        }
    }
`;
