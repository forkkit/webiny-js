//@flow
import React from "react";
import { ElementRoot } from "webiny-app-site-builder/render/components/ElementRoot";
import type { ElementType } from "webiny-app-site-builder/types";

const Spacer = ({ element }: { element: ElementType }) => {
    return <ElementRoot element={element} />;
};

export default Spacer;
