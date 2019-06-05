// @flow
import * as React from "react";
import { SiteBuilderContextConsumer } from "./SiteBuilderContext";

export default function withSiteBuilder() {
    return function decorator(Component: *) {
        return function withSiteBuilderComponent(props: *) {
            return (
                <SiteBuilderContextConsumer>
                    <Component {...props} />
                </SiteBuilderContextConsumer>
            );
        };
    };
}
