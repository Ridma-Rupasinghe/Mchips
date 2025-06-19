import { useState } from "react";

import lpArrow from "../assets/Images/lpArrow.webp";
import lwArrow from "../assets/Images/lwArrow.webp";
import rpArrow from "../assets/Images/rpArrow.webp";
import rwArrow from "../assets/Images/rwArrow.webp";

export default function Component3() {
  const items = [
    {
      alt: "Ecosystem",
    },
    {
      alt: "UseCases",
    },
    {
      alt: "LiveStats",
    },
    {
      alt: "Support",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex justify-end">
      <div className="hidden md:flex  flex-col items-start justify-between gap-[1vh]">
        {items.map((item, index) => (
          <div className="flex items-center justify-start gap-[5px]"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={hoveredIndex === index ? lpArrow : lwArrow}
              className=""
            />
            <p
              key={index}
              className={`font-ProductSans md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] transition-colors duration-300 cursor-pointer ${
                hoveredIndex === index
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#4844FA]  to-[#9D9BFC]"
                  : "text-white"
              }`}
            >
              {item.alt}
            </p>
          </div>
        ))}
      </div>

      <div className="md:hidden w-full flex flex-col items-between justify-between gap-[1vh] py-[2vh]">
        {items.map((item, index) => (
          <div className="flex items-center justify-between w-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
           
            <p
              key={index}
              className={`font-ProductSans text-[14px]  transition-colors duration-300 cursor-pointer ${
                hoveredIndex === index
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#4844FA]  to-[#9D9BFC]"
                  : "text-white"
              }`}
            >
              {item.alt}
            </p>

             <img
              src={hoveredIndex === index ? rpArrow : rwArrow}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
