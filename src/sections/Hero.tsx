import Marquee from "../components/MarqueeComp";

import Component1 from "../components/Component1";
import Rotate from "../components/Rotate";
import star from "../assets/Images/star.webp";
import mouse from "../assets/Images/mouse.webp";


import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <div>
      <div className="relative hidden md:flex w-full items-center  justify-between px-[5%] py-[2vh]">
        <div className="flex flex-col items-start justify-between w-5/10 gap-[2vh] 2xl:gap-[5vh]">
          <div className="w-full">
            <Component1 />
          </div>

          <div className="w-full flex flex-col items-center justify-between ">
            <p className=" font-ProductSans text-[20px]  text-white text-right">
              Alternate Feature Set for{" "}
              <span className="text-nowrap font-ProductSans text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#4844FA]  to-[#9D9BFC]">
                Qunix
              </span>
            </p>

            <Marquee />
          </div>
        </div>

        <div className="w-5/10">
          <Spline scene="/scene.splinecode" className="scale-150" />
        </div>

        <div className="absolute right-1/10 translate-x-1/10 bottom-0">
          <Rotate imageSrc={star} />
        </div>
      </div>

      <div className="md:hidden flex flex-col items-start justify-between w-full px-[4%]">
        <Component1 />

        <Spline scene="/scene.splinecode" className="scale-140 py-[5vh]" />

        <div className="pb-[2vh] flex items-center justify-between w-full">
          <Rotate imageSrc={star} />
          <img src={mouse} alt="" />
        </div>

        <div className="w-full flex flex-col items-start justify-between ">
          <p className=" font-ProductSans text-[16px]  text-white text-right">
            Alternate Feature Set for{" "}
            <span className="text-nowrap font-ProductSans text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-[#4844FA]  to-[#9D9BFC]">
              Qunix
            </span>
          </p>

          <Marquee />
        </div>
      </div>
    </div>
  );
}
