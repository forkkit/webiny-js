// @flow
import React from "react";
import { get } from "lodash";
import AddBlock from "./AddBlock";
import AddContent from "./AddContent";
import SearchBlocks from "./SearchBlocks";

export default [
    {
        name: "add-block",
        type: "sb-editor-content",
        render() {
            return <AddBlock />;
        }
    },
    {
        name: "add-content",
        type: "sb-editor-content",
        render() {
            return <AddContent />;
        }
    },
    {
        name: "sb-search-blocks-bar",
        type: "sb-editor-bar",
        shouldRender({ plugins }: Object) {
            const active = get(plugins, "sb-editor-bar") || [];
            return active ? active.find(pl => pl.name === "sb-search-blocks-bar") : false;
        },

        render() {
            return <SearchBlocks />;
        }
    }
];
