"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import navbarLogo from "@/assets/images/Charterag.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { routes } from "@/constants/routes";

export function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col lg:flex-row gap-8">
      {routes.map((route, index) => (
        <li key={index}>
          <Link
            href={route.path}
            className="text-white text-base font-normal leading-normal hover:text-gray-300 transition-colors"
          >
            {route.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="absolute top-0 left-0 z-10 w-full flex items-center justify-between px-4 lg:px-8 mt-12">
      <button
        className="text-white lg:hidden"
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <XMarkIcon className="h-6 w-6 text-white" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-white" />
        )}
      </button>

      <Link href="/" className="hidden lg:flex items-center">
        <Image
          src={navbarLogo}
          alt="Charterag Logo"
          width={126}
          height={29.18}
          className="object-contain"
        />
      </Link>

      <div className="hidden lg:flex items-center space-x-6">{navList}</div>

      <div className="hidden lg:flex items-center gap-4">
        <button className="text-white text-base font-bold hover:text-gray-300 transition-colors mr-[15px]">
          Log in
        </button>
        <button className="bg-[#ffd50a] text-black text-base font-medium px-4 py-2 uppercase rounded-[50px] shadow-md hover:bg-yellow-400 transition-all">
          Book now
        </button>
      </div>

      {/* Mobile Navigation */}
      {openNav && (
        <div className="absolute top-12 left-4 flex flex-col gap-4">
          {navList}
          <div className="flex flex-col items-start justify-start gap-4">
            <button className="text-white text-base font-medium hover:text-gray-300 transition-colors">
              Log in
            </button>
            <button className="bg-[#ffd50a] text-black text-base font-medium px-4 py-2 uppercase rounded-[50px] shadow-md hover:bg-yellow-400 transition-all">
              Book now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
