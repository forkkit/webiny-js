//@flow
import React from "react";
import RenderElement from "webiny-app-site-builder/render/components/Element";
import type { ElementType } from "webiny-app-site-builder/types";

const Document = ({ element }: { element: ElementType }) => {
    if (!element || Array.isArray(element)) {
        return null;
    }
    return (
        <div className={"webiny-sb-page-document"}>
            {element.elements.map(element => (
                <RenderElement key={element.id} element={element} />
            ))}
        </div>
    );
};

export default Document;
