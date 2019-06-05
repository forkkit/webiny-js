// @flow
import "./style/theme.scss";
import StaticLayout from "./layouts/static";
import BlogLayout from "./layouts/blog";

export default {
    layouts: [
        {
            name: "static",
            title: "Static page",
            component: StaticLayout
        },
        {
            name: "blog",
            title: "Blog",
            component: BlogLayout
        }
    ],
    colors: {
        primary: "var(--webiny-sb-theme-primary)",
        secondary: "var(--webiny-sb-theme-secondary)",
        background: "var(--webiny-sb-theme-background)",
        surface: "var(--webiny-sb-theme-surface)",
        textPrimary: "var(--webiny-sb-theme-text-primary)"
    },
    elements: {
        button: {
            types: [
                { className: "", label: "Default" },
                { className: "primary", label: "Primary" },
                { className: "secondary", label: "Secondary" },
                { className: "outline-primary", label: "Outline Primary" },
                { className: "outline-secondary", label: "Outline Secondary" },
                { className: "simple", label: "Simple" }
            ]
        }
    },
    typography: {
        h1: {
            label: "Heading 1",
            component: "h1",
            className: "webiny-sb-typography-h1"
        },
        h1White: {
            label: "Heading 1 (white)",
            component: "h1",
            className: "webiny-sb-typography-h1 webiny-sb-typography--white"
        },
        h2: {
            label: "Heading 2",
            component: "h2",
            className: "webiny-sb-typography-h2"
        },
        h2White: {
            label: "Heading 2 (white)",
            component: "h2",
            className: "webiny-sb-typography-h2 webiny-sb-typography--white"
        },
        h3: {
            label: "Heading 3",
            component: "h3",
            className: "webiny-sb-typography-h3"
        },
        h3White: {
            label: "Heading 3 (white)",
            component: "h3",
            className: "webiny-sb-typography-h3 webiny-sb-typography--white"
        },
        h4: {
            label: "Heading 4",
            component: "h4",
            className: "webiny-sb-typography-h4"
        },
        h4White: {
            label: "Heading 4 (white)",
            component: "h4",
            className: "webiny-sb-typography-h4 webiny-sb-typography--white"
        },
        h5: {
            label: "Heading 5",
            component: "h5",
            className: "webiny-sb-typography-h5"
        },
        h5White: {
            label: "Heading 5 (white)",
            component: "h5",
            className: "webiny-sb-typography-h5 webiny-sb-typography--white"
        },
        h6: {
            label: "Heading 6",
            component: "h6",
            className: "webiny-sb-typography-h6"
        },
        h6White: {
            label: "Heading 6 (white)",
            component: "h6",
            className: "webiny-sb-typography-h6 webiny-sb-typography--white"
        },
        paragraph: {
            label: "Paragraph",
            component: "p",
            className: "webiny-sb-typography-body"
        },
        paragraphWhite: {
            label: "Paragraph (white)",
            component: "p",
            className: "webiny-sb-typography-body webiny-sb-typography--white"
        },
        description: {
            label: "Description",
            component: "p",
            className: "webiny-sb-typography-description"
        },
        descriptionWhite: {
            label: "Description (white)",
            component: "p",
            className: "webiny-sb-typography-description webiny-sb-typography--white"
        },
        primaryColorText: {
            label: "Primary color text",
            component: "p",
            className: "webiny-sb-typography-body webiny-sb-typography--primary"
        }
    }
};
