import { Button } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";


const Banner = () => {
  return (
    <div className="grid grid-cols-1 h-[40rem] w-full bg-gradient-to-b from-gray-900 via-black to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-health-accent/10 blur-[120px] rounded-full -z-10" />
      
      <div className="z-10 w-full relative flex flex-col items-center justify-center text-center px-4">
        <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.3}
              maxSize={1}
              particleDensity={15}
              className="w-full h-full"
              particleColor="#2dd4bf"
            />
          </div>

          <h1 className="mt-2 p-1 md:mt-0 text-4xl md:text-6xl lg:text-7xl font-bold text-surface-foreground tracking-tight">
            Building Healthier Futures Together
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-surface-foreground/80 max-w-2xl mx-auto">
            Empowering Communities Through Responsive Healthcare Supply Chains
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              borderRadius="1rem"
              containerClassName="w-auto h-auto"
              className="bg-health-accent text-health-accent-foreground px-6 py-3 text-sm font-medium shadow-lg shadow-health-accent/25 hover:shadow-health-accent/40 transition-all"
            >
              Explore more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
