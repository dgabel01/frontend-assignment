"use client";
import HeroVideo from "../HeroVideo/HeroVideo";
import Image from "next/image"; 
import starIcon from "@/assets/icons/Soft Star.png";


 {/* glupi fix sa neg. marginon */}

const Hero = () => {
  return (
    <div
      className="relative w-full overflow-hidden bg-cover bg-no-repeat h-[793px] my-[-70px]"
      style={{
      }}
    >
      {/* Background Video */}
      <HeroVideo />

      {/* Overlay and Content */}
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed">
        {/* Navbar */}

        {/* Centered Text Content */}
        <div className="flex h-full items-center justify-center ">
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <div className="relative w-full max-w-[715px] mb-6">
            <div className="mt-2 text-white text-lg sm:text-xl font-normal  leading-normal">
                Sail your way with
              </div>
              <div className="text-white text-[50px] sm:text-[70px] md:text-[90px] lg:text-[116px] font-black  leading-tight">
                CHARTERAG
              </div>
              
            </div>

            {/* Tags with Icons */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-white text-base sm:text-lg font-normal ">
                adventure
                <Image src={starIcon} alt="star" width={20} height={20} className="ml-2" />
              </div>
              <div className="flex items-center text-white text-base sm:text-lg font-normal ">
                relax
                <Image src={starIcon} alt="star" width={20} height={20} className="ml-2" />
              </div>
              <div className="flex items-center text-white text-base sm:text-lg font-normal">
                explore
                <Image src={starIcon} alt="star" width={20} height={20} className="ml-2" />
              </div>
              <div className="flex items-center text-white text-base sm:text-lg font-normal ">
                fun
                <Image src={starIcon} alt="star" width={20} height={20} className="ml-2" />
              </div>
              <div className="text-white text-base sm:text-lg font-normal ">
                dance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
