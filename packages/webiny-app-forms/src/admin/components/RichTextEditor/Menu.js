import React from "react";
import { getPlugins, getPlugin } from "webiny-plugins";
import styled from "react-emotion";
import { css } from "emotion";

const MenuContainer = styled("div")({
    position: "relative"
});

const MenuButton = ({ onClick, active, children, onMouseDown = e => e.preventDefault() }) => {
    const buttonStyle = css({
        cursor: "pointer",
        color: active
            ? "var(--mdc-theme-primary)"
            : "var(--mdc-theme-text-secondary-on-background)",
        "&:hover": {
            color: "var(--mdc-theme-primary)"
        }
    });

    return (
        <span onClick={onClick} className={buttonStyle} onMouseDown={onMouseDown}>
            {children}
        </span>
    );
};

class Menu extends React.Component {
    menu = React.createRef();

    state = {
        activePlugin: null
    };

    static getDerivedStateFromProps(props: Object, state: Object) {
        if (!state.activePlugin || !props.value.selection) {
            return null;
        }

        const selection = props.value.selection.toJSON();
        if (state.activePlugin && selection.isFocused && !state.lastSelectionWasFocused) {
            return { activePlugin: null };
        }

        return { lastSelectionWasFocused: selection.isFocused };
    }

    activatePlugin = (plugin: string) => {
        const { value } = this.props;
        const selection = value.selection.toJSON();
        const selectedText = value.anchorText.text;
        const jsonValue = {
            selectedText:
                selectedText &&
                selectedText.substr(
                    selection.anchor.offset,
                    selection.focus.offset - selection.anchor.offset
                ),
            selection,
            inlines: value.inlines.toJSON(),
            marks: value.marks.toJSON(),
            activeMarks: value.activeMarks.toJSON(),
            blocks: value.blocks.toJSON(),
            texts: value.texts.toJSON()
        };

        this.setState({
            lastSelectionWasFocused: true,
            activePlugin: { plugin, value: jsonValue }
        });
    };

    deactivatePlugin = () => {
        this.setState({ activePlugin: null });
    };

    renderActivePlugin = () => {
        const { plugin, value } = this.state.activePlugin || {};
        const menuPlugin = getPlugin(plugin);

        if (!menuPlugin) {
            return null;
        }

        return menuPlugin.renderDialog({
            value,
            editor: this.props.editor,
            closeDialog: this.deactivatePlugin,
            onChange: this.props.onChange
        });
    };

    render() {
        const { value, onChange, editor, exclude } = this.props;

        if (!editor) {
            return null;
        }

        return (
            <MenuContainer>
                {getPlugins("cms-form-rich-editor-menu-item")
                    .filter(pl => !exclude.includes(pl.name))
                    .map(plugin => {
                        return React.cloneElement(
                            plugin.render({
                                MenuButton,
                                value,
                                onChange,
                                editor,
                                activatePlugin: this.activatePlugin
                            }),
                            {
                                key: plugin.name
                            }
                        );
                    })}
                {this.state.activePlugin && this.renderActivePlugin()}
            </MenuContainer>
        );
    }
}

export default Menu;
