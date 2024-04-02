import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
  disabled?: boolean;
}

export function IconButton({
  transparent,
  disabled,
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-white/10 border border-white/10 rounded-md p-1.5",
        transparent && "bg-black/20",
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-white/20"
      )}
    />
  );
}
