"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, Path, useForm } from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ROUTE } from "@/app/constants/route";

interface AuthFormProps<T extends FieldValues> {
  formType: "SIGN_IN" | "SIGN_UP";
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: "";
}

const AuthForm = <T extends FieldValues>({
  formType,
  schema,
  defaultValues,
  onSubmit,
}: AuthFormProps<T>) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  // 2. Define a submit handler.
  const handleSubmit = () => {};

  const buttonText = formType === "SIGN_IN" ? "Log in" : "Sign up";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 mt-7"
      >
        {formType === "SIGN_UP" ? (
          <h1 className="font-semibold text-2xl text-primary">Create an account</h1>
        ) : (
          ""
        )}
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">
                  {field.name === "email"
                    ? "Email"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={field.name === "password" ? "password" : "text"}
                    {...field}
                    className="w-full h-12 focus-visible:ring-0"
                  />
                </FormControl>
                <FormDescription hidden>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit" className="w-full bg-primary text-xl h-12 cursor-pointer">
          {buttonText}
        </Button>

        {formType === "SIGN_IN" ? (
          <p className="text-center">
            Don&apos;t have an account&nbsp;
            <Link
              href={ROUTE.SIGN_UP}
              className="text-blue-500 hover:underline"
            >
              Sing up
            </Link>
          </p>
        ) : (
          <p className="text-center">
            Already have an account&nbsp;
            <Link
              href={ROUTE.SIGN_IN}
              className="text-blue-500 hover:underline"
            >
              Log in
            </Link>
          </p>
        )}
      </form>
    </Form>
  );
};

export default AuthForm;
