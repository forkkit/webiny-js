//@flow
import React from "react";
import { css } from "emotion";
import Element from "webiny-app-site-builder/render/components/Element";
import { ElementRoot } from "webiny-app-site-builder/render/components/ElementRoot";
import type { ElementType } from "webiny-app-site-builder/types";
import ElementAnimation from "webiny-app-site-builder/render/components/ElementAnimation";

const Block = ({ element }: { element: ElementType }) => {
    return (
        <ElementAnimation>
            <ElementRoot element={element}>
                {({ elementStyle, elementAttributes, customClasses, combineClassNames }) => {
                    const { width, alignItems, justifyContent, ...containerStyle } = elementStyle;

                    return (
                        <div
                            style={{ width: "100%", display: "flex", justifyContent: "center" }}
                            className={"webiny-sb-layout-block-container " + css(containerStyle)}
                            {...elementAttributes}
                        >
                            <div
                                style={{
                                    width: width ? width : "100%",
                                    alignSelf: justifyContent,
                                    alignItems: alignItems
                                }}
                                className={combineClassNames(
                                    "webiny-sb-layout-block webiny-sb-base-element-style",
                                    ...customClasses
                                )}
                            >
                                {element.elements.map(element => (
                                    /* $FlowFixMe */
                                    <Element key={element.id} element={element} />
                                ))}
                            </div>
                        </div>
                    );
                }}
            </ElementRoot>
        </ElementAnimation>
    );
};

export default Block;
