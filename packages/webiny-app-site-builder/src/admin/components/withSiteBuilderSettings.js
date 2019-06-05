// @flow
import { compose, withHandlers, mapProps } from "recompose";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import getPagePreviewUrl from "./withSiteBuilderSettings/getPagePreviewUrl";
import { get } from "lodash";

const domainQuery = gql`
    {
        settings {
            siteBuilder {
                data {
                    domain
                }
            }
        }
    }
`;

export default () =>
    compose(
        graphql(domainQuery, { name: "sbSettings" }),
        withHandlers({
            getPagePreviewUrl: ({ sbSettings }) => (page: Object) => {
                const domain = get(sbSettings, "settings.siteBuilder.data.domain");
                return getPagePreviewUrl({ page, domain });
            }
        }),
        mapProps(({ getPagePreviewUrl, sbSettings, ...rest }) => {
            return {
                ...rest,
                sbSettings: {
                    data: get(sbSettings, "settings.siteBuilder.data"),
                    getPagePreviewUrl
                }
            };
        })
    );
