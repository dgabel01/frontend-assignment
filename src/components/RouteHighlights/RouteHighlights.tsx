import Image from "next/image";
import { RouteHighlightsInfo } from "@/constants/routeHighlightsInfo";

const RouteHighlights = () => {
  return (
    <div className="px-4 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RouteHighlightsInfo.map((highlight, index) => (
          <div
            key={index}
            className="h-auto flex flex-col items-start gap-4 bg-white  p-4"
          >
            <div className="w-full h-[251px] relative">
              <Image
                src={highlight.image}
                alt={highlight.heading}
                className="rounded-[10px] w-[400px] h-[270px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
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
