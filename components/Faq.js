"use client";

import { useState } from "react";
import up from "@/public/asset/up.png"
import down from "@/public/asset/down.png"
import Image from "next/image";
// import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { question: "What happens after I register?" },
  { question: "Can I get a refund if my child decides not to participate?" },
  { question: "How will I know if my payment is secure?" },
  { question: "Are there any special offers for multiple contest entries?" },
];

const description =
  "Unfortunately, we do not offer refunds once the registration process is completed. However, if you face any issues, feel free to reach out to us, and we’ll try our best to assist you.";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex items-center justify-center flex-col text-black">
      <h2 className="text-2xl font-bold mb-6 text-white mt-10">
        Frequently asked questions <span className="text-[#D73970]">(FAQ)</span>
      </h2>
      <div className=" w-full items-center justify-center flex flex-col gap-3 mb-10">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#CBCDE6] p-4 rounded-lg w-[80%] ">
            <div className="w-full flex justify-between items-center text-lg font-semibold">
              {faq.question}
              <button onClick={() => toggleFAQ(index)}>
                {openIndex === index ? <Image src={up} alt="up" width={20}/> : <Image src={down} alt="down" width={20}/>}
              </button>
            </div>
            {openIndex === index && <p className="mt-2">{description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
