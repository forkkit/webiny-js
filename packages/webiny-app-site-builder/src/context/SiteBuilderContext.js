// @flow
import * as React from "react";

const { Provider, Consumer } = React.createContext({});
import type { SiteBuilderProviderPropsType } from "webiny-app-site-builder/types";

type ConsumerProps = {
    children: React.Element<any>
};

export const SiteBuilderContextProvider = ({ children, ...rest }: SiteBuilderProviderPropsType) => (
    <Provider value={rest}>{children}</Provider>
);

export const SiteBuilderContextConsumer = ({ children }: ConsumerProps) => (
    <Consumer>{props => React.cloneElement(children, { siteBuilder: props })}</Consumer>
);
