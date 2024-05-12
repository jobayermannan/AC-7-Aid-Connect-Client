import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { CardProps } from "./DashboardCard";
import { UserProps } from "./DoantionCard";

export const cardData: CardProps[] = [
	{
	  label: "Total Revenue",
	  amount: "$45,231.89",
	  discription: "+20.1% from last month",
	  icon: DollarSign
	},
	{
	  label: "Subscriptions",
	  amount: "+2350",
	  discription: "+180.1% from last month",
	  icon: Users
	},
	{
	  label: "Sales",
	  amount: "+12,234",
	  discription: "+19% from last month",
	  icon: CreditCard
	},
	{
	  label: "Active Now",
	  amount: "+573",
	  discription: "+201 since last hour",
	  icon: Activity
	}
 ];


 export const userData: UserProps[] = [
	{
	  name: "Olivia Martin",
	  email: "olivia.martin@email.com",
	  saleAmount: "+$1,999.00"
	},
	{
	  name: "Jackson Lee",
	  email: "isabella.nguyen@email.com",
	  saleAmount: "+$1,999.00"
	},
	{
	  name: "Isabella Nguyen",
	  email: "isabella.nguyen@email.com",
	  saleAmount: "+$39.00"
	},
	{
	  name: "William Kim",
	  email: "will@email.com",
	  saleAmount: "+$299.00"
	},
	{
	  name: "Sofia Davis",
	  email: "sofia.davis@email.com",
	  saleAmount: "+$39.00"
	}
 ];