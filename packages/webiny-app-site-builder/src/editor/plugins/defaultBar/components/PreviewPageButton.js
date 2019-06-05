// @flow
import React from "react";
import { connect } from "webiny-app-site-builder/editor/redux";
import { getPage } from "webiny-app-site-builder/editor/selectors";
import { compose } from "recompose";
import { omit, isEqual } from "lodash";
import { withSnackbar } from "webiny-admin/components";
import { withRouter } from "react-router-dom";
import { MenuItem } from "webiny-ui/Menu";
import { withSiteBuilderSettings } from "webiny-app-site-builder/admin/components";
import { ListItemGraphic } from "webiny-ui/List";
import { Icon } from "webiny-ui/Icon";
import { ReactComponent as PreviewIcon } from "webiny-app-site-builder/admin/assets/visibility.svg";

const PreviewPageButton = ({ page, sbSettings: { getPagePreviewUrl } }: Object) => {
    return (
        <MenuItem onClick={() => window.open(getPagePreviewUrl(page), "_blank")}>
            <ListItemGraphic>
                <Icon icon={<PreviewIcon />} />
            </ListItemGraphic>
            Preview
        </MenuItem>
    );
};

export default compose(
    connect(
        state => ({ page: omit(getPage(state), ["content"]) }),
        null,
        null,
        { areStatePropsEqual: isEqual }
    ),
    withSnackbar(),
    withRouter,
    withSiteBuilderSettings()
)(PreviewPageButton);
