const items = [
  "X (Twitter)",
  "GitHub",
  "Discord",
  "Privacy Policy",
  "Terms of Use",
];

import { useState } from "react";
export default function Footer() {
  const row1 = items.slice(0, 3);
  const row2 = items.slice(3);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [hoveredIndex1, setHoveredIndex1] = useState<number | null>(null);
  const [hoveredIndex2, setHoveredIndex2] = useState<number | null>(null);

  return (
    <div>
      <div className="hidden md:flex px-[10%] py-[2vh]  items-center justify-between">
        <p className="font-ProductSans text-fade md:text-[12px] xl:text-[14px]">
          © Qunix Protocol · 2025.
        </p>

        <div className="flex items-center justify-between gap-[15px]">
          {items.map((item, index) => (
            <p
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`font-ProductSans md:text-[12px] xl:text-[14px] transition-colors duration-300 cursor-pointer ${
                hoveredIndex === index ? "text-white" : "text-fade"
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="md:hidden px-[5%] py-[2vh] flex flex-col items-center justify-center gap-[2.5vh] w-full">
        <div className="flex flex-col items-center justify-center gap-[1vh] w-full">
          <div className="flex  w-full justify-between ">
            {row1.map((item, index) => (
              <p
                key={index}
                onMouseEnter={() => setHoveredIndex1(index)}
                onMouseLeave={() => setHoveredIndex1(null)}
                className={`font-ProductSans text-[14px] transition-colors duration-300 cursor-pointer ${
                  hoveredIndex1 === index ? "text-white" : "text-fade"
                }`}
              >
                {item}
              </p>
            ))}
          </div>

          <div className="flex w-full justify-evenly">
            {row2.map((item, index) => (
              <p
                key={index}
                onMouseEnter={() => setHoveredIndex2(index)}
                onMouseLeave={() => setHoveredIndex2(null)}
                className={`font-ProductSans text-[14px] transition-colors duration-300 cursor-pointer ${
                  hoveredIndex2 === index ? "text-white" : "text-fade"
                }`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <p className="font-ProductSans text-[12px] text-center text-fade">© Qunix Protocol · 2025.</p>
      </div>
    </div>
  );
}
