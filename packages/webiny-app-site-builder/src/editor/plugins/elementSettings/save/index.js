//@flow
import React from "react";
import { ReactComponent as FavoriteIcon } from "webiny-app-site-builder/editor/assets/icons/round-favorite-24px.svg";
import Action from "../components/Action";
import SaveAction from "./SaveAction";

export default {
    name: "sb-page-element-settings-save",
    type: "sb-page-element-settings",
    renderAction() {
        return (
            <SaveAction>
                <Action tooltip={"Save element"} icon={<FavoriteIcon />} />
            </SaveAction>
        );
    }
};
