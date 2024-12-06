"use client"
import Image from "next/image";
import logoIcon from "@/assets/images/Charterag.png";
import scrollToTopIcon from "@/assets/icons/scroll.png";
import instaIcon from "@/assets/icons/whiteinsta.png";
import facebookIcon from "@/assets/icons/facebook-3-2 1.png";
import youtubeIcon from "@/assets/icons/youtube.png";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#062949] py-8 px-4 md:px-16 lg:px-24 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 mb-8">
        <Image src={logoIcon} alt="footer-logo" width={216} height={50} />
        <button
          className="mt-6 md:mt-0 bg-white rounded-full p-3 hover:shadow-md"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src={scrollToTopIcon}
            alt="scroll-icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-8 mt-[90px]">
        <div className="grid grid-cols-2 md:flex md:justify-between md:gap-16 w-full md:w-auto">
          <div className="flex flex-col">
            <h1 className="font-medium text-white text-[14px] mb-4">Programs</h1>
            <ul className="space-y-2 text-white opacity-60">
              <li>Program 1</li>
              <li>Program 2</li>
              <li>Program 3</li>
              <li>Program 4</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h1 className="font-medium text-white text-[14px] mb-4">Find out more</h1>
            <ul className="space-y-2 text-white opacity-60">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h1 className="font-medium text-white text-[14px] mb-4">Support</h1>
            <ul className="space-y-2 text-white opacity-60">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Help Center</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="font-medium text-white text-[14px] mb-4">Follow Us</h1>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40"
            >
              <Image src={instaIcon} alt="Instagram" width={20} height={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10  bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40"
            >
              <Image src={facebookIcon} alt="Facebook" width={20} height={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40"
            >
              <Image src={youtubeIcon} alt="YouTube" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t border-white/20 mb-8" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-white text-sm opacity-70 space-y-4 md:space-y-0">
        <div className="flex flex-col space-y-2">
            <p>Copyright © {new Date().getFullYear()} Charterag Ltd. (company no.08245801)</p>
            <p>Lorem ipsum dolor sit amet lorem ipsum ipsum, United Kingdom</p>
        </div>

        <div className="flex space-x-6">
            <p>
                Legal info
            </p>
            <p>
                Terms and conditions
            </p>
        </div>
    </div>

    </footer>
  );
};

export default Footer;
