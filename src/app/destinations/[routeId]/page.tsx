import React from "react";
import Image from "next/image";
import { PARTY_ROUTES } from "@/config/partyRoutes";
import { Carousel } from "@/components/Reviews/Carousel";
import starIcon from "@/assets/icons/Feather Icon.svg"
import avatarIcon from "@/assets/icons/Ellipse 2.png"
import Navbar from "@/components/Navbar";
import whiteLogo from "@/assets/images/Charterag.png"

interface DestinationRoutePageProps {
    params: Promise<{
      routeId: string;
    }>;
  }
  

const DestinationRoutePage = async ({ params }: DestinationRoutePageProps) => {
    const { routeId } = await params;

  const route = PARTY_ROUTES.find((r) => r.id === routeId);

  if (!route) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-[#062949] mb-4">Route Not Found</h1>
        <p className="text-xl text-gray-600">
          The destination route you are looking for does not exist.
        </p>
      </div>
    );
  }

  const slides = route.testimonials.map((testimonial) => ({
    avatar: avatarIcon,
    star: starIcon,
    stars: testimonial.rating,
    text: testimonial.quote,
    name: testimonial.name,
  }));

  return (
    <div className="bg-white">
      <Navbar linkColor="white" logo={whiteLogo}/>
      <div className="relative w-full h-[500px]">
        <Image
          src={route.img}
          alt={route.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{route.title}</h1>
            <p className="text-xl md:text-2xl">{route.price}</p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default DestinationRoutePage;
