import React from "react";
import Image from "next/image";
import trustpilotIcon from "@/assets/icons/trustpilot-1 1.png";
import facebookIcon from "@/assets/icons/facebook-3-2 1.png";
import googleIcon from "@/assets/icons/Google__G__logo 1.png";
import sailPhoto from "@/assets/images/Ultra 2 drone-1.png";
import partyPhoto from "@/assets/images/IMG_0222.png";
import explorePhoto from "@/assets/images/SWC 2018 Week 32-174.png";
import relaxPhoto from "@/assets/images/Copy of SWC 2019 Week 26-60.png";

const Experience = () => {
  const reviewIcons = [trustpilotIcon, facebookIcon, googleIcon];
  const cardPhotos = [sailPhoto, partyPhoto, explorePhoto, relaxPhoto];

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-16 bg-[#06283D]">
      {/* Blur  */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/5 to-transparent blur-md"></div>

      <div className="h-[42px] flex sm:flex-col lg:flex-row justify-around items-center w-full max-w-6xl gap-8 mt-12">
        {reviewIcons.map((icon, index) => (
          <div className="relative flex items-center gap-4" key={index}>
            <Image src={icon} alt={`Review Icon ${index + 1}`} width={42} height={42} />
            <div className="flex flex-col">
              <div className="text-white text-xl font-bold font-['Inter'] leading-[24.93px]">
                4.8/5
              </div>
              <div className="text-white text-sm font-normal font-['Inter'] leading-[16.80px]">
                Based on 325 reviews
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-6xl mt-48">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="px-4 py-2.5 bg-[#103b62] rounded-[10px]">
            <div className="text-white text-sm font-normal font-['Poppins'] uppercase">
              Welcome
            </div>
          </div>
          <h2 className="text-white text-[36px] sm:text-[46px] font-semibold font-['Poppins'] leading-[44px] sm:leading-[55.20px]">
            What is Charterag Experience
          </h2>
          <p className="w-full sm:w-[596px] text-white text-base sm:text-lg font-normal font-['DM Sans'] leading-snug">
            Join us for a week of sailing, unique adventures, and exclusive parties in stunning
            locations. Explore new places daily. Dive into local culture. Dance the nights away.
            Leave with new friends and lifelong memories.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-24">
        {[
          { title: "Sail", img: sailPhoto },
          { title: "Party", img: partyPhoto },
          { title: "Explore", img: explorePhoto },
          { title: "Relax", img: relaxPhoto },
        ].map((card, index) => (
          <div
            className="relative w-[270px] h-[370px] bg-[#909090] rounded-[10.44px] overflow-hidden"
            key={index}
          >
            <Image
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
            <div className="absolute top-4 left-4 text-white text-[26px] font-medium font-['Poppins'] leading-loose">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
