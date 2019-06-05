// @flow
import { EntityModel } from "webiny-entity";

class MetaTagModel extends EntityModel {
    constructor() {
        super();
        this.attr("name").char();
        this.attr("content").char();
    }
}

class SeoSettings extends EntityModel {
    constructor() {
        super();
        this.attr("meta").models(MetaTagModel, false);
        this.attr("title").char();
        this.attr("description").char();
    }
}

export default [
    {
        name: "sb-page-settings-seo",
        type: "sb-page-settings-model",
        apply({ model }: { model: EntityModel }) {
            model
                .attr("seo")
                .model(SeoSettings)
                .setDefaultValue({});
        }
    },
    {
        name: "sb-schema-settings-seo",
        type: "sb-schema",
        typeDefs: `
            type MetaTag {
                name: String
                content: String
            }
            
            type SeoSettings {
                title: String
                description: String
                meta: [MetaTag]
            } 
            
            extend type PageSettings {
                seo: SeoSettings
            }
        `
    }
];
