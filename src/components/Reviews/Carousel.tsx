"use client";
import { useState } from "react";
import Image from "next/image";
import starIcon from "@/assets/icons/Feather Icon.svg";
import avatarIcon from "@/assets/icons/Ellipse 2.png";

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      avatar: avatarIcon,
      stars: 5,
      text: "Amazing experience! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Courtney Henry",
    },
    {
      avatar: avatarIcon,
      stars: 4,
      text: "A wonderful getaway! Sapien eget morbi aliquam ultricies est ornare.",
      name: "John Doe",
    },
    {
      avatar: avatarIcon,
      stars: 5,
      text: "Loved every moment! Eu ac lorem eleifend diam tellus magnis volutpat nulla.",
      name: "Jane Smith",
    },
  ];

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="relative overflow-hidden rounded-lg bg-white shadow-md h-[300px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700  h-[337px] pl-[30px] pr-[76px] py-[42px] bg-white rounded-[10px] ${
              activeIndex === index
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
            style={{
              transform: `translateX(${(index - activeIndex) * 100}%)`,
              transition: "transform 0.7s ease, opacity 0.7s ease",
            }}
          >
            <div className="flex flex-col items-start justify-start gap-4 p-0">
              <Image
                src={slide.avatar}
                alt={`Avatar of ${slide.name}`}
                width={80}
                height={80}
                className="rounded-full"
              />
              <span className="text-gray-800 text-lg font-semibold">
                {slide.name}
              </span>
              <div className="flex gap-1">
                {[...Array(slide.stars)].map((_, starIndex) => (
                  <Image
                    key={starIndex}
                    src={starIcon}
                    alt="Star"
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <p className="text-left text-gray-700">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-8 h-2 rounded-full transition-all ${
              activeIndex === index ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
