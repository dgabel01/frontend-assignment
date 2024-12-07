import Image from "next/image";
import rightArrow from "@/assets/icons/rightarrow.svg"

export const StyledButton = ({ text }: { text: string }) => {
    return (
      <button className="w-[209px] h-11 pl-[18px] pr-3 py-2 bg-white rounded-[50px] flex justify-between items-center shadow-md hover:bg-gray-100 transition">
        <span className="text-[#062949] text-base font-medium font-['Poppins'] leading-normal">
          {text}
        </span>
        <div className="w-[29px] h-[29px] p-2.5 bg-[#2962d0]/10 rounded-full flex justify-center items-center">
          <Image src={rightArrow} alt="Right Arrow" width={15} height={15} />
        </div>
      </button>
    );
  };
  