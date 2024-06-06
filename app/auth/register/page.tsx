"use client";
import Button from "@/app/components/ui/button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { RegisterSchema, TRegisterSchema } from "./_schema";
import ControlledField from "@/app/components/ui/textfield/ControlledField";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
// import { useRegister } from "@/app/services/mutation";

const Register = () => {
  // const register = useRegister();

  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
  });

  const submit: SubmitHandler<TRegisterSchema> = (data) => {
    // console.log("resgi", register);
  };

  return (
    <>
      <div className="flex flex-1 h-full md:h-screen justify-center items-center">
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
          <small className="mx-auto block w-full text-center text-gray-400">
            {" "}
            Already have an account?{" "}
            {
              <Link
                href="/auth/login"
                className="text-gray-100 font-bold hover:underline"
              >
                Login
              </Link>
            }{" "}
          </small>
        </form>
      </div>
    </>
  );
};

export default Register;
