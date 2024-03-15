import { Button as RadixButton } from "@radix-ui/themes";
import { FC, PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

interface ButtonType extends PropsWithChildren {
  onClick: () => void;
  className: string;
  variant?: "classic" | "solid" | "soft" | "surface" | "outline" | "ghost" | undefined;
  size?: "1" | "2" | "3" | "4"
}

const Button: FC<ButtonType> = ({ children, className, variant = "classic", size }) => {
  return <RadixButton color="indigo" size={size} variant={variant} className={cn("", className)}>{children}</RadixButton>;
};

export default Button;
