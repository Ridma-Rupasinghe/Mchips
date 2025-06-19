

import lineLD from "../assets/Images/lineLD.webp";
import lineRD from "../assets/Images/lineRD.webp";
import lineLM from "../assets/Images/lineLM.webp";
import lineRM from "../assets/Images/lineRM.webp";



import { useEffect, useState } from "react";

export default function Component1() {

  const names = ["Real Time", "Real Life"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 2000); // 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className=" w-full flex flex-col items-start justify-between gap-[1vh]">
      <div className="flex items-center gap-[12px]">
        <img src={lineLD} alt="" className="hidden md:block" />
        <img src={lineLM} alt="" className="md:hidden" />

        <div className="rounded-full p-[1px] bg-gradient-to-br from-[#ffffff]  to-[#FFFFFF/0]">
          <div className="flex items-center justify-center rounded-full bg-gradient-to-br from-[#040339] to-[#5956FF] px-[10px] py-[8px]">
            <p className="font-ProductSans text-nowrap text-[8px] md:text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-[#DFDFE7] to-[#8E8EE6]">
              Verifiability Index: 97.2%
            </p>
          </div>
        </div>

        <img src={lineRD} alt="" className="hidden md:block" />
        <img src={lineRM} alt="" className="md:hidden" />
      </div>

      <p className=" font-ProductSans text-[36px] md:text-[45px] lg:text-[56px] xl:text-[72px] 2xl:text-[88px] text-white">
     Quantum-Sealed Compute in <br></br> <span className="text-nowrap font-ProductSans md:text-[45px] lg:text-[56px] xl:text-[72px] 2xl:text-[88px] text-transparent bg-clip-text bg-gradient-to-r from-[#1C7083]  to-[#E3EC9C]">{names[currentIndex]}</span>
    </p>

    <p className="font-ProductSans text-[12px] md:text-[12px] lg:text-[13px] xl:text-[14.5px] 2xl:text-[16px] text-white">Qunix delivers instant, verifiable compute through decentralized attested MCP servers. Launch, scale, and audit with one-command SDKs. Built with quantum‑safe cryptography and interchain AI verification.</p>



    </div>
  );
}
