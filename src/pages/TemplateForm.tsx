"use client";
import React from "react";

import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
} from "@tabler/icons-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function TemplateForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md w-full mx-auto mb-4 pt-8 rounded-sm md:rounded-2xl sm:p-8 md:p-8 shadow-input bg-white dark:bg-black mb-20">
      <h2 className="font-bold text-xl text-center text-neutral-800 dark:text-neutral-200">
        Aid Connect
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2 mb-4 m-4">
     
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>
        </div>

        <button
          className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block w-full  text-white rounded-md h-10 font-medium shadow-md"
          type="submit"
        >
          Sign In &rarr;
        </button>
        <h2 className="mt-4 text-center">Don't Have an account? <Link to="/register">Register</Link></h2>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
       
        <div className="flex flex-col space-y-4">
          {/* Example button for GitHub - Repeat structure for other buttons */}
          <button
            className="flex items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900"
            type="button" // Changed to "button" since it's not submitting the form
          >
            {/* Assuming IconBrandGithub is a component you've defined or imported */}
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
          </button>
          {/* Repeat for other buttons */}
        </div>
      </form>
    </div>
  );
}


const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
