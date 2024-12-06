import Image from "next/image";
import guestsImage from "@/assets/images/Guests png 1.png";
import { Carousel } from "./Carousel";
import { reviewImages } from "@/constants/reviewImages";
import boatIcon from "@/assets/icons/boatIcon.png";
import vacationIcon from "@/assets/icons/vacationIcon.png";
import bondingIcon from "@/assets/icons/bondingIcon.png";

const Reviews = () => {
  return (
    <main className="flex flex-auto flex-col gap-10 items-center justify-center px-4 sm:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] sm:h-[700px] lg:h-[836px] mt-20 sm:mt-32">
        <Image
          src={guestsImage}
          alt="Guests enjoying"
          objectFit="cover"
          quality={100}
          className="absolute w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-end p-4 sm:p-8 lg:p-16">
          <div className="flex flex-col md:items-end gap-4 md:gap-6 lg:gap-8">
            <h1 className="text-[#062949] text-xl sm:text-2xl lg:text-4xl font-semibold font-poppins text-right">
              Our guests loved it!
            </h1>
            <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
              <Carousel />
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="flex flex-col mt-12 sm:mt-20 text-center">
        <h1 className="text-[#062949] text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Come live your best life
        </h1>
        <p className="text-gray-700 text-sm sm:text-base max-w-xl mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer facilisi eget
          diam.
        </p>
      </div>

      {/* Review Images */}
      <div className="flex flex-col mt-12 sm:mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviewImages.map((src, index) => (
            <div
              key={index}
              className="w-full h-[200px] sm:h-[240px] lg:h-[265px] relative rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                objectFit="cover"
                quality={100}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12 mt-12 sm:mt-20">
  {[
    {
      icon: boatIcon,
      title: "A trip like no other",
      description:
        "Spend unforgettable 7 days at sea with your crew at your own pace",
    },
    {
      icon: vacationIcon,
      title: "Active vacation",
      description:
        "Indulge yourself in dozens of parties and activities on your trip",
    },
    {
      icon: bondingIcon,
      title: "Bonding",
      description:
        "Meet people from all over the world, discover new friends",
    },
  ].map((feature, index) => (
    <div
      key={index}
      className="w-full max-w-[322px] flex flex-col gap-2 text-center lg:text-left"
    >
      {/* Icon and Title */}
      <div className="flex items-center gap-2.5">
        <div className="relative w-[26px] h-[26px]">
          <Image
            src={feature.icon}
            alt={`${feature.title} Icon`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className="text-[#062949] text-[20px] font-medium leading-[24px] font-poppins">
          {feature.title}
        </h3>
      </div>
      {/* Description */}
      <p className="text-[#062949] text-[16px] font-normal leading-[24px] font-poppins">
        {feature.description}
      </p>
    </div>
  ))}
</div>

    </main>
  );
};

export default Reviews;
