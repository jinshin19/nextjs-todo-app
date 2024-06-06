"use client";
import Button from "@/app/components/ui/button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { LoginSchema, TLoginSchema } from "./_schema";
import ControlledField from "@/app/components/ui/textfield/ControlledField";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

const Login = () => {
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });

  const submit: SubmitHandler<TLoginSchema> = (data) => {
    console.log("Submitted", data);
  };

  return (
    <>
      <div className="flex flex-1 h-full md:h-screen justify-center items-center">
        <form
          className="block w-96 py-5 px-5"
          onSubmit={form.handleSubmit(submit)}
        >
          <h1 className="pb-5 text-center"> Login Form </h1>
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
          <Button as="button" type="submit" variant="primaryColor">
            Login
          </Button>
          <small className="mx-auto block w-full text-center text-gray-400">
            {" "}
            Dont have an account yet?{" "}
            {
              <Link
                href="/auth/register"
                className="text-gray-100 font-bold hover:underline"
              >
                Register
              </Link>
            }{" "}
          </small>
        </form>
      </div>
    </>
  );
};

export default Login;
