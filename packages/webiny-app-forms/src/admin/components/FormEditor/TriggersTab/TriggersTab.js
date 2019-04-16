import React, {useContext} from "react";
import styled from "react-emotion";
import { Accordion, AccordionItem } from "webiny-ui/Accordion";
import { Typography } from "webiny-ui/Typography";
import { RichTextEditor } from "webiny-app-forms/admin/components/RichTextEditor";
import { FormEditorContext } from "webiny-app-forms/admin/components/FormEditor";
import { ReactComponent as TextIcon } from "../icons/round-text_format-24px.svg";
import { ReactComponent as LinkIcon } from "../icons/round-link-24px.svg";
import { ReactComponent as CodeIcon } from "../icons/round-code-24px.svg";

const Container = styled("div")({
    padding: "40px 60px"
});

export const TriggersTab = () => {
    const { formState } = useContext(FormEditorContext);

    return (
        <Container>
            <Typography use={"overline"}>
                Which action should be taken after form submission
            </Typography>
            <Accordion>
                <AccordionItem
                    description="Show a success message once a user submits the form"
                    icon={<TextIcon />}
                    title="Display a message"
                >
                    <RichTextEditor value={formState.triggers.message}/>
                </AccordionItem>
                <AccordionItem
                    description="Send a user to a specific URL"
                    icon={<LinkIcon />}
                    title="Redirect"
                >
                    <div>Inner child 2</div>
                </AccordionItem>
                <AccordionItem
                    description="Send a POST request to a specific URL"
                    icon={<CodeIcon />}
                    title="Webhook"
                >
                    <div>Inner child 3</div>
                </AccordionItem>
            </Accordion>
        </Container>
    );
};
