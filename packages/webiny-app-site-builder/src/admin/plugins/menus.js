// @flow
import React from "react";
import { ReactComponent as PagesIcon } from "webiny-app-site-builder/admin/assets/round-ballot-24px.svg";
import { hasRoles } from "webiny-app-security";

export default [
    {
        name: "sb-menu",
        type: "menu",
        render({ Menu }: Object) {
            const { menus, categories, editor }: Object = (hasRoles({
                menus: ["sb-menus"],
                categories: ["sb-categories"],
                editor: ["sb-editor"]
            }): any);

            if (menus || categories || editor) {
                return (
                    <Menu label={`Content`} icon={<PagesIcon />}>
                        <Menu label={`Pages`}>
                            {categories && <Menu label={`Categories`} path="/site-builder/categories" />}
                            {editor && <Menu label={`Pages`} path="/site-builder/pages" />}
                            {menus && <Menu label={`Menus`} path="/site-builder/menus" />}
                        </Menu>
                    </Menu>
                );
            }

            return null;
        }
    }
];
