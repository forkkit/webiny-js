//@flow
import React from "react";
import Element from "webiny-app-site-builder/render/components/Element";
import { ElementRoot } from "webiny-app-site-builder/render/components/ElementRoot";
import type { ElementType } from "webiny-app-site-builder/types";
import ElementAnimation from "webiny-app-site-builder/render/components/ElementAnimation";

const Column = ({ element }: { element: ElementType }) => {
    return (
        <ElementAnimation>
            <ElementRoot
                element={element}
                className={"webiny-sb-base-element-style webiny-sb-layout-column"}
                style={{ width: (element.data.width || 100) + "%" }}
            >
                {element.elements.map(element => (
                    /* $FlowFixMe */
                    <Element element={element} key={element.id} />
                ))}
            </ElementRoot>
        </ElementAnimation>
    );
};

export default Column;
