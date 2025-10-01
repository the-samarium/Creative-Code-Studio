import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <span
      className={cn(
        "text-2xl font-extrabold tracking-tight text-foreground",
        className
      )}
    >
      PixelCraft
    </span>
  )
}

export const LogoIcon = ({ className }: LogoProps) => {
  return (
    <span
      className={cn(
        "text-lg font-extrabold tracking-tight text-foreground",
        className
      )}
    >
      PC
    </span>
  )
}

export const LogoStroke = ({ className }: LogoProps) => {
  return (
    <span
      className={cn(
        "text-xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
        className
      )}
    >
      PixelCraft
    </span>
  )
}
