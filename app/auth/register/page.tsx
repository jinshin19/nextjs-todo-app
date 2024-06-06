import Button from "@/app/components/ui/button/Button";
import TextField from "@/app/components/ui/textfield/TextField";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex flex-1 h-screen justify-center items-center">
        <form className="block w-96 py-5 px-5">
          <h1 className="pb-5 text-center"> Register Form </h1>
          <TextField variant="plain" type="text" placeholder="Email" />
          <TextField variant="plain" type="Password" placeholder="Password" />
          <Button as="button" type="button" variant="primaryColor">
            Register
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
