import clsx from "clsx";
import { HTMLAttributes } from "react";

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  fill?: 0 | 1;
  wght?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  grad?: -25 | 0 | 200;
  opsz?: 20 | 24 | 40 | 48;
  name: string;
}

export default function Icon({
  fill = 0,
  wght = 300,
  grad = 0,
  opsz = 24,
  name = "question_mark",
  className,
}: IconProps) {
  return (
    <span
      className={clsx(className, "material-symbols-rounded")}
      style={{
        fontVariationSettings: `'FILL' ${fill}; wght ${wght}; 'GRAD' ${grad}; opsz ${opsz}`,
      }}
    >
      {name}
    </span>
  );
}
