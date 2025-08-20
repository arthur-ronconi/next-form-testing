import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={clsx(
        "font-semibold py-2 px-4 flex items-center justify-center rounded disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
    >
      {children}
    </button>
  );
}
