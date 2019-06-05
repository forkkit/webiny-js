//@flow
import React from "react";
import { connect } from "webiny-app-site-builder/editor/redux";
import styled from "react-emotion";
import { togglePlugin } from "webiny-app-site-builder/editor/actions";
import { ButtonFloating } from "webiny-ui/Button";
import { ReactComponent as AddIcon } from "webiny-app-site-builder/editor/assets/icons/add.svg";

const BottomRight = styled("div")({
    position: "fixed",
    zIndex: 25,
    bottom: 20,
    right: 20
});

const AddBlock = ({ togglePlugin }) => {
    return (
        <BottomRight>
            <ButtonFloating
                onClick={() => togglePlugin({ name: "sb-search-blocks-bar" })}
                icon={<AddIcon />}
            />
        </BottomRight>
    );
};

export default connect(
    null,
    { togglePlugin }
)(AddBlock);
