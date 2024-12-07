import Hero from "@/components/Hero/Hero";
import Experience from "@/components/Experience/Experience";
import PartyRoutes from "@/components/PartyRoutes/PartyRoutes";
import Reviews from "@/components/Reviews/Reviews";  
import Payments from "@/components/Payments/Payments";
import Navbar from "@/components/Navbar";
import whiteNavbarLogo from "@/assets/images/Charterag.png";

export default function Home() {
  return (
    <>
      <Navbar logo={whiteNavbarLogo} linkColor="white"/>
      <Hero/>
      <Experience/>
      <PartyRoutes/>
      <Reviews/>
      <Payments/>
    </>
  );
}
