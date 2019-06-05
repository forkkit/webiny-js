import React from "react";
import { Provider } from "react-redux";
import { compose, withHandlers } from "recompose";
import { Editor as SiteBuilderEditor } from "webiny-app-site-builder/editor";
import { createElement } from "webiny-app-site-builder/editor/utils";
import { redux } from "webiny-app-site-builder/editor/redux";
import { SETUP_EDITOR } from "webiny-app-site-builder/editor/actions";
import { withRouter } from "react-router-dom";
import { Query, withApollo } from "react-apollo";
import { getPage } from "webiny-app-site-builder/admin/graphql/pages";
import { withSavedElements } from "webiny-app-site-builder/admin/components";
import Snackbar from "webiny-admin/plugins/Snackbar/Snackbar";
import { withSnackbar } from "webiny-admin/components";

import { Typography } from "webiny-ui/Typography";
import { LoadingEditor, LoadingTitle } from "./EditorStyled.js";
import editorMock from "webiny-app-site-builder/admin/assets/editor-mock.png";
import { get } from "lodash";

const getEmptyData = (page = {}, revisions = []) => {
    return {
        ui: {
            activeElement: null,
            dragging: false,
            highlightElement: null,
            plugins: {},
            resizing: false
        },
        tmp: {},
        page,
        revisions
    };
};

let pageSet = null;

const Editor = ({ renderEditor, match, history, showSnackbar }) => {
    return (
        <Query
            query={getPage()}
            variables={{ id: match.params.id }}
            onCompleted={data => {
                const error = get(data, "siteBuilder.page.error.message");
                if (error) {
                    history.push(`/site-builder/pages`);
                    showSnackbar(error);
                }
            }}
        >
            {renderEditor}
        </Query>
    );
};

export default compose(
    withApollo,
    withRouter,
    withSnackbar(),
    withSavedElements(),
    withHandlers({
        // eslint-disable-next-line react/display-name
        renderEditor: ({ elements, client }) => ({ data, loading }) => {
            if (loading || !Array.isArray(elements)) {
                return (
                    <LoadingEditor>
                        <img src={editorMock} />
                        <LoadingTitle>
                            <Typography tag={"div"} use={"headline6"}>
                                Loading Editor<span>.</span>
                                <span>.</span>
                                <span>.</span>
                            </Typography>
                        </LoadingTitle>
                    </LoadingEditor>
                );
            }

            if (!get(data, "siteBuilder.page.data")) {
                return null;
            }

            if (!redux.store) {
                redux.initStore({}, { client });
            }

            if (!loading) {
                const { revisions, ...page } = data.siteBuilder.page.data;
                if (!page.content) {
                    page.content = createElement("document");
                }

                if (pageSet !== page.id) {
                    pageSet = page.id;
                    redux.store.dispatch({
                        type: SETUP_EDITOR,
                        payload: getEmptyData(page, revisions)
                    });
                    redux.store.dispatch({ type: "@@redux-undo/INIT" });
                }
            }

            return (
                <React.Fragment>
                    <Provider store={redux.store}>
                        <SiteBuilderEditor />
                    </Provider>
                    <div style={{ zIndex: 10, position: "absolute" }}>
                        <Snackbar />
                    </div>
                </React.Fragment>
            );
        }
    })
)(Editor);
