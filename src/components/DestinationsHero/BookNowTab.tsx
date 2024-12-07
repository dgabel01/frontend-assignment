import React from "react";
import Image from "next/image";
import starIcon from "@/assets/icons/booknowstar.svg";
import boatIcon from "@/assets/icons/boatIcon.png";
import peopleIcon from "@/assets/icons/peopleicon.svg";
import ageIcon from "@/assets/icons/age.svg";
import wifiIcon from "@/assets/icons/wifi.svg";
import calendarIcon from "@/assets/icons/calendar.svg";

const iconsData = [
  { icon: boatIcon, text: "Party vibe" },
  { icon: peopleIcon, text: "Up to 40 people" },
  { icon: ageIcon, text: "20 - 40 age range" },
  { icon: wifiIcon, text: "Free WiFi" },
  { icon: calendarIcon, text: "July | August" },
];

const BookNowTab = () => {
  return (
    <div className="max-w-[368px] max-h-[550.93px] shadow-custom-1 bg-white rounded-md">
      {/* Naslov i ocjena */}
      <div className="w-[288px] h-[68px] mt-[32px] mb-[40px] mx-[40px] flex flex-col">
        <p className="w-72 text-[#062949] text-2xl font-semibold font-['Poppins'] leading-loose">
          Dubrovnik party route
        </p>
        <div className="flex gap-[4px] items-center">
          <Image src={starIcon} alt="star-icon" />
          <p className="text-[#656565] text-lg font-semibold font-['Open Sans'] leading-7">
            4.9
          </p>
          <p className="w-[228px] text-[#979797] text-[15px] font-normal font-['Poppins'] leading-normal">
            rating of 461 reviews
          </p>
        </div>
      </div>

      {/* Ikone */}
      <div className="w-[288px] mx-[40px] space-y-[20px]">
        {iconsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center w-full h-[32px] gap-[16px]"
          >
            <Image src={item.icon} alt={`${item.text} icon`} />
            <p className="text-[#062949] text-[15px] font-medium font-['Poppins']">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Botun i cijena*/}
      <div className="mt-[40px] mx-[40px]">
        <button className="w-72 h-[60px] bg-[#062949] rounded-lg shadow text-white text-[15px] uppercase font-bold font-['Poppins'] tracking-wider">
          Book Now
        </button>
        <p className="w-[220px] mx-auto text-[#656565] text-[13px] font-normal font-['Poppins'] leading-tight mt-[20px] text-center">
          Prices from €1136 per person
        </p>
      </div>
    </div>
  );
};

export default BookNowTab;
