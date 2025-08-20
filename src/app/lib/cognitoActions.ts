import {
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  resendSignUpCode,
  autoSignIn,
} from "aws-amplify/auth";
import { getErrorMessage } from "../utils/get-error-message";
import { redirect } from "next/navigation";

export async function handleSignUp(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const input = {
      username: String(formData.get("email")),
      password: String(formData.get("password")),
      options: {
        userAttributes: {
          email: String(formData.get("email")),
          name: String(formData.get("name")),
        },
        autoSignIn: true,
      },
    };
    const { isSignUpComplete, userId, nextStep } = await signUp(input);
    console.log({ isSignUpComplete, userId, nextStep });

    if (nextStep.signUpStep !== "CONFIRM_SIGN_UP") return;

    sessionStorage.setItem("temp-username", input.username);
  } catch (error) {
    return getErrorMessage(error);
  }
  redirect("/confirm-signup");
}

export async function handleSendEmailVerificationCode(
  prevState: { message: string; errorMessage: string },
  formData: FormData
) {
  let currentState;
  try {
    await resendSignUpCode({
      username: String(formData.get("email")),
    });
    currentState = {
      ...prevState,
      message: "Code sent",
    };
  } catch (error) {
    currentState = {
      ...prevState,
      errorMessage: getErrorMessage(error),
    };
  }

  return currentState;
}

export async function handleConfirmSignUp(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username: getFormData(formData, "email"),
      confirmationCode: getFormData(formData, "code"),
    });
    // autoSignIn();
  } catch (error) {
    return getErrorMessage(error);
  }
  redirect("/signin");
}

export async function handleSignIn(
  prevState: string | undefined,
  formData: FormData
) {
  let redirectLink = "/in";
  try {
    const input = {
      username: getFormData(formData, "email"),
      password: getFormData(formData, "password"),
    };
    console.log(input);

    const { isSignedIn, nextStep } = await signIn(input);
    console.log(nextStep.signInStep);

    if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
      await resendSignUpCode({
        username: getFormData(formData, "email"),
      });
      redirectLink = "/confirm-signup";
    }
  } catch (error) {
    return getErrorMessage(error);
  }

  redirect(redirectLink);
}

export async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log(getErrorMessage(error));
  }
}

function getFormData(formData: FormData, name: string) {
  return String(formData.get(name));
}
