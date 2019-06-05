// @flow
import * as React from "react";
import type { SiteBuilderPageDetailsPluginType, WithPageDetailsProps } from "webiny-app-site-builder/types";
import Header from "./Header";
import RevisionSelector from "./revisionSelector/RevisionSelector";
import PublishRevision from "./publishRevision/PublishRevision";
import EditRevision from "./editRevision/EditRevision";
import DeletePage from "./deletePage/DeletePage";
import PageOptionsMenu from "./pageOptionsMenu/PageOptionsMenu";

export default ([
    {
        name: "sb-page-details-header",
        type: "sb-page-details-revision-content-preview",
        render(props: WithPageDetailsProps) {
            return <Header {...props} />;
        }
    },
    {
        name: "sb-page-details-revision-selector",
        type: "sb-page-details-header-left",
        render(props: WithPageDetailsProps) {
            return <RevisionSelector {...props} />;
        }
    },
    {
        name: "sb-page-details-header-publish",
        type: "sb-page-details-header-right",
        render(props: WithPageDetailsProps) {
            return <PublishRevision {...props} />;
        }
    },
    {
        name: "sb-page-details-header-edit",
        type: "sb-page-details-header-right",
        render(props: WithPageDetailsProps) {
            return <EditRevision {...props} />;
        }
    },
    {
        name: "sb-page-details-header-delete",
        type: "sb-page-details-header-right",
        render(props: WithPageDetailsProps) {
            return <DeletePage {...props} />;
        }
    },
    {
        name: "sb-page-details-header-options-menu",
        type: "sb-page-details-header-right",
        render(props: WithPageDetailsProps) {
            return <PageOptionsMenu {...props} />;
        }
    }
]: Array<SiteBuilderPageDetailsPluginType>);
