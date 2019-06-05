//@flow
import React from "react";
import ConnectedElement from "webiny-app-site-builder/editor/components/ConnectedElement";
import { ElementRoot } from "webiny-app-site-builder/render/components/ElementRoot";
import RowContainer from "./RowContainer";
import ElementAnimation from "webiny-app-site-builder/render/components/ElementAnimation";

/**
 * TODO: this entire component can be further optimized (see the Chrome Profiler) to avoid unnecessary elements re-renders.
 */

const Row = ({ element }: Object) => {
    return (
        <ElementAnimation>
            <ElementRoot
                element={element}
                className={"webiny-sb-base-element-style webiny-sb-layout-row"}
                style={{ zIndex: 20, position: "relative" }}
            >
                <ConnectedElement elementId={element.id} withChildElements>
                    {element => <RowContainer elementId={element.id} />}
                </ConnectedElement>
            </ElementRoot>
        </ElementAnimation>
    );
};

export default Row;
