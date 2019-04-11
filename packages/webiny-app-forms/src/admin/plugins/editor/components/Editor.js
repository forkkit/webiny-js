import React from "react";
import classSet from "classnames";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

// Components
import EditorBar from "./Editor/Bar";
import EditorContent from "./Editor/Content";
import DragPreview from "./Editor/DragPreview";

const Editor = () => {
    const classes = {
        "form-editor": true
    };
    return (
        <div className={classSet(classes)}>
            <EditorBar />
            <EditorContent />
            <DragPreview/>
        </div>
    );
};

export default DragDropContext(HTML5Backend)(Editor);
