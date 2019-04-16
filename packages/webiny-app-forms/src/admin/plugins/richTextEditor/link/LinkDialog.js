import React, { Fragment } from "react";
import { compose, withProps, withHandlers } from "recompose";
import { Form } from "webiny-form";
import { Input } from "webiny-ui/Input";
import { Switch } from "webiny-ui/Switch";
import { Cell, Grid } from "webiny-ui/Grid";
import {
    Dialog,
    DialogBody,
    DialogHeader,
    DialogHeaderTitle,
    DialogCancel,
    DialogFooter,
    DialogFooterButton
} from "webiny-ui/Dialog";

const LinkDialog = ({ linkData, updateLink, closeDialog }) => {
    return (
        <Dialog open={true} onClose={closeDialog}>
            <Form data={linkData} onSubmit={updateLink}>
                {({ Bind, submit }) => (
                    <Fragment>
                        <DialogHeader>
                            <DialogHeaderTitle>Edit Link</DialogHeaderTitle>
                        </DialogHeader>
                        <DialogBody>
                            <Grid>
                                <Cell span={12}>
                                    <Bind name={"text"} validators={["required"]}>
                                        <Input label="Text to display" />
                                    </Bind>
                                </Cell>
                                <Cell span={12}>
                                    <Bind name={"href"} validators={["required"]}>
                                        <Input label="URL" />
                                    </Bind>
                                </Cell>
                                <Cell span={6}>
                                    <Bind name={"newTab"}>
                                        <Switch
                                            onChange={() => submit()}
                                            label={"Open in new window"}
                                        />
                                    </Bind>
                                </Cell>
                                <Cell span={6}>
                                    <Bind name={"noFollow"}>
                                        <Switch
                                            onChange={() => submit()}
                                            label={`Add "rel=nofollow"`}
                                        />
                                    </Bind>
                                </Cell>
                            </Grid>
                        </DialogBody>
                        <DialogFooter>
                            <DialogCancel onClick={closeDialog}>Cancel</DialogCancel>
                            <DialogFooterButton onClick={submit}>OK</DialogFooterButton>
                        </DialogFooter>
                    </Fragment>
                )}
            </Form>
        </Dialog>
    );
};

const TYPE = "link";
const isLink = i => i.type === TYPE;
const createLinkRange = (change, selection) => {
    change.select(selection);
    let link = change.value.inlines.find(isLink);
    if (!link) {
        return selection;
    }
    // Create full link range
    const firstText = link.getFirstText();
    const lastText = link.getLastText();
    return {
        anchor: {
            path: change.value.document.getPath(firstText.key),
            offset: 0
        },
        focus: {
            path: change.value.document.getPath(lastText.key),
            offset: lastText.text.length
        }
    };
};

export default compose(
    withProps(({ value }) => {
        let link = value.inlines.some(isLink) && value.inlines.find(isLink);
        return { linkData: (link && link.data) || { text: value.selectedText } };
    }),
    withHandlers({
        updateLink: ({ editor, onChange, value: { selection } }) => data => {
            editor.change(change => {
                change
                    .select(createLinkRange(change, selection))
                    .unwrapInline(TYPE)
                    .wrapInline({ type: TYPE, data })
                    .moveToEnd();

                onChange(change);
            });
        },
        removeLink: ({ editor, onChange, value: { selection } }) => () => {
            editor.change(change => {
                // Restore selection
                change.select(createLinkRange(change, selection)).unwrapInline(TYPE);
                onChange(change);
            });
        }
    })
)(LinkDialog);
