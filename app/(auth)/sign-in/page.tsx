import AuthForm from "@/components/form/AuthForm";
import { SignInSchema } from "@/lib/validations";
import React from "react";

const SignIn = () => {
  return;
  <>
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={""}
    />
  </>;
};

export default SignIn;
