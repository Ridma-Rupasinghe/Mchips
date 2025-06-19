import arrowR from "../assets/Images/rwArrow.webp";

import Component2 from "../components/Component2";
import Component3 from "../components/Component3";

export default function About() {
  return (
    <div className="w-full">
      <div className="hidden md:flex w-full px-[10%] py-[2vh] items-end justify-between">
        <div className="flex flex-col items-start justify-between w-full  gap-[2vh]">
          <div className="flex flex-col items-start justify-between">
            <p className=" md:text-[14px] font-ProductSans text-white">
              Where Compute Meets Certainty{"  "}
              <img src={arrowR} alt="icon" className="inline w-[15px]" />
            </p>
            <p className="text-[12px] font-ProductSans text-white/60">
              Built for a decentralized future, secured by quantum-grade
              technology.
            </p>
          </div>

          <Component2 />
        </div>

        <Component3 />
      </div>

      <div className="md:hidden flex flex-col items-start justify-between px-[5%] py-[2vh] w-full">
        <div className="flex flex-col items-start justify-between w-7/10">
          <p className=" md:text-[14px] font-ProductSans text-white">
            Where Compute Meets Certainty{"  "}
            <img src={arrowR} alt="icon" className="inline w-[15px]" />
          </p>
          <p className="text-[12px] font-ProductSans text-white/60">
            Built for a decentralized future, secured by quantum-grade
            technology.
          </p>
        </div>

        <Component3 />
        <Component2 />
      </div>
    </div>
  );
}
