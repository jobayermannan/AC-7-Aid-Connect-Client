import PageTitle from "@/components/ui/DashboardTilte";
import { DataTable } from "@/components/ui/DataTable";


import { ColumnDef } from "@tanstack/react-table"




const AllSupplyPost = () => {
  return (
	<div className="">
		<PageTitle title="All Supply Posts"></PageTitle>
	<DataTable columns={columns} data={payments}></DataTable>
		  
 </div>
  );
};

export default  AllSupplyPost;



export type Payment = {
  name: string
  email: string
  lastOrder: string
  method:string
}


export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "method",
    header: "Methods",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  // Adding a new column for actions/buttons
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div>
        {/* Example button for editing */}
        <button onClick={() => handleEdit(row.original)}>Edit</button>
        {/* Example button for deleting */}
        <button onClick={() => handleDelete(row.original)}>Delete</button>
      </div>
    ),
  },
];

// Example handler functions for the buttons
const handleEdit = (payment: Payment) => {
  console.log("Editing", payment);
  // Implement your edit logic here
};

const handleDelete = (payment: Payment) => {
  console.log("Deleting", payment);
  // Implement your delete logic here
};


 export const payments: Payment[] = [
	{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "lastOrder": "2023-09-15",
    "method": "Online"
  },
	{
    "name": "Alex Johnson",
    "email": "alex.johnson@example.com",
    "lastOrder": "2023-08-20",
    "method": "Online"
  },
  {
    "name": "Maria Garcia",
    "email": "maria.garcia@example.com",
    "lastOrder": "2023-11-15",
    "method": "Phone"
  },
  {
    "name": "Chris Lee",
    "email": "chris.lee@example.com",
    "lastOrder": "2023-09-30",
    "method": "Email"
  }
	
 ]
 
//  ----------------------------------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { ShadButton } from '@/components/ui/ShadButton';
// import EditSupplyDialog from '@/components/ui/EditSupplyDialog';

// interface Supply {
//   id: string;
//   category: string;
//   title: string;
//   amount: string;
//   isFeatured: boolean;
// }

// export default function DashBoardAllSupplies() {
//   const [supplies, setSupplies] = useState<Supply[]>([]);
//   const [editSupply, setEditSupply] = useState<Supply | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string>('');

//   useEffect(() => {
//     fetchSupplies();
//   }, []);

//   const fetchSupplies = async () => {
//     try {
//       const response = await fetch('https://aid-connect-server-rj8hofw7t-jobayermannans-projects.vercel.app/api/v1/supplies');
//       const data = await response.json();
//       const supplies = data.data.map((supply: any) => ({
//         ...supply,
//         id: supply._id,
//       }));
//       setSupplies(supplies);
//     } catch (error) {
//       console.error('Error fetching supplies:', error);
//     }
//   };

//   const handleEdit = (supply: Supply) => {
//     setEditSupply(supply);
//   };

//   const handleDelete = async (id: string) => {
//     console.log(`Attempting to delete supply with id: ${id}`); // Log the id to check if it's correct
//     try {
//       await fetch(`https://aid-connect-server-rj8hofw7t-jobayermannans-projects.vercel.app/api/v1/delete-supplies/${id}`, {
//         method: 'DELETE',
//       });
//       fetchSupplies();
//     } catch (error) {
//       console.error('Error deleting supply:', error);
//     }
//   };

//   const handleEditSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     if (editSupply) {
//       try {
//         await fetch(`https://aid-connect-server-rj8hofw7t-jobayermannans-projects.vercel.app/api/v1/update-supplies/${editSupply.id}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(editSupply),
//         });
//         setEditSupply(null);
//         fetchSupplies();
//         setSuccessMessage('Post updated successfully');
//         setTimeout(() => setSuccessMessage(''), 3000); // Clear the message after 3 seconds
//       } catch (error) {
//         console.error('Error updating supply:', error);
//       }
//     }
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     if (editSupply) {
//       setEditSupply({ ...editSupply, [name]: name === 'isFeatured' ? value === 'true' : value });
//     }
//   };

//   return (
//     <div>
//       <Table>
//         <TableCaption>A list of your supplies.</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Category</TableHead>
//             <TableHead>Title</TableHead>
//             <TableHead>Amount</TableHead>
//             <TableHead>Is Featured</TableHead>
//             <TableHead>Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {supplies.map((supply) => (
//             <TableRow key={supply.id}>
//               <TableCell>{supply.category}</TableCell>
//               <TableCell>{supply.title}</TableCell>
//               <TableCell>{supply.amount}</TableCell>
//               <TableCell>{supply.isFeatured ? 'Yes' : 'No'}</TableCell>
//               <TableCell>
//                 <EditSupplyDialog
//                   supply={editSupply}
//                   onChange={handleChange}
//                   onSubmit={handleEditSubmit}
//                   onCancel={() => setEditSupply(null)}
//                   successMessage={successMessage}
//                 />
//                 <ShadButton variant="outline" onClick={() => handleDelete(supply.id)}>Delete</ShadButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TableCell colSpan={4}>Total</TableCell>
//             <TableCell className="text-right">{supplies.length}</TableCell>
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </div>
//   );
// }




// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


import React from 'react';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { ShadButton } from '@/components/ui/ShadButton';

// interface Supply {
//   id: string;
//   category: string;
//   title: string;
//   amount: string;
//   isFeatured: boolean;
// }

// interface EditSupplyDialogProps {
//   supply: Supply | null;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   onSubmit: (event: React.FormEvent) => void;
//   onCancel: () => void;
//   successMessage: string;
// }

// const EditSupplyDialog: React.FC<EditSupplyDialogProps> = ({ supply, onChange, onSubmit, onCancel, successMessage }) => {
//   const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, checked } = event.target;
//     onChange({ ...event, target: { ...event.target, name, value: checked.toString() } });
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <ShadButton variant="outline" className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700">Edit</ShadButton>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white">
//         <DialogHeader className="border-b border-gray-700">
//           <DialogTitle className="text-white">Edit Supply</DialogTitle>
//           <DialogDescription className="text-gray-400">
//             Make changes to the supply here. Click save when you're done.
//           </DialogDescription>
//         </DialogHeader>
//         <form onSubmit={onSubmit}>
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="category" className="text-right text-gray-400">
//                 Category
//               </Label>
//               <Input id="category" name="category" value={supply?.category || ''} onChange={onChange} className="col-span-3 bg-gray-800 text-white border-gray-700" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="title" className="text-right text-gray-400">
//                 Title
//               </Label>
//               <Input id="title" name="title" value={supply?.title || ''} onChange={onChange} className="col-span-3 bg-gray-800 text-white border-gray-700" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="amount" className="text-right text-gray-400">
//                 Amount
//               </Label>
//               <Input id="amount" name="amount" value={supply?.amount || ''} onChange={onChange} className="col-span-3 bg-gray-800 text-white border-gray-700" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="isFeatured" className="text-right text-gray-400">
//                 Is Featured
//               </Label>
//               <input id="isFeatured" name="isFeatured" type="checkbox" checked={supply?.isFeatured || false} onChange={handleCheckboxChange} className="col-span-3 bg-gray-800 text-white border-gray-700" />
//             </div>
//           </div>
//           <DialogFooter className="border-t border-gray-700">
//             <ShadButton type="submit" className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700">Save changes</ShadButton>
//             <ShadButton type="button" onClick={onCancel} className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700">Cancel</ShadButton>
//           </DialogFooter>
//           {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EditSupplyDialog;