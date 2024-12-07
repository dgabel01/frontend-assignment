"use client";
import Image from "next/image";
import { useState } from "react";
import { StaticImageData } from "next/image";

interface DestinationCarouselProps {
  images: StaticImageData[];
  carouselId: number;
}

const DestinationCarousel: React.FC<DestinationCarouselProps> = ({
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={746}
              height={500}
              className="w-[746px] h-[500px] rounded-[15px] object-cover"
            />
          </div>
        ))}
      </div>

    
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            ❯
          </button>
        </>
      )}
    </div>
  );
};

export default DestinationCarousel;
