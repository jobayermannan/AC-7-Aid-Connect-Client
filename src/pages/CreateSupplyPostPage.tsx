import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Assuming you have a Select component
import { cn } from "@/utils/cn";
import { useCreateSupplyMutation } from "@/redux/api/SuppliesApi";


// Define the form data types
interface IFormInput {
  image: FileList;
  category: string;
  title: string;
  amount: number;
  featuring: boolean;
}

// Define the validation schema
const schema = yup.object().shape({
  image: yup
    .mixed()
    .test("required", "Image is required", (value) => {
      return value && (value as FileList).length > 0;
    }),
  category: yup.string().required("Category is required"),
  title: yup.string().required("Title is required"),
  amount: yup.number().required("Amount is required").positive().integer(),
  featuring: yup.boolean().required("featuring is required"),
});

export default function CreateSupplyPostPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [createSupply] = useCreateSupplyMutation();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema) as any, // Type assertion to bypass type mismatch
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!data.image || data.image.length === 0) {
      alert("Image is required");
      return;
    }

    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("category", data.category);
    formData.append("title", data.title);
    formData.append("amount", data.amount.toString());
    formData.append("featuring", data.featuring.toString());

    try {
      await createSupply(formData).unwrap();
      console.log('Form submitted successfully');
      setIsSubmitted(true); // Set the state to true to show the success message
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Create a New Supply Post
      </h2>
      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="image">Image</Label>
          <Input id="image" type="file" {...register("image")} />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="category">Category</Label>
          <Input id="category" placeholder="Category" type="text" {...register("category")} />
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Title" type="text" {...register("title")} />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" placeholder="Amount" type="number" {...register("amount")} />
          {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="featuring">Featuring</Label>
          <Select onValueChange={(value) => {
            const booleanValue = value === "true";
            console.log("Selected featuring value:", booleanValue);
            setValue("featuring", booleanValue);
          }}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Featuring" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="true">True</SelectItem>
                <SelectItem value="false">False</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.featuring && <p className="text-red-500">{errors.featuring.message}</p>}
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit
          <BottomGradient />
        </button>
      </form>
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <p className="text-black">Form successfully submitted!</p>
            <button onClick={() => setIsSubmitted(false)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

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