// @flow
import React from "react";
import { ReactComponent as IconSvg } from "./round-star_border-24px.svg";
import IconSettings from "./IconSettings";
import styled from "react-emotion";
import Icon from "./Icon";
import { getSvg } from "./utils";
import Action from "./../../elementSettings/components/Action";

export default () => {
    const PreviewBox = styled("div")({
        textAlign: "center",
        height: 50,
        color: "var(--mdc-theme-text-primary-on-background)",
        svg: {
            height: 50,
            width: 50
        }
    });

    return [
        {
            name: "sb-page-element-icon",
            type: "sb-page-element",
            elementType: "icon",
            toolbar: {
                title: "Icon",
                group: "sb-page-element-group-basic",
                preview() {
                    return (
                        <PreviewBox>
                            <IconSvg />
                        </PreviewBox>
                    );
                }
            },
            settings: [
                "sb-page-element-settings-icon",
                "",
                "sb-page-element-settings-padding",
                "sb-page-element-settings-margin",
                [
                    "sb-page-element-settings-horizontal-align",
                    { alignments: ["left", "center", "right"] }
                ],
                "",
                "sb-page-element-settings-clone",
                "sb-page-element-settings-delete",
                ""
            ],
            target: ["column", "row"],
            create(options: Object) {
                return {
                    type: "icon",
                    elements: [],
                    data: {
                        icon: {
                            id: ["far", "star"],
                            svg: getSvg(["far", "star"]),
                            width: 50
                        },
                        settings: {
                            horizontalAlign: "center",
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
            render(props: Object) {
                return <Icon {...props} />;
            }
        },
        {
            name: "sb-page-element-settings-icon",
            type: "sb-page-element-settings",
            renderAction({ active }: { active: boolean }) {
                return (
                    <Action
                        plugin={this.name}
                        tooltip={"Icon"}
                        active={active}
                        icon={<IconSvg />}
                    />
                );
            },
            renderMenu() {
                return <IconSettings />;
            }
        }
    ];
};
