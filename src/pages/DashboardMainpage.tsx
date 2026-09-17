import BarChart from "@/components/ui/BarChar";
import DashboardCard, { DashboardCardContent } from "@/components/ui/DashboardCard";
import PageTitle from "@/components/ui/DashboardTilte";
import { useGetSuppliesQuery } from "@/redux/api/SuppliesApi";
import { Package, Star, FolderOpen, Globe } from "lucide-react";

const DashboardMainPage = () => {
  const { data: supplies = [] } = useGetSuppliesQuery();

  const totalSupplies = supplies.length;
  const featuredCount = supplies.filter((s) => s.isFeatured).length;
  const categories = new Set(supplies.map((s) => s.category)).size;

  const stats = [
    { label: "Total Supplies", amount: String(totalSupplies), discription: "All posted supplies", icon: Package },
    { label: "Featured Items", amount: String(featuredCount), discription: "Currently featured", icon: Star },
    { label: "Categories", amount: String(categories), discription: "Unique categories", icon: FolderOpen },
    { label: "Public Listings", amount: String(totalSupplies), discription: "Visible to visitors", icon: Globe },
  ];

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((card, index) => (
          <DashboardCard
            key={index}
            label={card.label}
            icon={card.icon}
            amount={card.amount}
            discription={card.discription}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <DashboardCardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </DashboardCardContent>
        <DashboardCardContent>
          <p className="p-4 font-semibold">Latest Supplies</p>
          <div className="space-y-3">
            {supplies.slice(0, 5).map((s) => (
              <div key={s._id} className="flex justify-between text-sm">
                <span className="truncate">{s.title}</span>
                <span className="text-gray-400">{s.category}</span>
              </div>
            ))}
            {supplies.length === 0 && (
              <div className="text-center text-gray-400">No supplies yet.</div>
            )}
          </div>
        </DashboardCardContent>
      </section>
    </div>
  );
};

export default DashboardMainPage;