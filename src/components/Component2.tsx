import mask from "../assets/Images/mask.webp";
import Rotate from "../components/Rotate";

export default function Component2() {
  return (
    <div className="w-full">
      <div className="w-full hidden md:flex flex-col items-start justify-between">
        <p className=" font-ProductSans  md:text-[45px] lg:text-[56px] xl:text-[72px] 2xl:text-[88px] text-white">
          Quantum{" "}
          <Rotate imageSrc={mask}  />
          
          <br></br>
          Utility{" "}
          <span className="text-nowrap font-ProductSans md:text-[45px] lg:text-[56px] xl:text-[72px] 2xl:text-[88px] text-transparent bg-clip-text bg-gradient-to-r from-[#1C7083]  to-[#E3EC9C]">
            Exchange
          </span>
        </p>

        <p className="font-ProductSans md:text-[12px] lg:text-[13px] xl:text-[14.5px] 2xl:text-[16px] text-white">Powered by Quantum. Driven by Decentralization.</p>

      </div>

      <div className="w-full md:hidden flex flex-col items-end justify-between">

         <p className=" font-ProductSans text-[36px]  text-white text-right">
             <Rotate imageSrc={mask}  />{" "}
          Quantum
          {" "}
          Utility{" "}
          <span className="text-nowrap font-ProductSans text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-[#1C7083]  to-[#E3EC9C]">
            Exchange
          </span>
        </p>

         <p className="font-ProductSans text-[12px]  text-white">Powered by Quantum. Driven by Decentralization.</p>

      </div>
    </div>
  );
}
