// @flow
import React from "react";
import { Editor } from "slate-react";
import { Value } from "slate";
import { getPlugins } from "webiny-plugins";
import { withSiteBuilder } from "webiny-app-site-builder/context";

class SlateEditor extends React.Component<*, *> {
    plugins: Array<Object>;

    constructor(props) {
        super();

        this.plugins = getPlugins("sb-render-slate-editor").map(pl => pl.slate);

        this.state = {
            value: Value.fromJSON(props.value)
        };
    }

    render() {
        return (
            <Editor
                readOnly={true}
                autoCorrect={false}
                spellCheck={false}
                plugins={this.plugins}
                value={this.state.value}
                theme={this.props.siteBuilder.theme}
            />
        );
    }
}

export default withSiteBuilder()(SlateEditor);
