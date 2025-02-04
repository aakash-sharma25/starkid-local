import Image from "next/image";
import React from "react";
import reg1 from "@/public/asset/reg1.png";
import reg2 from "@/public/asset/reg2.png";
import reg3 from "@/public/asset/reg3.png";
import arrow from "@/public/asset/arrorw.png";

export default function HowToRegister() {
  return (
    <div className=" min-w-full flex items-center justify-center">
      <div className=" my-10">
        <p className="text-[#d63970] text-[26px] font-medium font-['Publica Sans'] leading-normal">
          How to Register
          <span className="text-white text-[26px] font-medium font-['Publica Sans'] leading-normal">
            {" "}
            in Just 3 Simple Steps?
          </span>
        </p>
        <div className="flex mt-10 items-center justify-center">
          <div className=" w-[100px] flex flex-col items-center justify-center text-center">
            <Image src={reg1} alt="reg1" width={100} height={"auto"} />
            {/* <p className=" font-semibold">Click on 'Register Now'</p> */}
          </div>
          <Image src={arrow} alt="arrow" width={50} height={"auto"} />

          <div className=" w-[100px] flex flex-col items-center justify-center text-center">
            <Image src={reg2} alt="reg1" width={100} height={"auto"} />
            {/* <p className=" font-semibold">Choose Your Competition</p> */}
          </div>
          <Image src={arrow} alt="arrow" width={50} height={"auto"} />

          <div className=" w-[100px] flex flex-col items-center justify-center text-center">
            <Image src={reg3} alt="reg1" width={100} height={"auto"} />
            {/* <p className=" font-semibold">Make the Payment</p> */}
          </div>
        </div>
        <div className="flex mt-3  items-center justify-center">
          <div className=" w-[100px] flex flex-col items-center justify-center text-center">
            <p className=" font-semibold">Click on 'Register Now'</p>
          </div>
          <div className="w-[50px] " />
          <div className=" w-[100px] flex flex-col items-center justify-center text-center">
            <p className=" font-semibold">Choose Your Competition</p>
          </div>
          <div className="w-[50px] " />

          <div className=" w-[100px] flex flex-col items-center justify-center text-center">
            <p className=" font-semibold">Make the Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
