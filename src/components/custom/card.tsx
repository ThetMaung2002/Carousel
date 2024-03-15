import { Box as RadixCard} from "@radix-ui/themes"
import { FC, PropsWithChildren } from "react"
import { cn } from "../../utils/cn"

interface CardProps extends PropsWithChildren {
    className?: string;
}

const Card:FC<CardProps> = ({children, className, ...props}) => {
  return (
    <RadixCard {...props} className={cn('', className)} >
        {children}
    </RadixCard>
  )
}

export default Card