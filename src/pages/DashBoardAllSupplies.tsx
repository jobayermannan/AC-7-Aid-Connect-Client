import PageTitle from "@/components/ui/DashboardTilte";
import { DataTable } from "@/components/ui/DataTable";


import { ColumnDef } from "@tanstack/react-table"



const DashBoardAllSupplies = () => {
  return (
	<div className="">
		<PageTitle title="All Supply Posts"></PageTitle>
	<DataTable columns={columns} data={payments}></DataTable>
		  
 </div>
  );
};

export default DashBoardAllSupplies;



export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]


 export const payments: Payment[] = [
	{
	  id: "728ed52f",
	  amount: 100,
	  status: "pending",
	  email: "m@example.com",
	},
	{
	  id: "489e1d42",
	  amount: 125,
	  status: "processing",
	  email: "example@gmail.com",
	},
	
 ]
 