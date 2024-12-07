import Image from "next/image";
import { accordionInformation } from "@/constants/accordionInformation";

const Accordion = () => {
  return (
    <div className="flex justify-center px-4 md:px-8">
      <div className="space-y-6 w-full max-w-[1010px]">
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
              <div className="collapse-title text-lg md:text-xl  text-[#062949] font-semibold font-['Poppins'] leading-none tracking-tight">
                {route.title}
              </div>
              <div className="collapse-content">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 w-full h-auto lg:h-[416px]">
                  <div className="flex-shrink-0 w-full lg:w-[406px] h-auto">
                    <Image
                      src={route.image}
                      alt={`${route.title} Image`}
                      width={406}
                      height={276}
                      className="rounded-md w-full max-h-[300px] h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-4 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        {col1.map((stat, i) => (
                          <div
                            key={i}
                            className="flex flex-col justify-between h-auto"
                          >
                            <p className="text-[#062949] text-sm md:text-lg font-medium">
                              {stat.label}
                            </p>
                            <div className="relative w-full h-2 bg-[#D2D2E2] rounded-full">
                              <div
                                className={`absolute top-0 left-0 h-full bg-green-400 rounded-full`}
                                style={{ width: stat.value }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
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
                                className={`absolute top-0 left-0 h-full bg-green-400 rounded-full`}
                                style={{ width: stat.value }}
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
