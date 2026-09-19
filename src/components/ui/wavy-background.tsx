"use client";
import { cn } from "@/utils/cn";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  backgroundFill = "black",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  backgroundFill?: string;
  [key: string]: any;
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center justify-center",
        containerClassName
      )}
      style={{
        background: backgroundFill,
      }}
    >
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
