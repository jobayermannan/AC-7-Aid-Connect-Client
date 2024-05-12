import BarChart from "@/components/ui/BarChar";
import DashboardCard, { DashboardCardContent } from "@/components/ui/DashboardCard";
import { cardData, userData } from "@/components/ui/DashboardProps";
import PageTitle from "@/components/ui/DashboardTilte";
import DashboardUserDonationCard from "@/components/ui/DoantionCard";



const DashboardMainPage = () => {
  return (
	 <div className="flex flex-col gap-5 w-full">
		<PageTitle title="Dashboard" />
		  <section className='grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2  xl:grid-cols-4'>

			{cardData.map((card,index)=>
			<DashboardCard
			 key={index}
			 label={card.label}
			 icon ={card.icon}
			 amount={card.amount}
			 discription={card.discription}
			/>
			)}
		  </section>
		  <section className="grid grid-cols-1  gap-4 transition-all  lg:grid-cols-2">
        <DashboardCardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </DashboardCardContent>
        <DashboardCardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {userData.map((d, i) => (
            <DashboardUserDonationCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </DashboardCardContent>

        {/*  */}
      </section>
			  
	 </div>
  );
};

export default DashboardMainPage;