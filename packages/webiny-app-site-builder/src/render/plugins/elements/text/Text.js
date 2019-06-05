// @flow
import React from "react";
import Slate from "webiny-app-site-builder/render/components/Slate";
import { ElementRoot } from "webiny-app-site-builder/render/components/ElementRoot";
import type { ElementType } from "webiny-app-site-builder/types";

const Text = ({ element }: { element: ElementType }) => {
    return (
        <ElementRoot element={element} className={className}>
            <Slate value={element.data.text} />
        </ElementRoot>
    );
};

export const className = "webiny-sb-base-element-style webiny-sb-page-element-text";

export default Text;
