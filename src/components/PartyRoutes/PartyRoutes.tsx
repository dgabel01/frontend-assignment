import React from "react";
import SingleParty from "./SingleParty";
import partyRoutePhoto from "@/assets/images/partyroute.png";
import ultraRoutePhoto from "@/assets/images/ultraroute.png";
import greeceRoutePhoto from "@/assets/images/greeceroute.png";
import adventureRoutePhoto from "@/assets/images/adventureroute.png";

const PartyRoutes = () => {
  const partyRoutes = [
    {
      title: "Party Route",
      price: "€750/person",
      img: partyRoutePhoto,
      party: 80,
      adventure: 60,
    },
    {
      title: "Ultra Route",
      price: "€820/person",
      img: ultraRoutePhoto,
      party: 90,
      adventure: 50,
    },
    {
      title: "Greece Route",
      price: "€710/person",
      img: greeceRoutePhoto,
      party: 70,
      adventure: 85,
    },
    {
      title: "Adventure Route",
      price: "€890/person",
      img: adventureRoutePhoto,
      party: 60,
      adventure: 90,
    },
  ];

  return (
    <main>
      <div className="w-full flex flex-col items-center justify-center py-16 bg-white">
        <div className="w-full max-w-2xl flex flex-col justify-start items-center gap-6 px-4">
          <div className="h-[25px] px-4 py-2.5 bg-[#103b62] rounded-[10px] flex justify-center items-center gap-1">
            <div className="text-center text-white text-sm font-normal uppercase leading-[44px]">
              destinations
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-6 w-full">
            <div className="text-center text-[#062949] text-[28px] sm:text-[36px] md:text-[46px] font-semibold leading-[1.2]">
              Whether it&apos;s a bash or <br />
              bliss — the choice is yours
            </div>
            <div className="text-center text-[#062949] text-base sm:text-lg font-normal leading-relaxed max-w-lg">
              On our customized sailing adventures, embracing the thrill of our
              party routes or unwinding on our relaxing voyages — crafting your
              perfect journey at sea has never been easier.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-16 px-4 py-16 bg-white">
        {partyRoutes.map((route, index) => (
          <SingleParty
            key={index}
            title={route.title}
            price={route.price}
            img={route.img}
            party={route.party}
            adventure={route.adventure}
          />
        ))}
      </div>
    </main>
  );
};

export default PartyRoutes;
