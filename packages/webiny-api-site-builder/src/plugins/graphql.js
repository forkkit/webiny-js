// @flow
import { getPlugins } from "webiny-plugins";
import { dummyResolver } from "webiny-api/graphql";
import { hasScope } from "webiny-api-security";
import { FileType, FileInputType } from "webiny-api-files/graphql";

import page from "./graphql/Page";
import category from "./graphql/Category";
import menu from "./graphql/Menu";

export default {
    type: "graphql",
    name: "graphql-site-builder",
    namespace: "siteBuilder",
    typeDefs: () => [
        FileType,
        FileInputType,
        `
            type SiteBuilderQuery {
                _empty: String
            }   
            
            type SiteBuilderMutation {
                _empty: String
            }
            
            type Query {
                siteBuilder: SiteBuilderQuery
            }
            
            type Mutation {
                siteBuilder: SiteBuilderMutation
            }
        `,
        page.typeDefs,
        category.typeDefs,
        menu.typeDefs,
        ...getPlugins("sb-schema").map(pl => pl.typeDefs)
    ],
    resolvers: () => [
        {
            Query: {
                siteBuilder: dummyResolver
            },
            Mutation: {
                siteBuilder: dummyResolver
            }
        },
        page.resolvers,
        category.resolvers,
        menu.resolvers,
        ...getPlugins("sb-schema").map(pl => pl.resolvers)
    ],
    security: {
        shield: {
            SiteBuilderQuery: {
                getMenu: hasScope("sb:menu:crud"),
                listMenus: hasScope("sb:menu:crud"),
                getCategory: hasScope("sb:category:crud"),
                listCategories: hasScope("sb:category:crud"),
                listPages: hasScope("sb:page:crud"),
                listElements: hasScope("sb:element:crud"),
                oembedData: hasScope("sb:oembed:read")
            },
            SiteBuilderMutation: {
                createMenu: hasScope("sb:menu:crud"),
                updateMenu: hasScope("sb:menu:crud"),
                deleteMenu: hasScope("sb:menu:crud"),
                createCategory: hasScope("sb:category:crud"),
                updateCategory: hasScope("sb:category:crud"),
                deleteCategory: hasScope("sb:category:crud"),

                createPage: hasScope("sb:page:crud"),
                deletePage: hasScope("sb:page:crud"),

                createRevisionFrom: hasScope("sb:page:revision:create"),
                updateRevision: hasScope("sb:page:revision:update"),
                publishRevision: hasScope("sb:page:revision:publish"),
                deleteRevision: hasScope("sb:page:revision:delete"),

                createElement: hasScope("sb:element:crud"),
                updateElement: hasScope("sb:element:crud"),
                deleteElement: hasScope("sb:element:crud")
            },
            SettingsMutation: {
                siteBuilder: hasScope("sb:settings")
            }
        }
    }
};
