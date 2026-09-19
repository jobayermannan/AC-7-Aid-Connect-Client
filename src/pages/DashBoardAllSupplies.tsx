// src/components/DashBoardAllSupplies.tsx
import React, { useState } from 'react';
import { ShadButton } from "@/components/ui/base/ShadButton";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/base/table";
import EditSupplyForm from '@/components/ui/EditSupplyForm';
import { useDeleteSupplyMutation, useGetSuppliesQuery, useUpdateSupplyMutation } from '@/redux/api/SuppliesApi';
import { toast } from 'react-toastify';

interface Supply {
  _id: string;
  category: string;
  title: string;
  amount: string;
  isFeatured: boolean;
}

export default function DashBoardAllSupplies() {
  const { data: supplies = [], refetch } = useGetSuppliesQuery();
  const [updateSupply] = useUpdateSupplyMutation();
  const [deleteSupply] = useDeleteSupplyMutation();
  const [editSupply, setEditSupply] = useState<Supply | null>(null);
  const [visiblePopover, setVisiblePopover] = useState<string | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const handleEdit = (supply: Supply) => {
    setEditSupply(supply);
    setVisiblePopover(supply._id);
  };

  const confirmDelete = async () => {
    if (!deleteTargetId) return;
    try {
      await deleteSupply(deleteTargetId).unwrap();
      toast.success('Supply deleted successfully');
      refetch();
    } catch (error: unknown) {
      console.error('Error deleting supply:', error);
      const message = (error as { data?: { message?: string } })?.data?.message || 'Failed to delete supply';
      toast.error(message);
    } finally {
      setDeleteTargetId(null);
    }
  };

  const handleEditSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (editSupply) {
      try {
        await updateSupply(editSupply).unwrap();
        toast.success('Supply updated successfully');
        setEditSupply(null);
        setVisiblePopover(null);
        refetch();
      } catch (error: unknown) {
        console.error('Error updating supply:', error);
        const message = (error as { data?: { message?: string } })?.data?.message || 'Failed to update supply';
        toast.error(message);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (editSupply) {
      setEditSupply({ ...editSupply, [name]: name === 'isFeatured' ? value === 'true' : value });
    }
  };

  return (
    <div>
      {supplies.length === 0 ? (
        <div className="text-center text-gray-300 dark:text-gray-400 py-8">No supplies yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableCaption>A list of your supplies.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Is Featured</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {supplies.map((supply) => (
                <TableRow key={supply._id}>
                  <TableCell>{supply.category}</TableCell>
                  <TableCell>{supply.title}</TableCell>
                  <TableCell>{supply.amount}</TableCell>
                  <TableCell>{supply.isFeatured ? 'Yes' : 'No'}</TableCell>
                  <TableCell>
                    <PopoverPrimitive.Root open={visiblePopover === supply._id} onOpenChange={() => handleEdit(supply)}>
                      <PopoverPrimitive.Trigger asChild>
                        <ShadButton variant="outline" onClick={() => handleEdit(supply)}>Edit</ShadButton>
                      </PopoverPrimitive.Trigger>
                      <PopoverPrimitive.Portal>
                        <PopoverPrimitive.Content className="z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                          <EditSupplyForm supply={editSupply} onChange={handleChange} onSubmit={handleEditSubmit} onCancel={() => setVisiblePopover(null)} />
                        </PopoverPrimitive.Content>
                      </PopoverPrimitive.Portal>
                    </PopoverPrimitive.Root>
                    <ShadButton variant="outline" onClick={() => setDeleteTargetId(supply._id)}>Delete</ShadButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell className="text-right">{supplies.length}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      )}

      <DialogPrimitive.Root open={!!deleteTargetId} onOpenChange={(open) => { if (!open) setDeleteTargetId(null); }}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
            <div className="flex flex-col space-y-1.5 text-center sm:text-left">
              <DialogPrimitive.Title className="text-lg font-semibold leading-none tracking-tight">Delete supply</DialogPrimitive.Title>
            </div>
            <p className="text-sm text-gray-600">Are you sure you want to delete this supply? This action cannot be undone.</p>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
              <ShadButton variant="outline" onClick={() => setDeleteTargetId(null)}>Cancel</ShadButton>
              <ShadButton variant="destructive" onClick={confirmDelete}>Delete</ShadButton>
            </div>
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </div>
  );
}
