// @flow
import React from "react";
import type { ElementPluginType } from "webiny-app-site-builder/types";
import { Tab } from "webiny-ui/Tabs";
import ImagesList from "./ImagesList";
import ImagesListImagesSettings from "./ImagesListImagesSettings";
import ImagesListDesignSettings from "./ImagesListDesignSettings";
import styled from "react-emotion";

import { ReactComponent as DesignIcon } from "./icons/round-style-24px.svg";
import { ReactComponent as ImageGalleryIcon } from "./icons/round-photo_library-24px.svg";
import { ReactComponent as ImagesIcon } from "webiny-app-site-builder/admin/assets/round-photo_library-24px.svg";

export default () => {
    const PreviewBox = styled("div")({
        textAlign: "center",
        margin: "0 auto",
        width: 50,
        svg: {
            width: 50
        }
    });

    return [
        ({
            name: "sb-page-element-images-list",
            type: "sb-page-element",
            elementType: "images-list",
            toolbar: {
                title: "Image Gallery",
                group: "sb-page-element-group-basic",
                preview() {
                    return (
                        <PreviewBox>
                            <ImageGalleryIcon />
                        </PreviewBox>
                    );
                }
            },
            settings: ["sb-page-element-settings-delete"],
            target: ["row", "column"],
            onCreate: "open-settings",
            create(options = {}) {
                return {
                    type: "images-list",
                    data: {
                        component: "sb-page-element-images-list-component-mosaic",
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
            render({ element }) {
                return <ImagesList data={element.data} />;
            }
        }: ElementPluginType),
        {
            name: "sb-page-element-advanced-settings-images-list-filter",
            type: "sb-page-element-advanced-settings",
            elementType: "images-list",
            render(props: Object) {
                return (
                    <Tab icon={<ImagesIcon />} label="Images">
                        <ImagesListImagesSettings {...props} filter />
                    </Tab>
                );
            }
        },
        {
            name: "sb-page-element-advanced-settings-images-list-design",
            type: "sb-page-element-advanced-settings",
            elementType: "images-list",
            render(props: Object) {
                return (
                    <Tab icon={<DesignIcon />} label="Design">
                        <ImagesListDesignSettings {...props} design />
                    </Tab>
                );
            }
        }
    ];
};
