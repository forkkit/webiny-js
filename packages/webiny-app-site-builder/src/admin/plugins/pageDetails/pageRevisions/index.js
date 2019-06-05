// @flow
import * as React from "react";
import type { SiteBuilderPageDetailsPluginType, WithPageDetailsProps } from "webiny-app-site-builder/types";
import { Tab } from "webiny-ui/Tabs";
import RevisionsList from "./RevisionsList";

export default ({
    name: "sb-page-details-revision-content-revisions",
    type: "sb-page-details-revision-content",
    render({ pageDetails, loading }: WithPageDetailsProps) {
        return (
            <Tab label={"Revisions"} disabled={loading}>
                <RevisionsList pageDetails={pageDetails} loading={loading} />
            </Tab>
        );
    }
}: SiteBuilderPageDetailsPluginType);
