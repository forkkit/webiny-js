import React from "react";
import { getPlugins, getPlugin } from "webiny-plugins";

// Ovo je Form renderer
const renderField = field => {
    const plugin = getPlugins("form-render-field").find(pl => pl.fieldType === field.type);
    return plugin.render({ field });
};

const textRenderPlugin = {
    name: "form-render-field-text",
    type: "form-render-field",
    fieldType: "text",
    render(props) {
        return <input type={"text"} name={props.id} />;
    }
};

const formRenderer = {
    name: "form-renderer-default",
    type: "form-renderer",
    title: "Default Webiny form",
    render({ form }) {
        return (
            <form>
                {form.fields.map((row, index) => {
                    return (
                        <div key={index} className={"row"}>
                            {row.map(field => {
                                return (
                                    <div key={field.id} className={"column"}>

                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </form>
        );
    }
};

// Ovo je renderer za Site Builder element
import { Form } from "webiny-app-forms";

const FormElement = ({ element }) => {
    const { form } = element.data;

    return (
        <Form id={form.id}>
            {({ data }) => {
                const formRenderer = getPlugin(data.renderer);
                return formRenderer.render({ form: data });
            }}
        </Form>
    );
};

export default Scratch48;
