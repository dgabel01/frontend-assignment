import React from "react";
import Image from "next/image";
import Link from "next/link";
import checkIcon from "@/assets/icons/check-badge.png";
import outlineCheckIcon from "@/assets/icons/check-badge-outline.png";
import textureBacgkround from "@/assets/images/Tekstura.png";
import leftImage from "@/assets/images/leftimage.png";
import centerImage from "@/assets/images/centerimage.png";
import rightImage from "@/assets/images/rightimage.png";
import instaIcon from "@/assets/icons/instagram.png";
import PaymentCard from "./PaymentCard";

const Payments = () => {
  const features = [
    "experience",
    "lorem ipsum dolor",
    "dolor sit et",
    "lorem ipsum dolor",
    "et santi dolor sum",
    "ipsum lorem dolor sit et",
  ];

  const paymentCardsData = [
    {
      number: 1,
      text: "pay when booking",
      percentage: "10%",
      progress: "w-[27px]",
    },
    {
      number: 2,
      text: "pay 30 days after booking",
      percentage: "40%",
      progress: "w-[98px]",
    },
    {
      number: 3,
      text: "pay 60 days before trip",
      percentage: "50%",
      progress: "w-full",
    },
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
        <div className="flex flex-col lg:flex-row gap-8 justify-between mb-[239.29px]">
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

      {/* Flexible payment section */}
      <div
        className="h-auto bg-[#062949] bg-cover bg-center flex justify-center items-center px-4 py-16"
        style={{
          backgroundImage: `url(${textureBacgkround.src})`,
        }}
      >
        <div className="max-w-[944px] w-full flex flex-col justify-center items-center gap-8 md:gap-[115px]">
          <div className="w-full text-center md:w-[460px]">
            <div className="text-white text-[24px] md:text-[46px] font-semibold font-['Poppins'] leading-tight md:leading-10">
              Flexible payment
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {paymentCardsData.map((card, index) => (
              <PaymentCard
                key={index}
                number={card.number}
                text={card.text}
                percentage={card.percentage}
                progress={card.progress}
                bgColor="bg-white"
              />
            ))}
          </div>
          <div className="text-center text-[#e2e8f0] text-sm mt-6 md:whitespace-normal lg:whitespace-nowrap overflow-hidden text-ellipsis">
            NOTE: Only applies to bookings made a minimum of 95 days before the
            trip. For bookings made within 95 days before the trip, see our{" "}
            <Link href="" className="text-[#1dc072] underline">
              Terms and conditions
            </Link>.
          </div>
        </div>
      </div>

      {/* Rotated images */}
      <div className="w-[747.10px] h-[1000px] relative mt-[129px] mx-auto">
        <Image
          alt="left-rotated-image"
          className="w-[233.20px] h-[349.96px] absolute top-[50px] left-[30px] origin-top-left rotate-[-10deg] rounded-[10px] shadow z-0"
          src={leftImage}
        />
        <Image
          alt="right-rotated-image"
          className="w-[262.92px] h-[273.43px] absolute top-[100px] left-[500px] origin-top-left rotate-[5deg] rounded-[10px] shadow z-0"
          src={rightImage}
        />
        <Image
          alt="center-rotated-image"
          className="w-[412.19px] h-[274.96px] absolute top-[200px] left-[170px] rounded-[10px] shadow z-10"
          src={centerImage}
        />
        <div className="w-[464px] h-auto absolute top-[550px] left-[50%] transform -translate-x-1/2 flex flex-col items-center gap-6 text-center z-20">
          <div className="text-[#062949] text-[32px] font-semibold leading-10">
            Check Charterag
            <br />
            off your bucket list
          </div>
          <div className="text-[#062949] text-base font-normal leading-tight">
            Lorem ipsum dolor sit amet consectetur.
            <br />
            Tellus lectus non purus odio amet
          </div>
          <div className="flex gap-4">
            <div className="bg-[#ffd50a] rounded-[50px] shadow px-6 py-3">
              <div className="text-black text-base font-medium uppercase tracking-wider">
                explore
              </div>
            </div>
            <div className="bg-white rounded-[50px] shadow px-6 py-3 flex items-center gap-2">
              <div className="text-[#062949] text-base font-medium uppercase tracking-wider">
                follow us
              </div>
              <Image
                src={instaIcon}
                alt="Instagram Icon"
                width={19}
                height={19}
                className="w-[19px] h-[19px]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payments;
