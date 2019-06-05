// @flow
import * as React from "react";
import { pure } from "recompose";
import { withSiteBuilder } from "webiny-app-site-builder/context";
import { ElementRoot } from "webiny-app-site-builder/render/components/ElementRoot";
import { Form } from "webiny-form";
import { get } from "lodash";
import { getPlugins } from "webiny-plugins";

const MailchimpElement = pure((props: Object) => {
    const { element } = props;
    let selected = get(element, "data.settings.component", get(element, "settings.component"));
    const component = getPlugins("sb-page-element-mailchimp-component").find(
        cmp => cmp.name === selected
    );

    let render = <span>Nothing selected.</span>;
    if (component) {
        const Component = component.component;
        render = (
            <Form key={component.name}>
                {({ form }) => (
                    <Component
                        processing={false} // It will suffice for editor preview needs.
                        {...form}
                        submit={async ({ onSuccess }) => {
                            if (await form.validate()) {
                                form.submit();
                                onSuccess && onSuccess();
                            }
                        }}
                    />
                )}
            </Form>
        );
    }

    return (
        <ElementRoot
            key={component ? component.name : "no-component"}
            element={element}
            className={"webiny-sb-page-element-mailchimp"}
        >
            {render}
        </ElementRoot>
    );
});

export default withSiteBuilder()(MailchimpElement);
