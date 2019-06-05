// @flow
import React from "react";

export default () => {
    return {
        name: "sb-render-slate-editor-underline",
        type: "sb-render-slate-editor",
        slate: {
            renderMark(props: Object, next: Function) {
                if (props.mark.type === "underline") {
                    return <u {...props.attributes}>{props.children}</u>;
                }

                return next();
            }
        }
    };
};
