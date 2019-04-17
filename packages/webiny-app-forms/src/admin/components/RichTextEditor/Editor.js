import React from "react";
import { get } from "lodash";
import { Editor } from "slate-react";
import { Value } from "slate";
import { getPlugins } from "webiny-plugins";
import { withCms } from "webiny-app-cms/context";
import initialValue from "./value";
import Menu from "./Menu";

class RichTextEditor extends React.Component {
    static defaultProps = {
        exclude: []
    };

    plugins = [];
    editor = React.createRef();

    constructor(props) {
        super();

        this.state = {
            modified: false,
            showMenu: false,
            value: props.value ? Value.fromJSON(props.value) : Value.create(initialValue),
            readOnly: !props.onChange,
            activePlugin: null
        };

        this.plugins = getPlugins("cms-form-rich-editor")
            .filter(pl => !props.exclude.includes(pl.name))
            .map(pl => pl.slate);
    }

    static getDerivedStateFromProps(props, state) {
        if (!state.modified && !props.readOnly) {
            // Got new editor value through props.
            return {
                value: props.value ? Value.fromJSON(props.value) : Value.create(initialValue)
            };
        }

        return null;
    }

    onChange = change => {
        // Prevent `onChange` if it is a `set_value` operation.
        // We only need to handle changes on user input.
        if (get(change.operations.toJSON(), "0.type") === "set_value") {
            return;
        }

        // Only update local state.
        this.setState(state => ({
            ...state,
            value: change.value,
            modified: true
        }));
    };

    activatePlugin = (plugin: string) => {
        const { value } = this.state;
        
        console.log(value.anchorText.getText());

        this.setState({
            activePlugin: {
                plugin,
                value: {
                    selection: value.selection.toJSON(),
                    anchorText: value.anchorText.getText(),
                    focusText: value.focusText.getText(),
                    inlines: value.inlines.toJSON(),
                    marks: value.marks.toJSON(),
                    activeMarks: value.activeMarks.toJSON(),
                    blocks: value.blocks.toJSON(),
                    texts: value.texts.toJSON()
                }
            }
        });
    };

    deactivatePlugin = () => {
        this.setState({ activePlugin: null });
    };

    render() {
        return (
            <React.Fragment>
                <Menu
                    exclude={this.props.exclude}
                    value={this.state.value}
                    onChange={this.onChange}
                    editor={this.editor.current}
                    activatePlugin={this.activatePlugin}
                    activePlugin={this.state.activePlugin}
                    deactivatePlugin={this.deactivatePlugin}
                />
                <Editor
                    ref={this.editor}
                    autoCorrect={false}
                    spellCheck={false}
                    plugins={this.plugins}
                    placeholder="Enter some text..."
                    value={this.state.value}
                    onChange={this.onChange}
                    theme={this.props.cms.theme}
                    activatePlugin={this.activatePlugin}
                    activePlugin={this.state.activePlugin}
                    deactivatePlugin={this.deactivatePlugin}
                />
            </React.Fragment>
        );
    }
}

export default withCms()(RichTextEditor);
