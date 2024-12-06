import React from "react";
import Image from "next/image";
import { accordionInformation } from "@/constants/accordionInformation";

const Accordion = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="space-y-6 w-full max-w-screen-md lg:w-[1010px]">
        {accordionInformation.map((route, index) => {
          const splitStats = [route.stats.slice(0, 5), route.stats.slice(5)];
          const [col1, col2] = splitStats;

          return (
            <div
              key={index}
              className="collapse collapse-arrow bg-[#E1F1F5] w-full"
            >
              <input
                type="radio"
                name="my-accordion-2"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-lg md:text-xl font-medium">
                {route.title}
              </div>
              <div className="collapse-content">
                <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
                  {/* Image Section */}
                  <div className="flex-shrink-0 lg:pl-4 basis-[406px]">
                    <Image
                      src={route.image}
                      alt={`${route.title} Image`}
                      width={406}
                      height={276}
                      className="rounded-md w-full lg:w-[406px] h-auto"
                    />
                  </div>
                  {/* Stats Section */}
                  <div className="flex flex-col justify-center gap-4 flex-grow">
                    <div className="grid grid-cols-2 gap-8">
                      {/* First Column */}
                      <div className="space-y-4">
                        {col1.map((stat, i) => (
                          <div
                            key={i}
                            className="flex flex-col justify-between h-auto"
                          >
                            <p className="text-[#062949] text-sm md:text-lg font-medium">
                              {stat.label}
                            </p>
                            <div className="relative w-full h-2 bg-gray-200 rounded-full">
                              <div
                                className={`absolute top-0 left-0 h-full bg-green-500 rounded-full ${stat.width}`}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Second Column */}
                      <div className="space-y-4">
                        {col2.map((stat, i) => (
                          <div
                            key={i}
                            className="flex flex-col justify-between h-auto"
                          >
                            <p className="text-[#062949] text-sm md:text-lg font-medium">
                              {stat.label}
                            </p>
                            <div className="relative w-full h-2 bg-[#D2D2E2] rounded-full">
                              <div
                                className={`absolute top-0 left-0 h-full bg-green-500 rounded-full ${stat.width}`}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
