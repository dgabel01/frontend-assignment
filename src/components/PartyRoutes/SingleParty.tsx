import React from "react";
import Image, { StaticImageData } from "next/image";

interface SinglePartyProps {
  title: string;
  price: string;
  img: StaticImageData;
  party: number;
  adventure: number;
}

const SingleParty = ({ title, price, img, party, adventure }: SinglePartyProps) => {
  return (
    <div className="w-full max-w-[1103px] h-[404px] sm:h-[450px] relative rounded-[15px] overflow-hidden">
      <Image
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>

      <div className="absolute bottom-8 left-6 sm:bottom-10 sm:left-10 text-white space-y-1 sm:space-y-2">
        <div className="text-sm sm:text-xl font-normal">{price}</div>
        <div className="text-lg sm:text-[28px] font-semibold">{title}</div>
      </div>

      <div className="absolute bottom-8 right-6 sm:bottom-10 sm:right-10 space-y-2">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-[80px] sm:w-[100px] text-white text-sm sm:text-base font-medium text-right">
            Party
          </div>
          <div className="relative w-[140px] sm:w-[177px] h-2 bg-white rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-[#66b7ff] rounded-full"
              style={{ width: `${party}%` }}
            ></div>
          </div>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-[80px] sm:w-[100px] text-white text-sm sm:text-base font-medium text-right">
            Adventure
          </div>
          <div className="relative w-[140px] sm:w-[177px] h-2 bg-white rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-[#66b7ff] rounded-full"
              style={{ width: `${adventure}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleParty;
