// @flow
import React from "react";
import { type WithPageDetailsProps } from "webiny-app-site-builder/admin/components";
import { IconButton } from "webiny-ui/Button";
import { Icon } from "webiny-ui/Icon";
import { ReactComponent as MoreVerticalIcon } from "webiny-app-site-builder/admin/assets/more_vert.svg";
import { ReactComponent as PreviewIcon } from "webiny-app-site-builder/admin/assets/visibility.svg";
import { ReactComponent as HomeIcon } from "webiny-app-site-builder/admin/assets/round-home-24px.svg";
import { ListItemGraphic } from "webiny-ui/List";
import { MenuItem, Menu } from "webiny-ui/Menu";
import { withConfirmation, type WithConfirmationProps } from "webiny-ui/ConfirmationDialog";
import { compose } from "recompose";
import { withSiteBuilderSettings } from "webiny-app-site-builder/admin/components";
import { css } from "emotion";
import { setHomePage } from "./graphql";
import { Mutation } from "react-apollo";
import { withSnackbar, type WithSnackbarProps } from "webiny-admin/components";
import classNames from "classnames";

const menuStyles = css({
    width: 250,
    right: -105,
    left: "auto !important",
    ".disabled": {
        opacity: 0.5,
        pointerEvents: "none"
    }
});

type Props = WithPageDetailsProps & WithConfirmationProps & WithSnackbarProps;

const PageOptionsMenu = (props: Props) => {
    const {
        showConfirmation,
        sbSettings: { getPagePreviewUrl },
        showSnackbar,
        pageDetails: { page }
    } = props;

    return (
        <Menu
            className={menuStyles}
            handle={<IconButton icon={<MoreVerticalIcon />} />}
            openSide={"left"}
        >
            <MenuItem onClick={() => window.open(getPagePreviewUrl(page), "_blank")}>
                <ListItemGraphic>
                    <Icon icon={<PreviewIcon />} />
                </ListItemGraphic>
                Preview
            </MenuItem>

            <Mutation mutation={setHomePage}>
                {update => (
                    <MenuItem
                        className={classNames({ disabled: page.isHomePage })}
                        onClick={() => {
                            showConfirmation(async () => {
                                const response = await update({
                                    variables: {
                                        id: page.id
                                    }
                                });

                                const { error } = response.data.siteBuilder.setHomePage;
                                if (error) {
                                    showSnackbar(error.message);
                                } else {
                                    showSnackbar("Homepage set successfully!");
                                    if (!page.published) {
                                        props.refreshPages();
                                    }
                                }
                            });
                        }}
                    >
                        <ListItemGraphic>
                            <Icon icon={<HomeIcon />} />
                        </ListItemGraphic>
                        Set as homepage
                    </MenuItem>
                )}
            </Mutation>
        </Menu>
    );
};

export default compose(
    withSnackbar(),
    withSiteBuilderSettings(),
    withConfirmation(props => {
        const {
            pageDetails: { page }
        } = props;

        return {
            message: (
                <span>
                    You&#39;re about to set the <strong>{page.title}</strong> page as your new
                    homepage, are you sure you want to continue?{" "}
                    {!page.published && "Note that your page will be automatically published."}
                </span>
            )
        };
    })
)(PageOptionsMenu);
