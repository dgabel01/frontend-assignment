import Image from "next/image";
import PaymentCard from "../Payments/PaymentCard";
import stepThreeImage from "@/assets/images/Guests png 1.png";
import rightArrowIcon from "@/assets/icons/rightarrow.svg";

const StepThree = () => {
  const paymentCardsData = [
    {
      number: 1,
      percentage: "10%",
      text: "pay when booking",
      progress: "w-[29px]",
    },
    {
      number: 2,
      percentage: "40%",
      text: "pay 30 days after booking",
      progress: "w-[103px]",
    },
    {
      number: 3,
      percentage: "50%",
      text: "pay 60 days before trip",
      progress: "w-full",
    },
  ];

  return (
    <main className="relative mx-auto mt-48 mb-[143px] px-4 max-w-[1200px]">
      <div className="h-auto flex flex-col justify-start items-center gap-[23px] mb-[120px]">
        <div className="flex flex-col items-center gap-[17px]">
          <div className="h-[25px] px-4 py-2.5 bg-[#062949] rounded-[10px] flex justify-center items-center">
            <span className="text-center text-white text-base font-medium font-['Poppins'] uppercase leading-[44px]">
              step 3
            </span>
          </div>
          <div className="text-center text-[#062949] text-[46px] font-semibold leading-[46px]">
            Pay and sail
          </div>
        </div>
        <div className="w-full md:w-[472px] text-center text-[#062949] text-lg font-normal leading-tight">
          We make it easy to split the cost between your crew and pay in
          instalments.
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-[40px]">
        {paymentCardsData.map((card, index) => (
          <PaymentCard
            key={index}
            number={card.number}
            percentage={card.percentage}
            text={card.text}
            progress={card.progress}
            bgColor="bg-[#c5e5ea]"
          />
        ))}
      </div>

      <div className="mt-16 relative w-full h-auto">
        <Image
          src={stepThreeImage}
          alt="Step 3 illustration"
          layout="responsive"
          width={1465}
          height={500}
          className="rounded-md"
        />
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col items-start space-y-4 text-white max-w-[300px]">
          <h2 className="text-[#062949] text-4xl font-semibold md:text-[30px] leading-[37.80px]">
            Ready to go?
          </h2>
          <p className="text-[#062949] text-lg font-normal font-['DM Sans'] leading-[25.20px]">
            Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio
            amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc.
          </p>
          <button className="w-[264px] h-11 pl-[18px] pr-3 py-2 bg-white rounded-[50px] flex justify-between items-center gap-3 shadow-md hover:shadow-lg transition-all mt-[43px]">
            <span className="text-[#062949] text-base font-medium font-['Poppins'] leading-normal">
              Explore our destinations
            </span>
            <div className="w-[29px] h-[29px] bg-[#2962d0]/10 rounded-full flex justify-center items-center">
              <Image
                src={rightArrowIcon}
                alt="Right Arrow Icon"
                width={16}
                height={16}
              />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
};

export default StepThree;
