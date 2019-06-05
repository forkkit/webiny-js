//@flow
import React from "react";
import Saving from "./Saving";

export default {
    name: "sb-toolbar-save",
    type: "sb-toolbar-bottom",
    renderAction() {
        return <Saving/>;
    }
};
