// @flow
import * as React from "react";
import { SiteBuilderContextConsumer } from "./../../context/SiteBuilderContext";

export function withTheme() {
    return function decorator(Component: React.ComponentType<any>) {
        return function renderComponent(props: *) {
            return (
                <SiteBuilderContextConsumer>
                    <Component {...props} />
                </SiteBuilderContextConsumer>
            );
        };
    };
}
