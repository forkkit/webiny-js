import React from "react";
import { Tags } from "webiny-ui/Tags";
import { Input } from "webiny-ui/Input";
import { Grid, Cell } from "webiny-ui/Grid";

import { ReactComponent as TextIcon } from "./icons/round-text_fields-24px.svg";
import { ReactComponent as NumberIcon } from "./icons/round-looks_3-24px.svg";
import { ReactComponent as HiddenIcon } from "./icons/round-visibility_off-24px.svg";

const baseTypes = [
    {
        type: "cms-form-field-type",
        name: "cms-form-field-text",
        fieldType: {
            dataType: true,
            id: "text",
            validators: ["required", "minLength", "maxLength", "regex", "in"],
            label: "Text",
            description: "Titles, names, paragraphs",
            icon: <TextIcon />,
            createField() {
                return {
                    id: "",
                    label: "",
                    type: this.id,
                    validators: []
                };
            }
        }
    },
    {
        type: "cms-form-field-type",
        name: "cms-form-field-number",
        fieldType: {
            dataType: true,
            id: "number",
            label: "Number",
            description: "ID, order number, rating, quantity",
            icon: <NumberIcon />,
            validators: ["required", "gt", "lt", "in"],
            createField() {
                return {
                    id: "",
                    label: "",
                    type: this.id,
                    validators: []
                };
            }
        }
    },
    {
        type: "cms-form-field-type",
        name: "cms-form-field-hidden",
        fieldType: {
            dataType: true,
            id: "hidden",
            label: "Hidden",
            description: "Predefined values, campaign IDs, tracking codes",
            icon: <HiddenIcon />,
            validators: ["required", "in"],
            createField() {
                return {
                    id: "",
                    type: this.id,
                    validators: []
                };
            },
            renderSettings({ Bind, slugify, uniqueId }) {
                return (
                    <Grid>
                        <Cell span={6}>
                            <Bind
                                name={"label"}
                                validators={["required"]}
                                afterChange={slugify("id")}
                            >
                                <Input label={"Label"} />
                            </Bind>
                        </Cell>
                        <Cell span={6}>
                            <Bind name={"id"} validators={["required", uniqueId]}>
                                <Input label={"Field ID"} />
                            </Bind>
                        </Cell>
                        <Cell span={12}>
                            <Bind name={"defaultValue"}>
                                <Input
                                    label={"Default value"}
                                    description={"Default value (optional)"}
                                />
                            </Bind>
                        </Cell>
                    </Grid>
                );
            }
        }
    }
];

const predefinedTypes = [
    {
        type: "cms-form-field-type",
        name: "cms-form-field-type-first-name",
        fieldType: {
            id: "first-name",
            group: "cms-form-field-group-contact",
            label: "First name",
            createField() {
                return {
                    id: this.id,
                    label: "First name",
                    type: "text",
                    validators: []
                };
            }
        }
    },
    {
        type: "cms-form-field-type",
        name: "cms-form-field-type-last-name",
        fieldType: {
            id: "last-name",
            group: "cms-form-field-group-contact",
            label: "Last name",
            createField() {
                return {
                    id: this.id,
                    label: "Last name",
                    type: "text",
                    validators: []
                };
            }
        }
    }
];

const fieldValidators = [
    {
        type: "cms-form-field-validator",
        name: "cms-form-field-validator-required",
        validator: {
            id: "required",
            label: "Required",
            description: "You won't be able to submit the form if this field is empty",
            message: "This field is required."
        }
    },
    {
        type: "cms-form-field-validator",
        name: "cms-form-field-validator-required",
        validator: {
            id: "in",
            label: "Only specified values are allowed",
            description:
                "You won't be able to submit the form if the field value is not in the list of specified values",
            message: "Value is not allowed.",
            renderSettings({ Bind }) {
                return (
                    <Bind name={"values"} validators={["required"]}>
                        <Tags label={"Allowed values"} placeholder={"Hit ENTER to add values"} />
                    </Bind>
                );
            }
        }
    }
];

export default [baseTypes, predefinedTypes, fieldValidators];
