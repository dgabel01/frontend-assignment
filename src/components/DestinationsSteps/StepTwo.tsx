import soloPicture from "@/assets/images/step1Destination.jpeg";
import catamaranPicture from "@/assets/images/step2Destination.png";
import skipperPicture from "@/assets/images/step3Destination.jpeg";
import DestinationCarousel from "./DestinationCarousel";
import { StyledButton } from "./StyledButton";

const imagesOne = [soloPicture, catamaranPicture];
const imagesTwo = [catamaranPicture, skipperPicture];
const imagesThree = [skipperPicture, soloPicture];

const StepTwo = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-[209px] px-4">
      {/* Title Section */}
      <div className="w-full max-w-3xl flex flex-col items-center text-center gap-6 mb-[145px]">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-[#062949] text-white px-4 py-2 rounded-md text-sm uppercase">
            step 2.
          </div>
          <h1 className="text-[#062949] text-4xl font-semibold">
            Choose your crew
          </h1>
        </div>
        <p className="text-[#062949] text-base">Lorem ipsum dolor sit amet</p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-[222px] mt-12 w-full items-center">
        {[imagesOne, imagesTwo, imagesThree].map((images, index) => {
          const isReversed = index % 2 === 1;
          const title =
            index === 0
              ? "Solo, Cabin or Group of Friends"
              : index === 1
              ? "Perfect for Groups"
              : "Premium Experience";
          const description =
            index === 0
              ? "Solo, with a friend or with the whole crew, we got it all covered! Lorem ipsum dolor sit amet consectetur."
              : index === 1
              ? "Sail with a group and enjoy the best of adventures. Lorem ipsum dolor sit amet consectetur."
              : "Indulge in luxury with our curated premium sailing experiences. Lorem ipsum dolor sit amet consectetur.";
          const buttonText =
            index === 0
              ? "Compare cabins"
              : index === 1
              ? "Learn more"
              : "Book now";

          return (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                isReversed ? "lg:flex-row-reverse" : ""
              } w-full max-w-[1110px] gap-8 items-center`}
            >
              <div
                className={`flex-1 flex justify-center ${
                  isReversed ? "lg:mr-8" : "lg:ml-8"
                }`}
              >
                <DestinationCarousel images={images} carouselId={index + 1} />
              </div>

              <div className="flex-1 flex flex-col justify-center gap-4 text-center lg:text-left">
                <h1 className="text-2xl font-bold text-[#062949]">{title}</h1>
                <p className="text-base text-gray-600">{description}</p>
                <StyledButton text={buttonText} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default StepTwo;
