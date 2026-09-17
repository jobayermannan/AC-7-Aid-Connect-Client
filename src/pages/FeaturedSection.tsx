// src/pages/FeaturedSection.tsx

import { ShadButton } from "@/components/ui/base/ShadButton";
import { useGetSuppliesQuery } from "@/redux/api/SuppliesApi";
import { Link } from 'react-router-dom';
import Shimmer from '@/components/ui/Shimmer';
import ImageWithShimmer from '@/components/ui/ImageWithShimmer';

const FeaturedSection = () => {
  const { data: supplies, error, isLoading } = useGetSuppliesQuery();

  if (isLoading) return <Shimmer />;
  if (error) return <div>Error occurred: {error.toString()}</div>;

  const featuredSupplies = supplies?.filter(supply => supply.isFeatured).slice(0, 6) || [];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-surface/30 to-black -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-health-accent mb-3">
            Featured Supplies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-foreground tracking-tight">
            Essential Supplies for Your Needs
          </h2>
        </div>

        {featuredSupplies.length === 0 ? (
          <div className="text-center text-gray-400">No featured supplies yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSupplies.map((post) => (
              <div key={post._id} className="glass rounded-2xl p-1 transition-all duration-300 hover:shadow-lg hover:shadow-health-accent/5 group">
                <div className="flex flex-col h-full rounded-xl overflow-hidden bg-black/20">
                  <div className="relative overflow-hidden">
                    <ImageWithShimmer 
                      src={post.image || ''} 
                      alt={post.title || 'No title'} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-surface-foreground mb-1 line-clamp-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-surface-foreground/70 mb-4 flex-grow">
                      {post.category} — {post.amount}
                    </p>
                    
                    <ShadButton 
                      variant="outline" 
                      className="w-full border-glass-border text-surface-foreground hover:bg-surface/10 hover:text-health-accent"
                    >
                      View Details
                    </ShadButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <ShadButton 
            size="lg"
            className="bg-health-accent text-health-accent-foreground hover:bg-health-accent/90 shadow-lg shadow-health-accent/20"
          >
            <Link to="/all-supplies">View All Supplies</Link>
          </ShadButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;