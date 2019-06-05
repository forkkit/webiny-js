//@flow
import React from "react";
import styled from "react-emotion";
import { pure } from "recompose";
import { ElementRoot } from "webiny-app-site-builder/render/components/ElementRoot";
import BlockContainer from "./BlockContainer";
import ElementAnimation from "webiny-app-site-builder/render/components/ElementAnimation";

const BlockStyle = styled("div")({
    position: "relative",
    color: "#666",
    padding: 5,
    boxSizing: "border-box"
});

const Block = pure(({ element }) => {
    const { id } = element;

    return (
        <BlockStyle id={id} style={{ zIndex: 20, position: "relative" }}>
            <ElementAnimation>
                <ElementRoot element={element}>
                    {({ elementStyle, elementAttributes, customClasses, combineClassNames }) => (
                        <BlockContainer
                            elementId={id}
                            elementStyle={elementStyle}
                            elementAttributes={elementAttributes}
                            customClasses={[
                                "webiny-sb-layout-block webiny-sb-base-element-style",
                                ...customClasses
                            ]}
                            combineClassNames={combineClassNames}
                        />
                    )}
                </ElementRoot>
            </ElementAnimation>
        </BlockStyle>
    );
});

export default Block;
