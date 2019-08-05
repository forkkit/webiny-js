// @flow
// $FlowFixMe
import React from "react";
import { Input } from "webiny-ui/Input";
import { trim } from "lodash";
import { Form } from "webiny-form";
import { Hotkeys } from "react-hotkeyz";

export default function AddOptionInput({ onAdd, validation }: *) {
    return (
        <Form>
            {({ Bind }) => (
                <Bind name={"newOption"}>
                    {({ value, onChange }) => (
                        <Hotkeys
                            zIndex={110}
                            keys={{
                                enter() {
                                    if (value) {
                                        onChange("");
                                        onAdd(trim(value));
                                    }
                                }
                            }}
                        >
                            <Input
                                validation={validation}
                                value={value}
                                onChange={onChange}
                                placeholder={"Enter an option and press enter"}
                            />
                        </Hotkeys>
                    )}
                </Bind>
            )}
        </Form>
    );
}
