// @flow
import * as React from "react";
import { renderPlugins } from "webiny-app/plugins";
import type { SiteBuilderPageDetailsPluginType, WithPageDetailsProps } from "webiny-app-site-builder/types";
import { Tabs } from "webiny-ui/Tabs";

export default ({
    name: "sb-page-details-revision-content",
    type: "sb-page-details",
    render({ pageDetails, ...rest }: WithPageDetailsProps) {
        return (
            <Tabs>
                {renderPlugins(
                    "sb-page-details-revision-content",
                    { pageDetails, ...rest },
                    { wrapper: false }
                )}
            </Tabs>
        );
    }
}: SiteBuilderPageDetailsPluginType);
