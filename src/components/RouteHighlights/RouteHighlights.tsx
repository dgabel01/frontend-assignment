"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { RouteHighlightsInfo } from "@/constants/routeHighlightsInfo";

const RouteHighlights = () => {
  Aos.init()

  return (
    <div className="px-4 lg:px-8 py-8 mt-[183px]">
      <h1 className="max-w-[482.23px] mx-auto mb-[69px] text-center text-black text-[32px] font-normal font-['Poppins'] leading-10">
        Route highlights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RouteHighlightsInfo.map((highlight, index) => (
          <div
            key={index}
            className="h-auto flex flex-col items-start gap-4 bg-white p-4"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-delay={index * 100} 
          >
            <div className="w-full h-[251px] relative">
              <Image
                src={highlight.image}
                alt={highlight.heading}
                className="rounded-[10px] w-[400px] h-[270px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 mt-[32px]">
              <h3 className="text-[#282828] text-2xl font-medium leading-loose">
                {highlight.heading}
              </h3>
              <p className="text-[#062949] text-[15px] font-normal leading-normal">
                {highlight.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteHighlights;
