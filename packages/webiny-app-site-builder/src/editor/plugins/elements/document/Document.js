//@flow
import React from "react";
import { pure } from "recompose";
import Element from "webiny-app-site-builder/editor/components/Element";
import type { ElementType } from "webiny-app-site-builder/types";

const Document = pure(({ element }: { element: ElementType }) => {
    return (
        <div className={"webiny-sb-page-document"}>
            {element.elements.map(el => (
                <Element key={el} id={el} />
            ))}
        </div>
    );
});

export default Document;
