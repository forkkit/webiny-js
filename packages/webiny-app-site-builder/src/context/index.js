// @flow
import * as React from "react";
import SiteBuilderProvider from "./SiteBuilderProvider";
import withSiteBuilder from "./withSiteBuilder";

type WithSiteBuilderPropsType = {
    theme: Object,
    isEditor?: boolean,
    defaults?: {
        pages?: {
            notFound?: React.ComponentType<any>,
            error?: React.ComponentType<any>
        }
    }
};

type SiteBuilderProviderPropsType = { children: React.Node } & WithSiteBuilderPropsType;

export { withSiteBuilder, SiteBuilderProvider };
export type { WithSiteBuilderPropsType, SiteBuilderProviderPropsType };
