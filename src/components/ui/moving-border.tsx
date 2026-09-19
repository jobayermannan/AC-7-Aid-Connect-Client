"use client";
import React from "react";
import { cn } from "@/utils/cn";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
} & React.ComponentPropsWithoutRef<"button">) {
  return (
    <Component
      className={cn(
        "relative text-xl h-8 w-32 p-[1px] overflow-hidden rounded-md border border-slate-700 bg-slate-900 text-white",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className={cn(
          "relative flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
};
