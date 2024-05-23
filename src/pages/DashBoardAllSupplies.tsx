// src/components/DashBoardAllSupplies.tsx
import React, { useState } from 'react';
import { ShadButton } from "@/components/ui/ShadButton";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table";
import EditSupplyForm from '@/components/ui/EditSupplyForm';
import { useDeleteSupplyMutation, useGetSuppliesQuery, useUpdateSupplyMutation } from '@/redux/api/SuppliesApi';

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
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleEdit = (supply: Supply) => {
    setEditSupply(supply);
    setVisiblePopover(supply._id);
  };

  const handleDelete = async (_id: string) => {
    console.log(`Attempting to delete supply with id: ${_id}`); // Log the id to check if it's correct
    try {
      await deleteSupply(_id).unwrap();
      refetch();
    } catch (error) {
      console.error('Error deleting supply:', error);
    }
  };

  const handleEditSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (editSupply) {
      try {
        await updateSupply(editSupply).unwrap();
        setEditSupply(null);
        setVisiblePopover(null);
        refetch();
        setSuccessMessage('Supply updated successfully');
        setTimeout(() => setSuccessMessage(''), 3000);
      } catch (error) {
        console.error('Error updating supply:', error);
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
                <Popover open={visiblePopover === supply._id} onOpenChange={() => handleEdit(supply)}>
                  <PopoverTrigger asChild>
                    <ShadButton variant="outline" onClick={() => handleEdit(supply)}>Edit</ShadButton>
                  </PopoverTrigger>
                  <PopoverContent className="w-100 bg-slate-500">
                    <EditSupplyForm supply={editSupply} onChange={handleChange} onSubmit={handleEditSubmit} onCancel={() => setVisiblePopover(null)} />
                  </PopoverContent>
                </Popover>
                <ShadButton variant="outline" onClick={() => handleDelete(supply._id)}>Delete</ShadButton>
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
      {successMessage && <div className="text-green-500">{successMessage}</div>}
    </div>
  );
}