// @flow
import React from "react";

export default () => {
    return {
        name: "sb-render-slate-editor-code",
        type: "sb-render-slate-editor",
        slate: {
            renderMark(props: Object, next: Function) {
                if (props.mark.type === "code") {
                    return (
                        <code className={"webiny-sb-typography-code"} {...props.attributes}>
                            {props.children}
                        </code>
                    );
                }

                return next();
            }
        }
    };
};
