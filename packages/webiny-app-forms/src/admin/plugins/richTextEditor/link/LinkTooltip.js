import React, { useCallback, useRef, useEffect } from "react";
import styled from "react-emotion";
import { getLinkRange, TYPE } from "./utils";

const Tooltip = styled("span")({
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    top: 20,
    left: 0,
    padding: "2px 5px",
    backgroundColor: "#fff",
    border: "1px solid var(--mdc-theme-secondary)",
    zIndex: 1,
    width: "auto",
    maxWidth: 520,
    "> span:not(:first-child)": {
        marginLeft: 10
    }
});

const compressLink = href => {
    const start = href.substr(0, 24);
    const end = href.substr(24).substr(-24);

    return [start, "...", end].join("");
};

const getSelectionRect = () => {
    const native = window.getSelection();
    if (native.type === "None") {
        return { top: 0, left: 0, width: 0, height: 0 };
    }

    const range = native.getRangeAt(0);
    return range.getBoundingClientRect();
};

const LinkTooltip = ({ editor, onChange, activatePlugin }) => {
    const menuRef = useRef(null);
    const menu = menuRef.current;
    const link = editor.value.inlines.find(inline => inline.type === "link");
    const { selection } = editor.value;

    useEffect(() => {
        if (!link && selection.isFocused) {
            menu.style.display = "none";
            return;
        }

        if (!selection.isFocused) {
            // Don't reposition the tooltip;
            // When we attempt to click the button, editor focus is lost.
            return;
        }

        // Calculate position
        if (menu) {
            const editorRect = menu.parentNode.getBoundingClientRect();
            const menuRect = menu.getBoundingClientRect();
            let { top, left, height } = getSelectionRect();

            const menuRight = left + menuRect.width;
            const diff = editorRect.right - menuRight;

            // Position menu
            const position = { top: top + height, left: diff < 0 ? left + diff : left };

            menu.style.display = "flex";
            menu.style.top = position.top + "px";
            menu.style.left = position.left + "px";
        }
    });

    const activateLink = useCallback(() => activatePlugin("cms-form-rich-editor-menu-item-link"));
    const removeLink = useCallback(() => {
        editor.change(change => {
            // Restore selection
            change.select(getLinkRange(change, change.value.selection)).unwrapInline(TYPE);
            onChange(change);
            menu.style.display = "none";
        });
    });

    const href = link ? link.data.get("href") : "";

    return (
        <Tooltip innerRef={menuRef} style={{ display: "none" }}>
            <span>
                <a href={href} target={"_blank"}>
                    {href.length > 50 ? compressLink(href) : href}
                </a>
            </span>
            <button onClick={activateLink}>Change</button>
            <button onClick={removeLink}>Remove</button>
        </Tooltip>
    );
};

export default LinkTooltip;
