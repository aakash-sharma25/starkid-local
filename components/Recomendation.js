import React from "react";
import recom from "@/public/asset/recom.png";
import wh1 from "@/public/asset/wh1.png";
import wh2 from "@/public/asset/wh2.png";
import Image from "next/image";

export default function Recomendation() {
  return (
    <div className=" text-center">
      <div className=" my-10">
        <span className="text-white text-[26px] font-medium font-['Publica Sans'] leading-normal">
          Hear It from
        </span>
        <span className="text-[#d63970] text-[26px] font-medium font-['Publica Sans'] leading-normal">
          {" "}
          the Parents:
        </span>
        <div className="text-white text-[26px] font-medium font-['Publica Sans'] leading-normal">
          {" "}
          Their Stories, Their Trust!
        </div>
      </div>
      <div className=" min-w-full flex gap-10  flex-wrap items-center justify-evenly">
        <div className=" relative">
          <Image src={wh1} alt="wh1" width={300} height={300} />
          <Image
            src={recom}
            alt="recom"
            width={50}
            className="absolute -top-5 -right-5"
          />
        </div>
        <div className=" relative">
          <Image src={wh2} alt="wh1" width={300} height={300} />
          <Image
            src={recom}
            alt="recom"
            width={50}
            className="absolute -top-5 -right-5"
          />
        </div>
        <div className=" relative">
          <Image src={wh2} alt="wh1" width={300} height={300} />
          <Image
            src={recom}
            alt="recom"
            width={50}
            className="absolute -top-5 -right-5"
          />
        </div>
      </div>
      <button className="my-10 bg-[#5259AA] font-bold text-white py-4 px-8 rounded-lg text-lg">
        REGISTER NOW
      </button>
    </div>
  );
}
