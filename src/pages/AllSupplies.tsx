// src/pages/AllSupplies.tsx

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useGetSuppliesQuery } from "@/redux/api/SuppliesApi";
import Shimmer from '@/components/ui/Shimmer';
import { useState, useMemo } from 'react';

function AllSupplies() {
  const { data: supplies = [], error, isLoading } = useGetSuppliesQuery();
  const [search, setSearch] = useState('');

  const filteredSupplies = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return supplies;
    return supplies.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term) ||
        post.amount.toLowerCase().includes(term)
    );
  }, [supplies, search]);

  if (isLoading) return <Shimmer />;
  if (error) return <div>Error fetching supplies</div>;

  return (
    <div className="min-h-screen dark:bg-black bg-white dark:bg-dot-white/[0.4] bg-grid-black/[0.2] py-12 pt-36">
      <h2 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All posts ({filteredSupplies.length})
      </h2>
      <div className="max-w-xl mx-auto mb-10 px-4">
        <input
          type="text"
          placeholder="Search supplies by title, category, or amount..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm focus:border-health-accent focus:outline-none dark:border-gray-700 dark:bg-black dark:text-white"
        />
      </div>
      {filteredSupplies.length === 0 ? (
        <div className="text-center text-gray-400">No supplies match your search.</div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {filteredSupplies.map((post) => (
            <CardContainer key={post._id} className="inter-var m-4">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem className="text-xl font-bold text-neutral-600 dark:text-white">
                  {post.title}
                </CardItem>
                {post.amount && (
                  <CardItem className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    {post.amount}
                  </CardItem>
                )}
                <CardItem className="w-full mt-4">
                  <img
                    src={post.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={post.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" fill="%23ccc"><rect width="400" height="300"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999">No image</text></svg>';
                    }}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem as="button" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                    Try now →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllSupplies;