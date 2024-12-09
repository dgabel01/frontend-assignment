import React from "react";
import Link from "next/link";
import SingleParty from "./SingleParty";
import { PARTY_ROUTES } from "@/config/partyRoutes"; 

const PartyRoutes = () => {
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
        {PARTY_ROUTES.map((route) => (
          <Link 
            key={route.id} 
            href={`/destinations/${route.id}`}
            className="w-full max-w-4xl"
          >
            <SingleParty
              title={route.title}
              price={route.price}
              img={route.img}
              party={route.party}
              adventure={route.adventure}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default PartyRoutes;