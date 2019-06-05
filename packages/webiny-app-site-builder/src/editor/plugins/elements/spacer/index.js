// @flow
import React from "react";
import styled from "react-emotion";
import Spacer, { INIT_HEIGHT } from "./Spacer";
import { ReactComponent as SpacerIcon } from "webiny-app-site-builder/editor/assets/icons/spacer-icon.svg";
import "./actions";
import type { ElementPluginType } from "webiny-app-site-builder/types";

export default (): ElementPluginType => {
    const PreviewBox = styled("div")({
        textAlign: "center",
        height: 50,
        svg: {
            height: 50,
            width: 50
        }
    });

    return {
        name: "sb-page-element-spacer",
        type: "sb-page-element",
        elementType: "spacer",
        toolbar: {
            title: "Spacer",
            group: "sb-page-element-group-layout",
            preview() {
                return (
                    <PreviewBox>
                        <SpacerIcon />
                    </PreviewBox>
                );
            }
        },
        settings: ["sb-page-element-settings-delete"],
        target: ["block", "column"],
        create(options = {}) {
            return {
                type: "spacer",
                data: {
                    settings: {
                        height: INIT_HEIGHT,
                        margin: { desktop: { all: 0 } },
                        padding: { desktop: { all: 0 } }
                    }
                },

                ...options
            };
        },
        render(props) {
            return <Spacer {...props} />;
        }
    };
};
