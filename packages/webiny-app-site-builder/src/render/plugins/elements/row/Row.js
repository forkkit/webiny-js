//@flow
import React from "react";
import Element from "webiny-app-site-builder/render/components/Element";
import { ElementRoot } from "webiny-app-site-builder/render/components/ElementRoot";
import type { ElementType } from "webiny-app-site-builder/types";
import ElementAnimation from "webiny-app-site-builder/render/components/ElementAnimation";

const Row = ({ element }: { element: ElementType }) => {
    return (
        <ElementAnimation>
            <ElementRoot
                element={element}
                className={"webiny-sb-base-element-style webiny-sb-layout-row"}
            >
                {element.elements.map(element =>
                    /* $FlowFixMe */
                    element.data ? <Element key={element.id} element={element} /> : null
                )}
            </ElementRoot>
        </ElementAnimation>
    );
};

export default Row;
