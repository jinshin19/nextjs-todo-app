"use client";
import Button from "@/app/components/ui/button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { RegisterSchema, TRegisterSchema } from "./_schema";
import ControlledField from "@/app/components/ui/textfield/ControlledField";
import { SubmitHandler, useForm } from "react-hook-form";

const Login = () => {
  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
  });

  const submit: SubmitHandler<TRegisterSchema> = (data) => {
    console.log("Submitted", data);
  };

  return (
    <>
      <div className="flex flex-1 h-screen justify-center items-center">
        <form
          className="block w-96 py-5 px-5"
          onSubmit={form.handleSubmit(submit)}
        >
          <h1 className="pb-5 text-center"> Register Form </h1>
          <ControlledField
            form={form}
            type="text"
            name="email"
            placeholder="Email"
          />
          <ControlledField
            form={form}
            type="password"
            name="password"
            placeholder="Password"
          />
          <ControlledField
            form={form}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <Button as="button" type="submit" variant="primaryColor">
            Register
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
