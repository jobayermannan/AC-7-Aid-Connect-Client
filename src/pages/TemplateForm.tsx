import React from "react";
import { cn } from "@/utils/cn";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

// Adjusted TypeScript interfaces for your props to include loginLink
interface FormField {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}

interface TemplateFormProps {
  fields: FormField[];
  
  buttonText: string;
  registerLink?: string;
  loginLink?: string;
}

// Modified TemplateForm function to accept both registerLink and loginLink
export function TemplateForm({ fields, buttonText, registerLink, loginLink }: TemplateFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md w-full rounded-2xl mt-20 mx-auto pt-8 md:rounded-2xl sm:p-8 md:p-8 shadow-input bg-white dark:bg-black mb-20">
      <h2 className="font-bold text-xl text-center text-neutral-800 dark:text-neutral-200">
        Aid Connect
      </h2>

      <form onSubmit={handleSubmit} className="custom-class">
        <div className="flex flex-col">
          {fields.map(({ id, label, placeholder, type }) => (
            <LabelInputContainer key={id} className="mb-4">
              <Label htmlFor={id}>{label}</Label>
              <Input id={id} placeholder={placeholder} type={type} />
            </LabelInputContainer>
          ))}
        </div>

        <button
          className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-md"
          type="submit"
        >
          {buttonText} &rarr;
        </button>
        {/* Conditionally render links based on props */}
        {registerLink && (
          <h2 className="mt-4 text-center">
            Don't have an account? <Link to={registerLink}>Register</Link>
          </h2>
        )}
        {loginLink && (
          <h2 className="mt-4 text-center">
            Already have an account? <Link to={loginLink}>Login</Link>
          </h2>
        )}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px]" />
        {/* Additional content */}
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
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};