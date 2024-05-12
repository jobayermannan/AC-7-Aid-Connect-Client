
import { Button } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";


const Banner = () => {
  return (
    <div className="grid  grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative">

		 
      <div className="z-10 w-full relative flex flex-col items-center justify-center text-center">
   
		<div className="w-full  absolute inset-0 h-screen ">
    <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.3}
          maxSize={1}
          particleDensity={15}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      
      </div>
        <h1 className="mt-20 p-1 md:mt-0 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Building Healthier Futures Together
        </h1>
        <p   className="mt-2 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto ">Empowering Communities Through Responsive Healthcare Supply Chains</p>
        <div className="mt-8">
        <Button
            borderRadius="1rem"
                className="bg-black   px-1 py-1 text-sm"
                   >
  Explore more 
</Button>

    </div>
		 
      </div>
		
       
      
     
    </div>
  );
};

export default Banner;



