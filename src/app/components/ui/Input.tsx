"use client";

import clsx from "clsx";
import {
  InputHTMLAttributes,
  MouseEvent,
  useCallback,
  useMemo,
  useState,
} from "react";
import Icon from "./Icon";

export default function Input({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const handleVisibility = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setPasswordIsVisible(!passwordIsVisible);
    },
    [passwordIsVisible]
  );

  const computedType = useMemo(() => {
    if (rest.type === "password" && !passwordIsVisible) {
      return "password";
    }
    return "text";
  }, [passwordIsVisible, rest.type]);

  return (
    <div className="w-full relative flex items-center h-10 ">
      <input
        type={computedType || "text"}
        className={clsx(className, "w-full h-10 group")}
        id={rest.id}
        name={rest.name}
      />

      {rest.type === "password" ? (
        <button
          className="bg-red-50 flex items-center justify-between h-full px-2 rounded-r"
          tabIndex={-1}
          onClick={handleVisibility}
          type="button"
        >
          {passwordIsVisible ? (
            <Icon name="visibility" className="text-red-500" />
          ) : (
            <Icon name="visibility_off" className="text-red-500" />
          )}
        </button>
      ) : undefined}
    </div>
  );
}
