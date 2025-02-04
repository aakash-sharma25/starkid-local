import Image from "next/image";
import React from "react";
import comp from "@/public/asset/comp.png";
import comp1 from "@/public/asset/comp1.png";
import comp2 from "@/public/asset/comp2.png";

export default function CompetationDisplay() {
  return (
    <div className=" bg-white min-w-full ">
      <div className=" text-center mt-20 mb-10">
        <span className="relative text-black text-[26px] font-bold font-['Publica Sans'] leading-normal">
          Explore Our Exciting{" "}
          <Image
            src={comp1}
            alt="comp"
            className=" absolute -top-10 -left-20 "
          />
          <Image
            src={comp2}
            alt="comp"
            className=" absolute -top-10 -right-20"
          />
        </span>
        <div className="text-[#d63970] text-[26px] font-bold font-['Publica Sans'] leading-normal">
          Live Competitions
        </div>
      </div>

      <div className=" flex items-center justify-center mb-10">
        <Image src={comp} alt="comp" />
      </div>
    </div>
  );
}
