// @flow
export default [
    {
        name: "Site builder menus",
        description: "Grants complete access to site builder menus.",
        slug: "sb-menus",
        scopes: ["sb:menu:crud"],
        system: true
    },
    {
        name: "Site builder page categories",
        description: "Grants complete access to site builder page categories.",
        slug: "sb-categories",
        scopes: ["sb:category:crud"],
        system: true
    },
    {
        name: "Site builder editor",
        description: "Grants complete access to site builder pages.",
        slug: "sb-editor",
        scopes: [
            "sb:element:crud",
            "sb:tag:crud",
            "sb:settings",
            "sb:menu:crud",
            "sb:category:crud",
            "sb:page:crud",
            "sb:page:revision:create",
            "sb:page:revision:update",
            "sb:page:revision:delete",
            "sb:page:revision:publish"
        ],
        system: true
    },
    {
        name: "Site builder Settings",
        description: "Grants complete access to site builder settings.",
        slug: "sb-settings",
        scopes: ["sb:settings"],
        system: true
    }
];
