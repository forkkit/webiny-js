// @flow
import React from "react";
import { get } from "dot-prop-immutable";
import Slate from "webiny-app-site-builder/render/components/Slate";
import { ElementRoot } from "webiny-app-site-builder/render/components/ElementRoot";
import type { ElementType } from "webiny-app-site-builder/types";

const Button = ({ element }: { element: ElementType }) => {
    const { type = "default", icon = {}, link = {} } = element.data || {};
    const { svg = null } = icon;
    const alignItems = get(element, "data.settings.horizontalAlignFlex") || "flex-start";

    const { position = "left" } = icon;

    return (
        <ElementRoot element={element}>
            {({ getAllClasses, elementStyle, elementAttributes }) => (
                <div
                    style={{ ...elementStyle, display: "flex", justifyContent: alignItems }}
                    {...elementAttributes}
                >
                    <a
                        href={link.href || null}
                        target={link.newTab ? "_blank" : "_self"}
                        className={getAllClasses(
                            "webiny-sb-base-element-style",
                            "webiny-sb-page-element-button",
                            "webiny-sb-page-element-button--" + type,
                            "webiny-sb-page-element-button__icon--" + position
                        )}
                    >
                        {svg && <span dangerouslySetInnerHTML={{ __html: svg }} />}
                        <Slate value={element.data.text} />
                    </a>
                </div>
            )}
        </ElementRoot>
    );
};

export default Button;
