import { cn } from "@/utils/cn";
import React from "react";

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        containerClassName
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-auto w-full max-w-[30rem] rounded-xl p-6 border",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <Tag
      className={cn(className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const useMouseEnter = () => {
  return [false, () => {}];
};
