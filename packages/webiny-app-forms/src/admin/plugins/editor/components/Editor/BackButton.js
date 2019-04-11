import React from "react";
import { IconButton } from "webiny-ui/Button";
import { useRouter } from "webiny-app/hooks";
import { ReactComponent as BackIcon } from "./icons/round-arrow_back-24px.svg";
import { css } from "emotion";

const backStyles = css({
    marginLeft: -10
});

const BackButton = () => {
    const { router } = useRouter();

    function goBack() {
        router.goToRoute({
            name: "Cms.Forms",
            params: {
                id: router.getParams("id")
            }
        });
    }

    return <IconButton className={backStyles} onClick={goBack} icon={<BackIcon />} />;
};

export default BackButton;
