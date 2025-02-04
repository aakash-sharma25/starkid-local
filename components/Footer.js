import React from "react";
import starkid from "@/public/asset/star2.png";
import starLogo from "@/public/asset/logo2.png";
import link from "@/public/asset/link.png";
import inst from "@/public/asset/inst.png";
import Image from "next/image";
export default function Footer() {
  return (
    <div className=" bg-white min-w-full p-5">
      <div className=" flex items-center gap-1">
        <Image src={starLogo} height={40} alt="star" />
        <Image src={starkid} height={18} width={78} alt="starkid" />
      </div>
      <div className=" flex items-center gap-3 mt-10">
        <Image src={inst} height={30} alt="starkid" />
        <Image src={link} height={30} alt="star" />
      </div>
      <div className=" flex gap-10 my-10">
        <div className=" flex flex-col gap-5 font-bold text-xl text-black w-4/12">
          <p className=" uppercase font-medium text-2xl text-[#6D6D6D]">Company</p>
          <p className=" ">About Us</p>
          <p className=" ">Privacy Policy</p>
          <p className=" ">Refund and Cancellation Policy</p>
          <p className=" ">Shipping and Delivery</p>
          <p className=" ">Terms and Conditions</p>
        </div>
        <div className="flex  text-xl flex-col gap-5 font-bold text-black ">
          <p className="font-medium uppercase text-2xl text-[#6D6D6D] ">Products</p>
          <p className=" ">StarKid App</p>
        </div>
      </div>
    </div>
  );
}
