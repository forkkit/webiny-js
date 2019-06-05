// @flow
import * as React from "react";
import { ElementRoot } from "webiny-app-site-builder/render/components/ElementRoot";
import ImageContainer from "./ImageContainer";

const Image = ({ element }: Object) => {
    return (
        <ElementRoot
            element={element}
            className={"webiny-sb-base-element-style webiny-sb-page-element-image"}
        >
            <ImageContainer elementId={element.id}/>
        </ElementRoot>
    );
};


export default Image;