import React from "react";

export default function WhyJoin() {
  return (
    <>
      <div className=" flex flex-col min-w-full  items-center justify-center my-10">
        <div className="mt-10 text-center px-20 md:px-0">
          <span className="text-white text-[26px] font-medium font-['Publica Sans'] leading-[25px]">
            StarKid is perfect for those{" "}
          </span>
          <span className="text-[#d63970] text-[26px] font-medium font-['Publica Sans'] leading-[25px]">
            who want to:
          </span>
        </div>

        <div className=" flex flex-wrap items-center justify-center gap-6 font-bold text-black my-10">
          <div className=" bg-[#00AFAA] px-4 py-2 rounded-2xl">
            {" "}
            Showcase Talent
          </div>
          <div className=" bg-[#D73970] px-4 py-2 rounded-2xl">
            {" "}
            Get Feedback
          </div>
          <div className=" bg-[#FFC56F] px-4 py-2 rounded-2xl"> Learn</div>
          <div className=" bg-[#FFC56F] px-4 py-2 rounded-2xl">
            {" "}
            Build Confidence
          </div>
          <div className=" bg-[#00AFAA] px-4 py-2 rounded-2xl"> Reward</div>
          <div className=" bg-[#D73970] px-4 py-2 rounded-2xl"> Challenges</div>
          <div className=" bg-[#D73970] px-4 py-2 rounded-2xl"> Grow</div>
          <div className=" bg-[#FFC56F] px-4 py-2 rounded-2xl">
            {" "}
            Gain Regognition
          </div>
          <div className=" bg-[#00AFAA] px-4 py-2 rounded-2xl"> New Skills</div>
        </div>
      </div>
    </>
  );
}
