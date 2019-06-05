// @flow
import React from "react";
import type { PluginType } from "webiny-plugins/types";
import PagesList from "./PagesList";
import GridPageList from "./components/GridPageList";

export default ([
    {
        name: "sb-render-page-element-pages-list",
        type: "sb-render-page-element",
        elementType: "pages-list",
        render({ element, theme }) {
            return <PagesList data={element.data} theme={theme} />;
        }
    },
    {
        name: "sb-page-element-pages-list-component-default",
        type: "sb-page-element-pages-list-component",
        title: "Grid list",
        component: GridPageList
    }
]: Array<PluginType>);
