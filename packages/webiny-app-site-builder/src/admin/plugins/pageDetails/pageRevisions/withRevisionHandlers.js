// @flow
import { compose, withHandlers } from "recompose";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import { createRevisionFrom, deleteRevision } from "webiny-app-site-builder/admin/graphql/pages";
import withPublishRevisionHandler from "../utils/withPublishRevisionHandler";

export default compose(
    graphql(createRevisionFrom, { name: "gqlCreate" }),
    graphql(deleteRevision, { name: "gqlDelete" }),
    withPublishRevisionHandler("publishRevision"),
    withRouter,
    withHandlers({
        createRevision: ({ rev, history, gqlCreate, showSnackbar }: Object) => async () => {
            const { data: res } = await gqlCreate({
                variables: { revision: rev.id },
                refetchQueries: ["SiteBuilderListPages"]
            });
            const { data, error } = res.siteBuilder.revision;

            if (error) {
                return showSnackbar(error.message);
            }

            history.push(`/site-builder/editor/${data.id}`);
        },
        editRevision: ({ rev, history }) => () => {
            history.push(`/site-builder/editor/${rev.id}`);
        },
        deleteRevision: ({
            rev,
            pageDetails: { page },
            gqlDelete,
            showSnackbar,
            history
        }) => async () => {
            const { data: res } = await gqlDelete({
                refetchQueries: ["SiteBuilderLoadPageRevisions"],
                variables: { id: rev.id }
            });
            const { error } = res.siteBuilder.deleteRevision;
            if (error) {
                return showSnackbar(error.message);
            }

            if (rev.id === page.id) {
                history.push("/site-builder/pages");
            }
        }
    })
);
