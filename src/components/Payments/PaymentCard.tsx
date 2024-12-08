"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import dollarIcon from "@/assets/icons/dollarIcon.png";


interface PaymentCardProps {
  number: number;
  text: string;
  percentage: string;
  progress: string;
  bgColor: string;
}

const PaymentCard = ({
  number,
  text,
  percentage,
  progress,
  bgColor,
}: PaymentCardProps) => {

  useEffect(() => {
    // Initialize AOS only on the client-side
    Aos.init({
      duration: 800, 
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
   <div
      className={`flex flex-col items-start p-4 ${bgColor} rounded-md shadow-md w-full max-w-[300px] mx-auto`}
      data-aos="flip-left"
      data-aos-easing="ease-in-out"
      data-aos-offset="200"
      data-aos-duration="1000"
    >
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#E8F9F1]">
        <Image
          src={dollarIcon}
          alt="Dollar Icon"
          className="absolute inset-0 w-6 h-6 m-4"
        />
        <div className="relative z-20 text-[#1dc072] text-xs font-bold font-['Poppins']">
          {number}
        </div>
      </div>
      <div className="mt-4 text-[#4a4e4c] text-2xl font-semibold font-['Poppins'] leading-loose">
        {percentage}
      </div>
      <div className="mt-2 text-[#656565] text-[15px] font-normal font-['Poppins'] leading-normal text-center">
        {text}
      </div>
      <div className="w-full h-2 bg-[#f5f5f6] rounded-[10px] mt-4 relative">
        <div
          className={`absolute top-0 left-0 h-2 bg-[#1dc072] rounded-[10px] ${progress}`}
        ></div>
      </div>
    </div>
  );
};

export default PaymentCard;
