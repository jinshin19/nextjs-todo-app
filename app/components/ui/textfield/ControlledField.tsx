import React, { ChangeEvent } from "react";
import TextField from "./TextField";
import { Controller } from "react-hook-form";
import ErrorText from "../error/ErrorText";

type PropTypes = {
  form?: any;
  type: "text" | "password";
  name: string;
  placeholder?: string;
};

const ControlledField = ({ form, type, name, placeholder }: PropTypes) => {
  const { control, trigger } = form;
  return (
    <Controller
      name={name!}
      control={control}
      render={({ field, fieldState }) => {
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
          field.onChange(e);
          trigger(name);
        };
        // Fix the bug here, figure out why rules or validate not working
        return (
          <>
            <TextField
              type={type === "text" ? "text" : "password"}
              variant="plain"
              onChange={onChangeHandler}
              placeholder={placeholder}
              value={field.value}
            />
            <ErrorText value={fieldState.error && fieldState.error?.message} />
          </>
        );
      }}
    />
  );
};

export default ControlledField;
