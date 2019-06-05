//@flow
import React from "react";
import { get } from "lodash";
import PageSettings from "./components/PageSettings";
import PageSettingsButton from "./components/PageSettingsButton";
import PublishPageButton from "./components/PublishPageButton";
import PreviewPageButton from "./components/PreviewPageButton";
import SetAsHomepageButton from "./components/SetAsHomepageButton";
import PageOptionsMenu from "./components/PageOptionsMenu";
import Divider from "./components/Divider";
import Title from "./components/Title";
import BackButton from "./components/BackButton";
import Revisions from "./components/Revisions";

export default [
    {
        name: "sb-page-settings-bar",
        type: "sb-editor-bar",
        shouldRender({ plugins }: Object) {
            const active = get(plugins, "sb-editor-bar");
            return active ? active.find(pl => pl.name === "sb-page-settings-bar") : false;
        },
        render() {
            return <PageSettings />;
        }
    },
    {
        name: "sb-default-bar-right-revisions-select",
        type: "sb-default-bar-right",
        render() {
            return <Revisions />;
        }
    },
    {
        name: "sb-default-bar-right-revisions-divider",
        type: "sb-default-bar-right",
        render() {
            return <Divider />;
        }
    },
    {
        name: "sb-default-bar-right-page-settings-button",
        type: "sb-default-bar-right",
        render() {
            return <PageSettingsButton />;
        }
    },
    [
        {
            name: "sb-default-bar-right-page-options",
            type: "sb-default-bar-right",
            render() {
                return <PageOptionsMenu />;
            }
        },
        {
            name: "sb-default-bar-right-page-options-preview",
            type: "sb-default-bar-right-page-options-option",
            render() {
                return <PreviewPageButton />;
            }
        },
        {
            name: "sb-default-bar-right-page-options-set-as-homepage",
            type: "sb-default-bar-right-page-options-option",
            render() {
                return <SetAsHomepageButton />;
            }
        }
    ],
    {
        name: "sb-default-bar-right-publish-button",
        type: "sb-default-bar-right",
        render() {
            return <PublishPageButton />;
        }
    },

    {
        name: "sb-default-bar-left-back-button",
        type: "sb-default-bar-left",
        render() {
            return <BackButton />;
        }
    },
    {
        name: "sb-default-bar-left-divider",
        type: "sb-default-bar-left",
        render() {
            return <Divider />;
        }
    },
    {
        name: "sb-default-bar-left-title",
        type: "sb-default-bar-left",
        render() {
            return <Title />;
        }
    }
];
