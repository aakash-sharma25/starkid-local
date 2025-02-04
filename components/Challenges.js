"use client";

import Image from "next/image";
import talent1 from "@/public/asset/talent1.png";
import img from "@/public/asset/img.png";
import trophy from "@/public/asset/trophy.png";

const challenges = [
  {
    title: "Color Carnival",
    description:
      "Celebrating creativity and imagination through colorful masterpieces.",
    category: "Drawing",
    winner: "Riya",
    // image: "/color-carnival.jpg",
    image: talent1,
    bgColor: "bg-yellow-400",
  },
  {
    title: "Dancing Star",
    description:
      "Theme Options:\n1. Bollywood Beats\n2. Retro Vibes\n3. Seasons in Dance",
    category: "Dancing",
    winner: "Riya",
    // image: "/dancing-star.jpg",
    image: talent1,
    bgColor: "bg-green-400",
  },
  {
    title: "Singing Star",
    description: "A singing competition where young voices shine!",
    category: "Drawing",
    winner: "Charvi",
    // image: "/singing-star.jpg",
    image: talent1,
    bgColor: "bg-pink-400",
  },
];

export default function Challenges() {
  return (
    <div className="min-w-full mx-auto p-6 text-center bg-[#EEEFFC]">
      <h2 className="text-xl font-bold">
        Take a look at the{" "}
        <span className="text-pink-500">Most Exciting Challenges</span> and
        Previous Competition Winners
      </h2>
      <div className="mt-6">
        {challenges.map((challenge, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div
              className={`flex w-full ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <Image
                src={challenge.image}
                className=" w-8/12 "
                alt={challenge.title}
              />
              <div
                className={`p-4  flex flex-col gap-10 justify-between ${
                  challenge.bgColor
                } ${
                  index % 2 === 1 ? "text-left" : "text-right"
                } text-white shadow-md`}
              >
                <div>
                  <span className="text-sm font-semibold py-1 px-2 rounded-2xl ">
                    {challenge.category}
                  </span>
                  <h3 className="text-lg font-bold">{challenge.title}</h3>
                  <p className="text-sm mt-1">{challenge.description}</p>
                  {/* <p className="mt-2 font-semibold">🏆 {challenge.winner}</p> */}
                </div>
                <div className=" flex justify-between items-end">
                  <div className=" flex gap-2 items-center">
                    <Image src={img} alt="img" width={30} height={30} />
                    <p className=" font-semibold text-lg">{challenge.winner}</p>
                  </div>
                  <Image src={trophy} alt="trophy" width={70} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 bg-indigo-600 text-white py-2 px-6 rounded-lg">
        REGISTER NOW
      </button>
    </div>
  );
}
