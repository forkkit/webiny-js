import { registerPlugins } from "webiny-plugins";

const loaded = { render: false, editor: false };

export const lazyLoadMiddleware = () => async (params: Object, next: Function) => {
    const { route } = params;

    // If we are on pages list route, import plugins required to render the page content.
    if (route.path.startsWith("/site-builder/pages") && !loaded.render) {
        const renderPlugins = await import("webiny-app-site-builder/render/presets/default");
        registerPlugins(renderPlugins.default);

        loaded.render = true;
    }

    // If we are on the Editor route, import plugins required to render both editor and preview.
    if (route.path.startsWith("/site-builder/editor") && !loaded.editor) {
        const plugins = await Promise.all(
            [
                import("webiny-app-site-builder/editor/presets/default"),
                !loaded.render ? import("webiny-app-site-builder/render/presets/default") : null
            ].filter(Boolean)
        );
        registerPlugins(plugins.map(p => p.default));

        loaded.editor = true;
        loaded.render = true;
    }

    next();
};
