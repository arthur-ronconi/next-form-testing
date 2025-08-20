import ConfigureAmplifyClientSide from "@/amplify-cognito-config";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <ConfigureAmplifyClientSide />
      {children}
    </div>
  );
}
