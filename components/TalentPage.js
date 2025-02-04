import Image from "next/image";
import React from "react";
import talent1 from "@/public/asset/talent1.png";
import talent2 from "@/public/asset/talent2.png";
import talent3 from "@/public/asset/talent3.png";

export default function TalentPage() {
  return (
    <div className=" bg-white min-w-full mt-10">
      <div className="text-center mt-10">
        <span className="text-[#1b1d30] text-[26px] font-bold font-['Publica Sans'] leading-normal">
          Turning{" "}
        </span>
        <span className="text-[#d63970] text-[26px] font-bold font-['Publica Sans'] leading-normal">
          Talents into Opportunities!
        </span>
      </div>
      <div className="mt-10 flex items-center justify-center gap-20 flex-wrap  mb-10">
        <div className=" w-[350px] rounded-lg">
          <Image src={talent3} width={350} height={300} alt="talent" />
          <div className=" leading-5 bg-[#00AFAA] rounded-b-lg p-4 text-center">
            <span className="text-white  font-medium font-['Caros']">
              Aryan’s public speaking experience with us gave him the
            </span>{" "}
            <span className="text-white  font-semibold font-['Caros']"></span>
            <span className="text-[#1b1d30]  font-semibold font-['Caros']">
              confidence to participate in a national-level
            </span>{" "}
            <span className="text-white  font-medium font-['Caros']">
              debate competition
            </span>
          </div>
        </div>
        <div className=" w-[350px] rounded-lg">
          <Image src={talent2} width={350} height={300} alt="talent" />
          <div className=" leading-5 bg-[#D73970] rounded-b-lg p-4 text-center">
            <span className="text-white  font-medium font-['Caros']">
              The competitions have improved kid's focus and discipline ,
              helping them{" "}
            </span>
            <span className="text-[#1b1d30]  font-semibold font-['Caros']">
              Perform better in school exams
            </span>{" "}
          </div>
        </div>
        <div className=" w-[350px] rounded-lg">
          <Image src={talent1} width={350} height={300} alt="talent" />
          <div className=" leading-5 bg-[#FFC56F] rounded-b-lg p-4 text-center">
            <span className="text-white  font-medium font-['Caros']">
              StarKid's creative contests boosted Ananya's confidence and led
              her to become
            </span>{" "}
            <span className="text-[#1b1d30]  font-semibold font-['Caros']">
              the Head of her school's Creative Club
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
