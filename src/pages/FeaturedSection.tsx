// src/pages/FeaturedSection.tsx

import { BackgroundGradient } from '@/components/ui/background-gradient';
import { Button } from '@/components/ui/moving-border';
import { useGetSuppliesQuery } from '@/redux/api/SuppliesApi';
import { Link } from 'react-router-dom';
import Shimmer from '@/components/ui/Shimmer'; // Adjust the import path as needed
import ImageWithShimmer from '@/components/ui/ImageWithShimmer'; // Adjust the import path as needed

const FeaturedSection = () => {
  const { data: supplies, error, isLoading } = useGetSuppliesQuery();

  if (isLoading) return <Shimmer />;
  if (error) return <div>Error occurred: {error.toString()}</div>;

  const featuredSupplies = supplies?.filter(supply => supply.isFeatured).slice(0, 6) || [];

  return (
    <div>
      <div className="py-12 bg-gray-900">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED SUPPLIES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Essential Supplies for Your Needs</p>
        </div>
        <div className="mt-10 mx-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredSupplies.map((post) => (
              <div key={post._id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <ImageWithShimmer src={post.image || ''} alt={post.title || 'No title'} className="w-full h-48 object-cover" />
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{post.title}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{post.category} - {post.amount}</p>
                    <button className=" mt-2 border text-sm font-normal relative border-neutral-300 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                      View Details
                      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                    </button>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Button borderRadius="1.7rem" className="bg-black px-2 py-2 text-sm">
            <Link to="/all-supplies">View All Supplies</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;