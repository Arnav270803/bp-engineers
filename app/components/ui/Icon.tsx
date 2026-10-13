import type { SVGProps } from "react";
import { iconPaths, type IconName } from "~/content/icons";

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name" | "viewBox"> {
  name: IconName;
}

export function Icon({ name, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...rest}>
      <path d={iconPaths[name]} />
    </svg>
  );
}
