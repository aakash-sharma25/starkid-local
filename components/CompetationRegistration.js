import React from "react";
import group from "@/public/asset/group-img.png";
import Image from "next/image";

export default function CompetitionRegistration() {
  return (
    // <div className="flex justify-center items-center min-h-screen p-4">
    //   <div className="relative rounded-2xl p-6 shadow-lg max-w-sm text-center">
    //     {/* Circular Image */}
    //     <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white -mt-20">
    //       <Image
    //         src={group}
    //         alt="Award Ceremony"
    //         className="w-full h-full object-cover"
    //       />
    //     </div>

    //     {/* Highlights */}
    //     <div className="mt-4">
    //       <span className="bg-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
    //         Over 10,000+ registrations
    //       </span>
    //     </div>

    //     <div className="mt-2">
    //       <span className="bg-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
    //         Rated 4.8/5
    //       </span>
    //     </div>

    //     {/* Satisfaction Rate */}
    //     <div className="bg-pink-600 text-white text-lg font-semibold py-2 px-4 rounded-lg mt-4">
    //       98% Satisfaction Rate among parents
    //     </div>

    //     {/* Availability Message */}
    //     <p className="text-white font-semibold mt-4">Last few spots left!</p>

    //     {/* Register Button */}
    //     <button className="mt-4 bg-blue-600 text-white font-bold py-2 px-6 rounded-lg text-lg">
    //       REGISTER NOW
    //     </button>

    //     {/* Price Info */}
    //     <p className="text-white text-sm mt-3">
    //       Participate in any competition for just ₹259!
    //     </p>
    //   </div>
    // </div>
    <div className=" relative mt-20">
      <button className="absolute -left-12 -top-6 w-[150px] bg-[#D73970] rounded-xl py-1 px-3 text-white font-bold">
        Over 10,000+ registrations
      </button>
      <div className="flex flex-col items-center justify-center">
        <Image src={group} alt="groupimage" height={280} width={280} />
        <p className="text-white font-medium mt-4 text-xl">
          Last few spots left!
        </p>

        <button className="mt-4 bg-[#5259AA] font-bold text-white py-4 px-8 rounded-lg text-lg">
          REGISTER NOW
        </button>
        <p className="text-white text-xl mt-3">
          Participate in any competition for just ₹259!
        </p>
        <button className="absolute top-40 -right-10 w-[150px] bg-[#D73970] rounded-xl py-1 px-3 text-white font-bold">
          Rated 4.4 / 5
        </button>
        <button className="absolute bottom-[37%] text-white text-[22px] font-semibold font-['Poppins'] w-[250px] bg-[#D73970]  rounded-2xl">
          98% Satisfaction Rate among parents
        </button>
      </div>
    </div>
  );
}
