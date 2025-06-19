import plane from "../assets/Images/plane.webp";
import logo from "../assets/Images/logo.webp";
import vector from "../assets/Images/Vector.webp";

import { useState } from "react";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const navItems = [
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

  return (
    <div>
      <div className="hidden md:flex px-[5%] py-[2vh] items-center justify-between">
        <img src={logo} alt="" />

        <div className="flex md:w-7/10 lg:w-1/2 items-center justify-between ">
          {navItems.map((item) => (
            <a
              className={`font-ProductSans text-nowrap  md:text-[15.5px] lg:text-[17px] xl:text-[18.5px] 2xl:text-[20px]  ${
                isHovered
                  ? "text-white"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-[#DFDFE7]  to-[#8E8EE6]"
              }`}
            >
              {item.alt}
            </a>
          ))}

          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="rounded-2xl p-[1px] bg-gradient-to-br from-[#ffffff]  to-[#FFFFFF/0]"
          >
            <div className="px-[10px] py-[8px] flex  items-center justify-center gap-[5px]   bg-gradient-to-r from-[#040339]  to-[#5956FF] rounded-2xl hover:scale-105 cursor-pointer">
              <p
                className={`2xl:text-[16px] font-ProductSans text-nowrap  ${
                  isHovered
                    ? "text-white"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF]  to-[#B1B1FA]"
                }`}
              >
                Launch App
              </p>
              <img src={plane} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden px-[5%] py-[2vh] flex items-center justify-between">
        <img src={logo} alt="" />

        <div className="flex items-center justify-between gap-[10px] sm:gap-[30px]">

          <div className="rounded-full p-[1px] bg-gradient-to-br from-[#ffffff]  to-[#FFFFFF/0]">
            <div className="px-[10px] py-[4px] flex  items-center justify-center gap-[5px] border-[1px] border-white  bg-gradient-to-r from-[#040339]  to-[#5956FF] rounded-l-full rounded-r-full hover:scale-105 cursor-pointer">
              <p className="2xl:text-[16px] font-ProductSans text-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF]  to-[#B1B1FA]">
                Launch App
              </p>
              <img src={plane} alt="" />
            </div>
          </div>

          <div className="rounded-[10.11px] p-[1px] bg-gradient-to-br from-[#ffffff]  to-[#FFFFFF/0]">
            <div className="flex items-center justify-center rounded-[10.11px] p-2 bg-gradient-to-r from-[#040339]  to-[#5956FF] ">
              <img src={vector} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
