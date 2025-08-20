"use client";

import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { handleSignUp } from "@/app/lib/cognitoActions";
import Link from "next/link";
import { useActionState } from "react";

export default function SignUpForm() {
  const [state, dispatch, isPending] = useActionState(handleSignUp, undefined);

  return (
    <form
      action={(formData: FormData) => dispatch(formData)}
      className="py-4 px-8 shadow shadow-black/30 bg-red-500 rounded-lg flex flex-col gap-4 text-red-50"
    >
      <h2 className="font-bold text-xl pb-2 border-b-2 border-red-50">
        Sign Up
      </h2>
      <div className="flex flex-col text-red-950">
        <label htmlFor="name" className="font-medium text-red-50">
          Full name
        </label>
        <Input className="bg-red-50 rounded px-2" name="name" id="name" />
      </div>
      <div className="flex flex-col text-red-950">
        <label htmlFor="email" className="font-medium text-red-50">
          Email
        </label>
        <Input className="bg-red-50 rounded px-2" name="email" id="email" />
      </div>
      <div className="flex flex-col text-red-950">
        <label htmlFor="password" className="font-medium text-red-50">
          Password
        </label>
        <Input
          className="bg-red-50 rounded rounded-r-none px-2"
          name="password"
          id="password"
          type="text"
        />
      </div>
      <div className="flex flex-col ">
        <Button
          type="submit"
          className="bg-red-200 text-red-500"
          disabled={isPending}
        >
          Sign In
        </Button>
        <Button>
          <Link href="/signin">Already have an account? Sign in!</Link>
        </Button>
        <Button>Forgot your password?</Button>
      </div>
    </form>
  );
}
