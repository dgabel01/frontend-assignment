import Accordion from "../ui/Accordion";
import RouteHighlights from "../RouteHighlights/RouteHighlights";

const StepOne = () => {
  return (
    <main>
      <RouteHighlights/>
      <div className="h-auto flex flex-col justify-start items-center gap-[23px] mb-[120px]">
        <div className="flex flex-col items-center gap-[17px]">
          <div className="h-[25px] px-4 py-2.5 bg-[#062949] rounded-[10px] flex justify-center items-center">
            <span className="text-center text-white text-base font-medium font-['Poppins'] uppercase leading-[44px]">
              step 1.
            </span>
          </div>
          <div className="text-center text-[#062949] text-[46px] font-semibold leading-[46px]">
            Choose your route
          </div>
        </div>
        <div className="w-full md:w-[472px] text-center text-[#062949] text-lg font-normal leading-tight">
          Explore what you can get in each route
        </div>
      </div>

      <Accordion />
    </main>
  );
};

export default StepOne;
