"use client";

import AuthForm from "@/components/form/AuthForm";
import { SignUpSchema } from "@/lib/validations";
import React from "react";

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ name: "", email: "", password: "" }}
      onSubmit=""
    />
  );
};

export default SignUp;
