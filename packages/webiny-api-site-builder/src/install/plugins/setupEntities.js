// @flow
import { categoryFactory } from "./../../entities/Category.entity";
import { menuFactory } from "./../../entities/Menu.entity";
import { pageFactory } from "./../../entities/Page.entity";
import { elementFactory } from "./../../entities/Element.entity";
import { settingsFactory } from "./../../entities/Settings.entity";

export default (context: Object) => {
    context.siteBuilder = { ...context.siteBuilder, entities: {} };

    context.siteBuilder.entities.Category = categoryFactory();
    context.siteBuilder.entities.Page = pageFactory(context);
    context.siteBuilder.entities.Menu = menuFactory();
    context.siteBuilder.entities.Element = elementFactory();
    context.siteBuilder.entities.Settings = settingsFactory(context);
};
