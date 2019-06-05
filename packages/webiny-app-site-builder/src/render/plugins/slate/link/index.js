import React from "react";

export default () => {
    return {
        name: "sb-render-slate-editor-link",
        type: "sb-render-slate-editor",
        slate: {
            renderNode(props, next) {
                const { attributes, children, node } = props;

                if (node.type === "link") {
                    const { data } = node;
                    const href = data.get("href");
                    const noFollow = data.get("noFollow");
                    const newTab = data.get("newTab");

                    return (
                        <a
                            {...attributes}
                            {...{ href, rel: noFollow ? "nofollow" : null }}
                            target={newTab ? "_blank" : "_self"}
                        >
                            {children}
                        </a>
                    );
                }

                return next();
            }
        }
    };
};
