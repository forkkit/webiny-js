// @flow
import React from "react";
import { createValue } from "webiny-app-site-builder/editor/components/Slate";
import type { PluginType } from "webiny-app-site-builder/types";
import { ReactComponent as ButtonIcon } from "./round-toggle_on-24px.svg";
import ButtonSettings from "./ButtonSettings";
import Button from "./Button";
import Action from "../../elementSettings/components/Action";
import { css } from "emotion";

const buttonWrapper = css({
    display: "flex",
    justifyContent: "center"
});

export default (): Array<PluginType> => {
    return [
        {
            name: "sb-page-element-button",
            type: "sb-page-element",
            elementType: "button",
            toolbar: {
                title: "Button",
                groupId: "basic",
                preview() {
                    return (
                        <div className={buttonWrapper}>
                            <button className={"webiny-sb-page-element-button"}>Click me</button>
                        </div>
                    );
                }
            },
            settings: [
                "sb-page-element-settings-button",
                "sb-page-element-settings-link",
                "",
                "sb-page-element-settings-horizontal-align-flex",
                "",
                "sb-page-element-settings-clone",
                "sb-page-element-settings-delete",
                ""
            ],
            target: ["column", "row"],
            create(options) {
                return {
                    type: "button",
                    elements: [],
                    data: {
                        text: createValue("Click me", "button"),
                        settings: {
                            margin: {
                                desktop: { all: 0 },
                                mobile: { all: 0 }
                            },
                            padding: {
                                desktop: { all: 0 },
                                mobile: { all: 0 }
                            }
                        }
                    },
                    ...options
                };
            },
            render({ element }: Object) {
                return <Button element={element} />;
            }
        },
        {
            name: "sb-page-element-settings-button",
            type: "sb-page-element-settings",
            renderAction() {
                return <Action plugin={this.name} tooltip={"Button"} icon={<ButtonIcon />} />;
            },
            renderMenu() {
                return <ButtonSettings />;
            }
        }
    ];
};
