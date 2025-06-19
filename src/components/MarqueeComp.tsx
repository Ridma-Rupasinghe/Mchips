import Marquee from "react-fast-marquee";
import icon1 from "../assets/Images/icon1.webp";
import icon2 from "../assets/Images/icon2.webp";
import icon3 from "../assets/Images/icon3.webp";
import icon4 from "../assets/Images/icon4.webp";

const features = [
  {
    icon: icon1,
    title: "Instant trust through real-time attestation",
    description:
      "Execute and verify compute with on-chain proof at every step.",
  },
  {
    icon: icon2,
    title: "Frictionless deployment with zero overhead",
    description: "From code to verifiable execution in a single command.",
  },
  {
    icon: icon3,
    title: "Modular infrastructure, built for resilience",
    description:
      "Run decentralized nodes with quantum-grade security and uptime.",
  },
  {
    icon: icon4,
    title: "Intelligent trust fabric across chains",
    description:
      "Qunix combines AI validation, quantum-safe cryptography, and multi-chain interoperability to redefine secure compute.",
  },
];

export default function MarqueeComp() {
  return (
    <div className="w-full py-4">
      <Marquee pauseOnHover speed={40} gradient={false}>
        <div className="flex items-start">

            {features.map((item, index) => (
          <div
            key={index}
            className="w-[217px] md:w-[355px] flex  items-start gap-[7px] mx-[15px]"
          >
            <img src={item.icon} className="w-[30px]" />
            <div className="flex flex-col items-start justify-between w-full gap-[6px]">
              <p className="text-[16px] md:text-[14px] font-ProductSans text-white">{item.title}</p>
              <p className="text-[12px] font-ProductSans text-white/60">{item.description}</p>
            </div>
          </div>
        ))}

        </div>
        
      </Marquee>
    </div>
  );
}
