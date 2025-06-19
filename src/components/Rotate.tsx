import { motion } from "framer-motion";

interface RotatingImageProps {
  imageSrc: string;
  
}

export default function RotatingImage({ imageSrc }: RotatingImageProps) {

     let widthClass = "";

  if (imageSrc.includes("mask")) {
    widthClass = "w-7 md:w-10 lg:w-12 xl:w-18 2xl:w-22";
  } else if (imageSrc.includes("star")) {
    widthClass = "w-15 md:w-18 lg:w-25 xl:w-30 2xl:w-35";
  } else {
    widthClass = "w-10"; 
  }

  return (
   <motion.img
  src={imageSrc}

  className={`inline-block ${widthClass}`}
  animate={{ rotate: 360 }}
  transition={{
    repeat: Infinity,
    duration: 6,
    ease: "linear",
  }}
/>
  );
}