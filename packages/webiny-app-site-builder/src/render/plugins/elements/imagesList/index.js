// @flow
import React from "react";
import type { PluginType } from "webiny-plugins/types";
import ImagesList from "./ImagesList";
import Mosaic from "./components/Mosaic";
import Slider from "./components/Slider";

export default ([
    {
        name: "sb-render-page-element-images-list",
        type: "sb-render-page-element",
        elementType: "images-list",
        render({ element, theme }) {
            return <ImagesList data={element.data} theme={theme} />;
        }
    },
    {
        name: "sb-page-element-images-list-component-mosaic",
        type: "sb-page-element-images-list-component",
        title: "Mosaic",
        component: Mosaic
    },
    {
        name: "sb-page-element-images-list-component-slider",
        type: "sb-page-element-images-list-component",
        title: "Slider",
        component: Slider
    }
]: Array<PluginType>);
