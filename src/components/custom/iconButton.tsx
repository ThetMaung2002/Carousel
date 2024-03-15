import { IconButton as RadixIconButton } from "@radix-ui/themes"
import { FC, PropsWithChildren } from "react"
import { cn } from "../../utils/cn";

interface IconProps extends PropsWithChildren {
  onClick: () => void;
  className?: string;
  variant?: "classic" | "solid" | "soft" | "surface" | "outline" | "ghost" | undefined;
  size?: "1" | "2" | "3" | "4";
  icon: React.ReactNode;
  colors?: "ruby" | "tomato" | "red" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "brown" | "orange" | "sky" | undefined;
}

const IconButton: FC<IconProps> = ({icon, variant, className, colors = "orange", ...rest}) => {
  return (
    <RadixIconButton color={colors} variant={variant} className={cn('rounded-full', className)} {...rest}>
      {icon}
    </RadixIconButton>
  )
}

export default IconButton