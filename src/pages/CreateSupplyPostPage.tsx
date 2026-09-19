import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Label } from "@/components/ui/base/label";
import { Input } from "@/components/ui/base/input";
import { Check, ChevronDown } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/utils/cn";
import { useCreateSupplyMutation } from "@/redux/api/SuppliesApi";
import { toast } from 'react-toastify';

interface IFormInput {
  image: FileList;
  category: string;
  title: string;
  amount: number;
  featuring: boolean;
}

const schema = yup.object<IFormInput>().shape({
  image: yup
    .mixed<FileList>()
    .test("required", "Image is required", (value) => {
      return value && value.length > 0;
    })
    .required("Image is required"),
  category: yup.string().required("Category is required"),
  title: yup.string().required("Title is required"),
  amount: yup.number().required("Amount is required").positive().integer(),
  featuring: yup.boolean().required("featuring is required"),
});

type FormInput = yup.InferType<typeof schema>;

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/jpg'];

export default function CreateSupplyPostPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string>('');
  const [createSupply] = useCreateSupplyMutation();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileError('');

    if (!ALLOWED_TYPES.includes(file.type)) {
      setFileError('Only JPG and PNG images are allowed.');
      event.target.value = '';
      setPreview(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileError('Image must be smaller than 5MB.');
      event.target.value = '';
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  };

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    if (!data.image || data.image.length === 0) {
      toast.error("Image is required");
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
      toast.success('Supply post created successfully.');
      setIsSubmitted(true);
    } catch (error: unknown) {
      console.error('Form submission error:', error);
      const message = (error as { data?: { message?: string } })?.data?.message || 'Failed to create supply';
      toast.error(message);
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
          <Input id="image" type="file" {...register("image")} onChange={handleFileChange} />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
          {fileError && <p className="text-red-500">{fileError}</p>}
          {preview && (
            <img src={preview} alt="Preview" className="mt-2 h-40 w-full object-cover rounded-md" />
          )}
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
          <SelectPrimitive.Root onValueChange={(value) => {
            const booleanValue = value === "true";
            setValue("featuring", booleanValue);
          }}>
            <SelectPrimitive.Trigger className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
              <SelectPrimitive.Value placeholder="Select Featuring" />
              <SelectPrimitive.Icon asChild>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
              <SelectPrimitive.Content className="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                <SelectPrimitive.Viewport className="p-1">
                  <SelectPrimitive.Group>
                    <SelectPrimitive.Item value="true" className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                        <SelectPrimitive.ItemIndicator>
                          <Check className="h-4 w-4" />
                        </SelectPrimitive.ItemIndicator>
                      </span>
                      <SelectPrimitive.ItemText>True</SelectPrimitive.ItemText>
                    </SelectPrimitive.Item>
                    <SelectPrimitive.Item value="false" className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                        <SelectPrimitive.ItemIndicator>
                          <Check className="h-4 w-4" />
                        </SelectPrimitive.ItemIndicator>
                      </span>
                      <SelectPrimitive.ItemText>False</SelectPrimitive.ItemText>
                    </SelectPrimitive.Item>
                  </SelectPrimitive.Group>
                </SelectPrimitive.Viewport>
              </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
          </SelectPrimitive.Root>
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
