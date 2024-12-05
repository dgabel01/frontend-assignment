import React from "react";
import Image from "next/image";
import checkIcon from "@/assets/icons/check-badge.png";
import outlineCheckIcon from "@/assets/icons/check-badge-outline.png";
import textureBacgkround from "@/assets/images/Tekstura.png"

const Payments = () => {
  const features = [
    "experience",
    "lorem ipsum dolor",
    "dolor sit et",
    "lorem ipsum dolor",
    "et santi dolor sum",
    "ipsum lorem dolor sit et",
  ];

  return (
    <main className="mt-[181px]">
      <div className="relative max-w-[90%] lg:w-[928.74px] mx-auto mt-16">
        <div className="flex flex-col items-center gap-6 text-center mb-12">
          <div className="bg-[rgba(6,41,73,0.10)] px-4 py-2.5 rounded-lg">
            <span className="text-[#062949] text-sm font-medium uppercase">
              payment
            </span>
          </div>
          <h1 className="text-[#062949] text-[28px] sm:text-[36px] lg:text-[46px] font-semibold leading-tight max-w-[445px]">
            You don&apos;t have to break the bank
          </h1>
          <p className="text-[#4A4E4C] text-[14px] sm:text-[15px] leading-[24px]">
            See how lorem ipsum dolor sit
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          <div className="w-full lg:w-[434.8px] h-auto bg-[rgba(0,190,204,0.10)] shadow-md rounded-[15px] p-6">
            <h2 className="text-[#062949] text-[24px] sm:text-[28px] lg:text-[32px] leading-[37px] font-medium mb-6">
              Sailweek <br /> experience
            </h2>
            <div className="flex flex-col gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="relative w-[20.87px] h-[20.87px]">
                    <Image
                      src={checkIcon}
                      alt="Check Icon"
                      width={20.87}
                      height={20.87}
                    />
                  </div>
                  <span className="text-[14px] sm:text-[16px] leading-[19.2px] text-[#656565]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-[#062949] text-[#F5F5F6] px-3 py-2 rounded-md w-fit mt-6">
              <span className="text-[14px] sm:text-[16px] font-medium leading-[19.2px]">
                from 787€
              </span>
            </div>
          </div>
          <div className="w-full lg:w-[434.8px] h-auto bg-white shadow-md rounded-[15px] p-6">
            <h2 className="text-[#062949] text-[24px] sm:text-[28px] lg:text-[32px] leading-[37px] font-medium mb-6">
              Individual experience
            </h2>
            <div className="flex flex-col gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="relative w-[20.87px] h-[20.87px]">
                    <Image
                      src={index < 2 ? checkIcon : outlineCheckIcon}
                      alt={index < 2 ? "Check Icon" : "Outline Check Icon"}
                      width={20.87}
                      height={20.87}
                    />
                  </div>
                  <span className="text-[14px] sm:text-[16px] leading-[19.2px] text-[#656565]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*Flexible payment with vector bacgkround*/}

      <div
  className="h-[632px] bg-[#062949] bg-cover bg-center"
  style={{
    backgroundImage: `url(${textureBacgkround.src})`,
  }}
></div>




    </main>
  );
};

export default Payments;
