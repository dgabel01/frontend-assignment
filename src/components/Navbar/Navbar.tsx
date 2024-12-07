"use client";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { routes } from "@/constants/routes";
import { useRouter } from "next/navigation";
import logoIcon from "@/assets/images/Charterag.png";

interface NavbarProps {
  logo: StaticImageData;
  linkColor: string;
}

export function Navbar({ logo, linkColor }: NavbarProps) {
  const router = useRouter();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className={`flex flex-col lg:flex-row gap-8`}>
      {routes.map((route, index) => (
        <li key={index}>
          <Link
            href={route.path}
            className={`text-base font-normal leading-normal hover:text-gray-300 transition-colors`}
            style={{ color: linkColor }}
          >
            {route.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="absolute top-0 left-0 z-10 w-full flex items-center justify-between px-4 lg:px-8 mt-12">
      {/* Mobile Menu Button */}
      <button
        className="text-white lg:hidden"
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <XMarkIcon className="h-6 w-6" style={{ color: linkColor }} />
        ) : (
          <Bars3Icon className="h-6 w-6" style={{ color: linkColor }} />
        )}
      </button>

      {/* Logo */}
      <Link href="/" className="hidden lg:flex items-center">
        <Image
          src={logo}
          alt="Logo"
          width={126}
          height={29.18}
          className="object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-6">{navList}</div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <button
          className="text-base font-bold hover:text-gray-300 transition-colors mr-[15px]"
          style={{ color: linkColor }}
          onClick={() => router.push("/log-in")}
        >
          Log in
        </button>
        <button
          className="bg-[#ffd50a] text-black text-base font-medium px-4 py-2 uppercase rounded-[50px] shadow-md hover:bg-yellow-400 transition-all"
          onClick={() => router.push("/book-now")}
        >
          Book now
        </button>
      </div>

      {/* Mobile Navigation */}
      {openNav && (
        <div className="absolute top-0 left-0 w-full rounded-lg h-[550px] bg-gray-600 bg-opacity-75 flex flex-col items-start p-4 z-20">
          {/* Logo */}
          <Link href={"/"}>
            <Image src={logoIcon} alt="logo" width={90} className="mb-6" />
          </Link>

          {/* Navigation Links */}
          <div className="w-full">{navList}</div>

          {/* Buttons */}
          <div className="flex flex-col items-start gap-4 mt-6 w-full">
            <button
              className="text-base font-medium text-white hover:text-gray-300 transition-colors"
              onClick={() => router.push("/log-in")}
            >
              Log in
            </button>
            <button
              className="bg-[#ffd50a] text-black text-base font-medium px-6 py-3  mt-[10px] uppercase rounded-[50px] shadow-md hover:bg-yellow-400 transition-all"
              onClick={() => router.push("/book-now")}
            >
              Book now
            </button>
          </div>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setOpenNav(false)}
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>
      )}
    </div>
  );
}
