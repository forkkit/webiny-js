import React from "react";
import { ReactComponent as LinkIcon } from "webiny-app-cms/editor/assets/icons/link.svg";
import LinkDialog from "./LinkDialog";

export default () => {
    return {
        menu: [
            {
                name: "link-menu-item",
                type: "cms-form-rich-editor-menu-item",
                render(props: Object) {
                    const { MenuButton } = props;

                    return (
                        <MenuButton onMouseDown={() => props.activatePlugin(this.name)}>
                            <LinkIcon />
                        </MenuButton>
                    );
                },
                renderDialog(props) {
                    return <LinkDialog {...props} />;
                }
            }
        ],
        editor: [
            {
                name: "cms-form-rich-editor-link",
                type: "cms-form-rich-editor",
                slate: {
                    renderNode(props, next) {
                        const { attributes, children, node } = props;

                        if (node.type === "link") {
                            const { data } = node;
                            const href = data.get("href");
                            const noFollow = data.get("noFollow");
                            return (
                                <a {...attributes} {...{ href, rel: noFollow ? "nofollow" : null }}>
                                    {children}
                                </a>
                            );
                        }

                        return next();
                    }
                }
            }
        ]
    };
};
