import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Full-Screen Image */}
      <Image 
        src="/gul2.jpg" 
        alt="Clothing" 
        layout="fill" 
        objectFit="cover" 
        className="z-0"
      />

      {/* Overlay with content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-left gap-6 p-10 z-10 -opacity-50">
        <div className="space-y-9  bg-opacity-75 p-10 rounded-lg">
          <p className="text-sm text-gray-700">--Clothing</p>
          <h1 className="max-w-lg xl:max-w-2xl text-4xl md:text-5xl xl:text-[50px] font-bold text-gray-700">
            {/* Make a statement without saying a word. */}
          </h1>
          <p className="max-w-md text-gray-700">
            {/* While anyone can compete with you, your outfit will always be unmatched and unique. Discover and find your perfect look with our curated collection. */}
          </p>
          {/* <div className="space-x-5">
            <Button className={buttonVariants({
              variant: "outline",
              size: "lg"
            })}>
              Explore clothes
            </Button>
            <Button
              className={buttonVariants({
                variant: "ghost",
                size: "lg",
              })}
            >
              Get started&nbsp;
              <ArrowRight size={17} />
            </Button> */}
          </div>
        </div>
      </div>
    // </div>
  );
};

export default LandingPage;

