import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import blueNavbarLogo from "@/assets/icons/CharteragBlueLogo.svg";
import heroImage from "@/assets/images/destinationshero.png";
import backgroundVector from "@/assets/images/destinationHeroBackground.png";
import BookNowTab from "./BookNowTab";

const DestinationsHero = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${backgroundVector.src})`,
      }}
      className="overflow-hidden"
    >
      <Navbar logo={blueNavbarLogo} linkColor="#062949" />

      <div className="relative mt-[80px] sm:mt-[127.83px]">
        <Image
          src={heroImage}
          alt="hero-image"
          className="object-cover w-full max-h-[510px]"
        />

        <div
          className="absolute text-white px-4 sm:px-8"
          style={{ left: "5%", bottom: "56px" }}
        >
          <div className="text-[12px] sm:text-[15px] font-bold font-['Poppins'] uppercase tracking-wide">
            party route
          </div>
          <div className="text-[24px] sm:text-[36px] lg:text-[40px] font-bold font-['Poppins'] leading-[30px] sm:leading-[50px] lg:leading-[60px]">
            The best stories are yet to be told
          </div>
        </div>

        {/* Book Now Tab */}
        <div
          className="hidden lg:block absolute top-[85%] transform -translate-y-56 translate-x-[21%] w-[80%] sm:w-[60%] lg:w-[40%] h-auto p-4 sm:p-6 lg:p-8"
          style={{ right: "1%" }}
        >
          <BookNowTab />
        </div>
      </div>

      {/* Book Now Tab for medium and small screens */}
      <div className="lg:hidden flex justify-center mt-6 px-4 sm:px-8">
        <BookNowTab />
      </div>

      <div className="flex flex-col items-start gap-6 px-4 sm:px-8 lg:px-16 mt-[40px] sm:mt-[60px] lg:mt-[83px]">
        <div className="max-w-[580px] text-[#062949] text-sm sm:text-base lg:text-lg font-normal font-['Poppins'] leading-6 sm:leading-7">
          From mountains and canyons to fjord-like bays, nostalgic old towns to
          the most stunning beaches. Get to know Croatia&apos;s twin sister -
          Montenegro.
        </div>
        <div className="max-w-[580px] text-[#062949] text-sm sm:text-base lg:text-lg font-normal font-['Poppins'] leading-6 sm:leading-7">
          Walk the medieval streets of Kotor, dine on the most amazing seafood
          in the Fisherman&apos;s village. Feel like a millionaire in Porto
          Montenegro, the most luxurious marina in this part of the world. Visit
          nostalgic old towns Perast, Risan, and Herceg Novi. Hike mountains in
          Kotor. Get wild in Budva and Tivat. Relax in the freshly opened, chic
          Lazure marina.
        </div>
      </div>
    </main>
  );
};

export default DestinationsHero;
