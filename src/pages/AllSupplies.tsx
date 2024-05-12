import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useEffect, useState } from "react";
 // Assuming you're using Next.js

// Define a type for the supply item
type Supply = {
  id: string;
  image: string;
  title: string;
  category: string;
  amount: string;
  detailLink: string;
  isFeatured: boolean;
  description?: string; // Optional if you're not sure every supply will have a description
};

function AllSupplyCard() {
  const [supplies, setSupplies] = useState<Supply[]>([]);

  useEffect(() => {
    const fetchSupplies = async () => {
      try {
        const response = await fetch("https://l2-b2-frontend-path-assignment-6-server-starter-pack-mu.vercel.app/api/v1/supplies");
        const data = await response.json();
        setSupplies(data.data); // Correctly set the state with the fetched supplies array
      } catch (error) {
        console.error("Error fetching supplies:", error);
      }
    };
    fetchSupplies();
  }, []);

  return (
    <div className="min-h-screen dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-grid-black/[0.2]  py-12 pt-36">
     

     
		<h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">All posts ({supplies.length})</h1>
    
<div className="flex flex-wrap justify-center">
{supplies.map((post) => (
  <CardContainer key={post.id} className="inter-var m-4">
	 <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
		<CardItem
		  translateZ="50"
		  className="text-xl font-bold text-neutral-600 dark:text-white"
		>
		  {post.title}
		</CardItem>
		{post.description && (
		  <CardItem
			 translateZ="60"
			 className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
		  >
			 {post.description}
		  </CardItem>
		)}
		<CardItem translateZ="100" className="w-full mt-4">
		  <img
			 src={post.image}
			 height="1000"
			 width="1000"
			 className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
			 alt={post.title}
		  />
		</CardItem>
		<div className="flex justify-between items-center mt-20">
		  <CardItem
			 translateZ={20}
			 as="button"
			 className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
		  >
			 Try now →
		  </CardItem>
		  <CardItem
			 translateZ={20}
			 as="button"
			 className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
		  >
			 Donate Now
		  </CardItem>
		</div>
	 </CardBody>
  </CardContainer>
))}
</div>

    </div>
    
  );
}

export default AllSupplyCard;


