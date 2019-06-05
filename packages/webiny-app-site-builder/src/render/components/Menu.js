//@flow
import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { get } from "lodash";
import { withSiteBuilder, type WithSiteBuilderPropsType } from "webiny-app-site-builder/context";
import invariant from "invariant";

export const getMenuBySlug = gql`
    query GetMenuBySlug($slug: String!) {
        siteBuilder {
            menus: getMenuBySlug(slug: $slug) {
                data {
                    slug
                    title
                    items
                }
            }
        }
    }
`;

type Props = { siteBuilder: WithSiteBuilderPropsType } & { slug: string, component: string };

const Menu = ({ slug, component: Component }: Props) => {
    invariant(Component, `You must provide a valid Menu component name (via "component" prop).`);

    return (
        <Query query={getMenuBySlug} variables={{ slug }}>
            {props => {
                const data = get(props, "data.siteBuilder.menus.data");

                return <Component {...props} data={data} />;
            }}
        </Query>
    );
};

export default withSiteBuilder()(Menu);
