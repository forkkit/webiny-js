// @flow
import React from "react";
import Snackbar from "webiny-admin/plugins/Snackbar/Snackbar";
import Editor from "./components/Editor";
import { EditorProvider } from "./context";

export default function EditorView() {
    return (
        <React.Fragment>
            <EditorProvider>
                <Editor />
            </EditorProvider>
            <div style={{ zIndex: 10, position: "absolute" }}>
                <Snackbar />
            </div>
        </React.Fragment>
    );
}
