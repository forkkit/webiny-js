// @flow
import { settingsFactory as baseSettingsFactory } from "webiny-api/entities";
import { Model } from "webiny-model";
import FileModel from "./File.model";

class SocialMediaModel extends Model {
    constructor() {
        super();
        this.attr("facebook").char();
        this.attr("twitter").char();
        this.attr("instagram").char();
        this.attr("image").model(FileModel);
    }
}

class SettingsPagesModel extends Model {
    constructor() {
        super();
        // These are actually parents, not the ID of the actual page.
        this.attr("home").char();
        this.attr("notFound").char();
        this.attr("error").char();
    }
}

const settingsModelFactory = () => {
    return class SiteBuilderSettingsModel extends Model {
        constructor() {
            super();
            this.attr("pages").model(SettingsPagesModel);
            this.attr("name").char();
            this.attr("domain").char();
            this.attr("favicon").model(FileModel);
            this.attr("logo").model(FileModel);
            this.attr("social").model(SocialMediaModel);
        }
    };
};

export const settingsFactory = (...args: Array<*>) => {
    return class Settings extends baseSettingsFactory(...args) {
        static key = "site-builder";

        data: Object;
        load: Function;

        constructor() {
            super();
            this.attr("data").model(settingsModelFactory());
        }
    };
};
