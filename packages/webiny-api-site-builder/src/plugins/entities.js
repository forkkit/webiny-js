// @flow
import { type EntityPluginType } from "webiny-api/types";
import * as entities from "webiny-api-site-builder/entities";

const category: EntityPluginType = {
    name: "entity-sb-category",
    type: "entity",
    namespace: "siteBuilder",
    entity: {
        name: "Category",
        factory: entities.categoryFactory
    }
};

const element: EntityPluginType = {
    name: "entity-sb-page-element",
    type: "entity",
    namespace: "siteBuilder",
    entity: {
        name: "Element",
        factory: entities.elementFactory
    }
};

const menu: EntityPluginType = {
    name: "entity-sb-menu",
    type: "entity",
    namespace: "siteBuilder",
    entity: {
        name: "Menu",
        factory: entities.menuFactory
    }
};

const page: EntityPluginType = {
    name: "entity-sb-page",
    type: "entity",
    namespace: "siteBuilder",
    entity: {
        name: "Page",
        factory: entities.pageFactory
    }
};

export default [category, element, menu, page];
