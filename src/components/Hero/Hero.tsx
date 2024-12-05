"use client";
import HeroVideo from "../HeroVideo/HeroVideo";
import Navbar from "../Navbar";
import Image from "next/image"; // Import Next.js Image component
import starIcon from "@/assets/icons/Soft Star.png"; // Import the star icon

const Hero = () => {
  return (
    <div
      className="relative w-full overflow-hidden bg-cover bg-no-repeat h-[790px]"
      style={{
      }}
    >
      {/* Background Video */}
      <HeroVideo />

      {/* Overlay and Content */}
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.40)] bg-fixed">
        {/* Navbar */}

        {/* Centered Text Content */}
        <div className="flex h-full items-center justify-center px-4 mt-8">
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <div className="relative w-full max-w-[715px] mb-6">
            <div className="mt-2 text-white text-lg sm:text-xl font-normal font-['Poppins'] leading-normal">
                Sail your way with
              </div>
              <div className="text-white text-[50px] sm:text-[70px] md:text-[90px] lg:text-[116px] font-black font-['Poppins'] leading-tight">
                CHARTERAG
              </div>
              
            </div>

            {/* Tags with Icons */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-white text-base sm:text-lg font-normal font-['Poppins']">
                adventure
                <Image src={starIcon} alt="star" width={20} height={20} className="ml-2" />
              </div>
              <div className="flex items-center text-white text-base sm:text-lg font-normal font-['Poppins']">
                relax
                <Image src={starIcon} alt="star" width={20} height={20} className="ml-2" />
              </div>
              <div className="flex items-center text-white text-base sm:text-lg font-normal font-['Poppins']">
                explore
                <Image src={starIcon} alt="star" width={20} height={20} className="ml-2" />
              </div>
              <div className="flex items-center text-white text-base sm:text-lg font-normal font-['Poppins']">
                fun
                <Image src={starIcon} alt="star" width={20} height={20} className="ml-2" />
              </div>
              <div className="text-white text-base sm:text-lg font-normal font-['Poppins']">
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
