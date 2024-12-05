import Hero from "@/components/Hero/Hero";
import Experience from "@/components/Experience/Experience";
import PartyRoutes from "@/components/PartyRoutes/PartyRoutes";
import Reviews from "@/components/Reviews/Reviews";  
import Payments from "@/components/Payments/Payments";

export default function Home() {
  return (
    <>
      <Hero/>
      <Experience/>
      <PartyRoutes/>
      <Reviews/>
      <Payments/>
    </>
  );
}
