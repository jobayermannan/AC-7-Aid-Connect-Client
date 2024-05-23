
// src/components/EditSupplyForm.tsx
import React from 'react';
import { ShadButton } from "@/components/ui/ShadButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Supply {
  _id: string;
  category: string;
  title: string;
  amount: string;
  isFeatured: boolean;
}

interface EditSupplyFormProps {
  supply: Supply | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (event: React.FormEvent) => void;
  onCancel: () => void;
}

const EditSupplyForm: React.FC<EditSupplyFormProps> = ({ supply, onChange, onSubmit, onCancel }) => {
  if (!supply) return null;

  return (
    <form onSubmit={onSubmit} className="p-2">
      <div>
        <h4 className="font-medium leading-none">Edit Supply</h4>
        <p className="text-sm text-muted-foreground">
          Update the supply details below.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Label htmlFor="category" className="w-1/5">Category</Label>
          <Input
            id="category"
            name="category"
            value={supply.category}
            onChange={onChange}
            className="w-4/5 h-8"
          />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="title" className="w-1/5">Title</Label>
          <Input
            id="title"
            name="title"
            value={supply.title}
            onChange={onChange}
            className="w-4/5 h-8"
          />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="amount" className="w-1/5">Amount</Label>
          <Input
            id="amount"
            name="amount"
            value={supply.amount}
            onChange={onChange}
            className="w-4/5 h-8"
          />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="isFeatured" className="w-1/5">Is Featured</Label>
          <select
            id="isFeatured"
            name="isFeatured"
            value={supply.isFeatured ? 'true' : 'false'}
            onChange={onChange}
            className="w-4/5 h-8"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div className="flex justify-center items-center gap-2">
          <ShadButton className="bg-white" variant={"outline"} type="submit">Save Changes</ShadButton>
          <ShadButton className="bg-white" variant={"outline"} onClick={onCancel}>Cancel</ShadButton>
        </div>
      </div>
    </form>
  );
};

export default EditSupplyForm;