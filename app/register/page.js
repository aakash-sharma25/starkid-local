import Image from "next/image";
import React from "react";
import star from "@/public/asset/star-logo.png";
import starkid from "@/public/asset/starkid.png";
import CompetitionRegistration from "@/components/CompetationRegistration";
import TalentPage from "@/components/TalentPage";
import Recomendation from "@/components/Recomendation";
import CompetationDisplay from "@/components/CompetationDisplay";
import HowToRegister from "@/components/HowToRegister";
import PerksOfJoining from "@/components/PerksOfJoining";
import WhyJoin from "@/components/WhyJoin";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Challenges from "@/components/Challenges";
export default function page() {
  return (
    <div className=" min-w-full bg-[#1B1D30] min-h-[100vh]">
      <div className="">
        <div className=" flex items-center justify-center py-[27px]">
          <Image src={star} height={60} alt="star" />
          <Image src={starkid} height={13} alt="starkid" />
        </div>
        <div className=" mx-auto text-center font-bold ">
          <div className=" font-bold space-y-10 ">
            <span className="text-white text-[33px] font-bold font-['Publica Sans'] leading-9">
              Your{" "}
            </span>
            <span className="text-[#d63970] text-[33px] font-bold font-['Publica Sans'] leading-9">
              Child’s Talent{" "}
            </span>
            <span className="text-white text-[33px] font-bold font-['Publica Sans'] leading-9">
              Deserves the Spotlight!
            </span>
          </div>

          <div className="mt-10 ">
            <span className="text-white text-[20px] font-light font-['Caros'] leading-[18px]">
              Join India's Most Trusted Platform to discover and showcase young
              talents through Competitions{" "}
            </span>
            <span className="text-white text-[20px]  font-['Caros'] leading-[18px] font-semibold">
              guided by Experts
            </span>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <CompetitionRegistration />
          <TalentPage />

          <Recomendation />
          <CompetationDisplay />
          <HowToRegister />
          <PerksOfJoining />
          <WhyJoin />
          <Challenges/>
          <Faq/>
          <Footer />
        </div>
      </div>
    </div>
  );
}

// import React from "react";

// export default function page() {
//   return (
//     <div
//       data-layer="landing page 12"
//       className="LandingPage12 w-[100vw] h-[5525px] relative bg-white  overflow-hidden"
//     >
//       <div
//         data-layer="Rectangle 3463737"
//         className="Rectangle3463737  h-[786px] left-[-42px] top-[2797px] absolute bg-[#eeeffc]"
//       />
//       <div
//         data-layer="Rectangle 3463748"
//         className="Rectangle3463748  h-[755px] left-[-22px] top-[3821px] absolute bg-[#eeeffc]"
//       />
//       <div
//         data-layer="Rectangle 3463749"
//         className="Rectangle3463749  h-[683px] left-[-22px] top-[4576px] absolute bg-[#1b1d30]"
//       />
//       <div
//         data-layer="Rectangle 3463736"
//         className="Rectangle3463736 w-[416px] h-[278px] left-[-3px] top-[2519px] absolute bg-[#1b1d30]"
//       />
//       <div
//         data-layer="Rectangle 3463738"
//         className="Rectangle3463738 w-[377px] h-[301px] left-[-1px] top-[3583px] absolute bg-[#1b1d30]"
//       />
//       <div
//         data-layer="Rectangle 3463735"
//         className="Rectangle3463735 w-[379px] h-[647px] left-[-3px] top-[1872px] absolute bg-[#eeeffc]"
//       />
//       <img
//         data-layer="register__1_-removebg-preview 1"
//         className="Register1RemovebgPreview1 w-[65px] h-[65px] left-[34px] top-[2640px] absolute"
//         src="https://via.placeholder.com/65x65"
//       />
//       <div
//         data-layer="Button"
//         className="Button w-[205px] px-5 py-[13px] left-[85px] top-[4505px] absolute bg-[#5259aa] rounded-[10px] justify-center items-center gap-2.5 inline-flex"
//       >
//         <div
//           data-layer="✏️ Label"
//           className="Label text-center text-white text-[17px] font-bold font-['Poppins'] leading-snug"
//         >
//           REGISTER NOW
//         </div>
//       </div>
//       <div
//         data-layer="Explore Our Exciting Live Competitions"
//         className="ExploreOurExcitingLiveCompetitions w-[298px] left-[43px] top-[1923px] absolute text-center"
//       >
//         <span class="text-[#1b1d30] text-[26px] font-medium font-['Publica Sans'] leading-normal">
//           Explore Our Exciting{" "}
//         </span>
//         <span class="text-[#d63970] text-[26px] font-medium font-['Publica Sans'] leading-normal">
//           Live Competitions
//         </span>
//       </div>
//       <div
//         data-layer="How to Register in Just 3 Simple Steps?"
//         className="HowToRegisterInJust3SimpleSteps w-[298px] left-[34px] top-[2551px] absolute text-center"
//       >
//         <span class="text-[#d63970] text-[26px] font-medium font-['Publica Sans'] leading-normal">
//           How to Register
//         </span>
//         <span class="text-white text-[26px] font-medium font-['Publica Sans'] leading-normal">
//           {" "}
//           in Just 3 Simple Steps?
//         </span>
//       </div>
//       <div
//         data-layer="StarKid is perfect for those who want to:"
//         className="StarkidIsPerfectForThoseWhoWantTo w-64 left-[60px] top-[3616px] absolute text-center"
//       >
//         <span class="text-white text-[26px] font-medium font-['Publica Sans'] leading-[25px]">
//           StarKid is perfect for those{" "}
//         </span>
//         <span class="text-[#d63970] text-[26px] font-medium font-['Publica Sans'] leading-[25px]">
//           who want to:
//         </span>
//       </div>
//       <div
//         data-layer="Take a look at the Most Exciting Challenges and Previous Competition Winners"
//         className="TakeALookAtTheMostExcitingChallengesAndPreviousCompetitionWinners w-[309px] left-[32px] top-[3905px] absolute text-center"
//       >
//         <span class="text-[#1b1d30] text-[26px] font-medium font-['Publica Sans'] leading-[25px]">
//           Take a look at the
//         </span>
//         <span class="text-[#d63970] text-[26px] font-medium font-['Publica Sans'] leading-[25px]">
//           {" "}
//           Most Exciting Challenges
//         </span>
//         <span class="text-[#1b1d30] text-[26px] font-medium font-['Publica Sans'] leading-[25px]">
//           {" "}
//           and Previous Competition Winners
//         </span>
//       </div>
//       <div
//         data-layer="Frequently asked questions (FAQ)"
//         className="FrequentlyAskedQuestionsFaq w-[332px] left-[22px] top-[4611px] absolute"
//       >
//         <span class="text-white text-[26px] font-medium font-['Publica Sans'] leading-[25px]">
//           Frequently asked questions{" "}
//         </span>
//         <span class="text-[#d63970] text-[26px] font-medium font-['Publica Sans'] leading-[25px]">
//           (FAQ)
//         </span>
//       </div>
//       <img
//         data-layer="Language (3) 1"
//         className="Language31 w-[350px] h-[495.05px] left-[12px] top-[1995px] absolute"
//         src="https://via.placeholder.com/350x495"
//       />
//       <div
//         data-layer="Click on ‘Register Now’"
//         className="ClickOnRegisterNow w-[65px] left-[34px] top-[2716px] absolute text-center text-white text-[15px] font-semibold font-['Poppins'] leading-none"
//       >
//         Click on ‘Register Now’
//       </div>
//       <div
//         data-layer="Make the payment"
//         className="MakeThePayment w-[74px] left-[260px] top-[2718px] absolute text-center text-white text-[15px] font-semibold font-['Poppins'] leading-[15px]"
//       >
//         Make the payment
//       </div>
//       <div
//         data-layer="Choose your Competition"
//         className="ChooseYourCompetition w-[93px] left-[135px] top-[2718px] absolute text-center text-white text-[15px] font-semibold font-['Poppins'] leading-[15px]"
//       >
//         Choose your Competition
//       </div>
//       <div
//         data-layer="Arrow right alt"
//         className="ArrowRightAlt w-[50px] h-[50px] left-[215px] top-[2644px] absolute  overflow-hidden"
//       >
//         <div
//           data-layer="Arrow forward"
//           className="ArrowForward w-24 h-24 left-0 top-0 absolute"
//         />
//       </div>
//       <div
//         data-layer="Arrow right alt"
//         className="ArrowRightAlt w-[50px] h-[50px] left-[103px] top-[2644px] absolute  overflow-hidden"
//       >
//         <div
//           data-layer="Arrow forward"
//           className="ArrowForward w-24 h-24 left-0 top-0 absolute"
//         />
//       </div>
//       <img
//         data-layer="productivity-removebg-preview 1"
//         className="ProductivityRemovebgPreview1 w-[65px] h-[65px] left-[151px] top-[2640px] absolute"
//         src="https://via.placeholder.com/65x65"
//       />
//       <div
//         data-layer="Rectangle 3463739"
//         className="Rectangle3463739 w-[150px] h-[33px] left-[8px] top-[3704px] absolute bg-[#00afaa] rounded-[10px]"
//       />
//       <div
//         data-layer="Showcase Talent"
//         className="ShowcaseTalent left-[21px] top-[3711px] absolute text-center text-[#1b1d30] text-[15px] font-semibold font-['Caros'] leading-tight"
//       >
//         Showcase Talent
//       </div>
//       <div
//         data-layer="Rectangle 3463740"
//         className="Rectangle3463740 w-[104px] h-[33px] left-[166px] top-[3704px] absolute bg-[#d63970] rounded-[10px]"
//       />
//       <div
//         data-layer="Rectangle 3463741"
//         className="Rectangle3463741 w-[87px] h-[33px] left-[278px] top-[3704px] absolute bg-[#ffc56f] rounded-[10px]"
//       />
//       <div
//         data-layer="Get Feedback"
//         className="GetFeedback left-[171px] top-[3711px] absolute text-center text-[#1b1d30] text-sm font-semibold font-['Caros'] leading-tight"
//       >
//         Get Feedback
//       </div>
//       <div
//         data-layer="Learn"
//         className="Learn left-[300px] top-[3711px] absolute text-center text-[#1b1d30] text-[15px] font-semibold font-['Caros'] leading-tight"
//       >
//         Learn
//       </div>
//       <div
//         data-layer="Rectangle 3463742"
//         className="Rectangle3463742 w-[150px] h-[33px] left-[7px] top-[3752px] absolute bg-[#ffc56f] rounded-[10px]"
//       />
//       <div
//         data-layer="Build Confidence"
//         className="BuildConfidence left-[20px] top-[3759px] absolute text-center text-[#1b1d30] text-[15px] font-semibold font-['Caros'] leading-tight"
//       >
//         Build Confidence
//       </div>
//       <div
//         data-layer="Rectangle 3463743"
//         className="Rectangle3463743 w-[104px] h-[33px] left-[259px] top-[3752px] absolute bg-[#d63970] rounded-[10px]"
//       />
//       <div
//         data-layer="Rectangle 3463744"
//         className="Rectangle3463744 w-[87px] h-[33px] left-[164px] top-[3752px] absolute bg-[#00afaa] rounded-[10px]"
//       />
//       <div
//         data-layer="Challenges"
//         className="Challenges left-[270px] top-[3759px] absolute text-center text-[#1b1d30] text-[15px] font-semibold font-['Caros'] leading-tight"
//       >
//         Challenges
//       </div>
//       <div
//         data-layer="Reward"
//         className="Reward left-[180px] top-[3759px] absolute text-center text-[#1b1d30] text-[15px] font-semibold font-['Caros'] leading-tight"
//       >
//         Reward
//       </div>
//       <div
//         data-layer="Rectangle 3463745"
//         className="Rectangle3463745 w-36 h-[33px] left-[103px] top-[3800px] absolute bg-[#ffc56f] rounded-[10px]"
//       />
//       <div
//         data-layer="Gain Recognition"
//         className="GainRecognition left-[113px] top-[3807px] absolute text-center text-[#1b1d30] text-[15px] font-semibold font-['Caros'] leading-tight"
//       >
//         Gain Recognition
//       </div>
//       <div
//         data-layer="Rectangle 3463746"
//         className="Rectangle3463746 w-[113px] h-[33px] left-[255px] top-[3800px] absolute bg-[#00afaa] rounded-[10px]"
//       />
//       <div
//         data-layer="Rectangle 3463747"
//         className="Rectangle3463747 w-[87px] h-[33px] left-[8px] top-[3800px] absolute bg-[#d63970] rounded-[10px]"
//       />
//       <div
//         data-layer="New Skills"
//         className="NewSkills left-[276px] top-[3806px] absolute text-center text-[#1b1d30] text-[15px] font-semibold font-['Caros'] leading-tight"
//       >
//         New Skills
//       </div>
//       <div
//         data-layer="Grow"
//         className="Grow left-[32px] top-[3807px] absolute text-center text-[#1b1d30] text-[15px] font-semibold font-['Caros'] leading-tight"
//       >
//         Grow
//       </div>
//       <div
//         data-layer="Rectangle 3463706"
//         className="Rectangle3463706 w-80 h-[137px] left-[27px] top-[4339px] absolute bg-[#d63970]"
//       />
//       <div
//         data-layer="Frame 1000008615"
//         className="Frame1000008615 w-10 h-[15px] p-[5.51px] left-[300px] top-[4346px] absolute bg-[#716f6f]/50 rounded-[27.50px] justify-center items-center gap-[5.51px] inline-flex"
//       >
//         <div
//           data-layer="Drawing"
//           className="Drawing text-white text-[6.89px] font-semibold font-['Caros'] leading-[8.41px]"
//         >
//           Drawing
//         </div>
//       </div>
//       <div
//         data-layer="Frame 1000008616"
//         className="Frame1000008616 h-[38px] left-[215px] top-[4363px] absolute flex-col justify-start items-start gap-0.5 inline-flex"
//       >
//         <div data-layer="Frame 2608868" className="Frame2608868" />
//         <div
//           data-layer="A singing competition where young voices shine!"
//           className="ASingingCompetitionWhereYoungVoicesShine w-[124px] text-right text-white text-[8px] font-normal font-['Caros'] leading-[9.76px]"
//         >
//           A singing competition where young voices shine!
//         </div>
//       </div>
//       <div
//         data-layer="Singing Star"
//         className="SingingStar w-[129px] left-[210px] top-[4362px] absolute text-right text-white text-xs font-semibold font-['Caros'] leading-none"
//       >
//         Singing Star
//       </div>
//       <div
//         data-layer="Group 1000008573"
//         className="Group1000008573 w-[195.94px] h-[170.98px] left-[154.16px] top-[4332.05px] absolute"
//       >
//         <div
//           data-layer="Group 1000007711"
//           className="Group1000007711 w-[195.94px] h-[170.98px] left-0 top-0 absolute"
//         ></div>
//         <div
//           data-layer="Group 1000008496"
//           className="Group1000008496 w-[163.34px] h-[126.01px] left-[22.84px] top-[12.66px] absolute"
//         ></div>
//         <div
//           data-layer="Group 1000008498"
//           className="Group1000008498 w-[163.34px] h-[126.01px] left-[22.84px] top-[12.66px] absolute"
//         ></div>
//       </div>
//       <div
//         data-layer="image"
//         className="Image w-[185px] h-[137px] left-[27px] top-[4339px] absolute bg-gradient-to-b from-black to-black"
//       />
//       <img
//         data-layer="gettyimages-140825495-612x612-removebg-preview 1"
//         className="Gettyimages140825495612x612RemovebgPreview1 w-[232px] h-[255px] left-[62px] top-[244px] absolute rounded-bl-[45px] rounded-br-[45px]"
//         src="https://via.placeholder.com/232x255"
//       />
//       <img
//         data-layer="image 122"
//         className="Image122 w-[38px] h-10 left-[306px] top-[4431px] absolute"
//         src="https://via.placeholder.com/38x40"
//       />
//       <div
//         data-layer="Frame 2608868"
//         className="Frame2608868 left-[220px] top-[4454px] absolute justify-start items-center gap-[3px] inline-flex"
//       >
//         <img
//           data-layer="image"
//           className="Image w-4 h-4 rounded-full border border-white"
//           src="https://via.placeholder.com/16x16"
//         />
//         <div
//           data-layer="Charvi"
//           className="Charvi opacity-90 text-white text-xs font-medium font-['Caros'] leading-[14.64px]"
//         >
//           Charvi
//         </div>
//       </div>
//       <div
//         data-layer="Rectangle 3463707"
//         className="Rectangle3463707 w-80 h-[137px] left-[27px] top-[4182px] absolute bg-[#00afaa]"
//       />
//       <div
//         data-layer="Frame 1000008617"
//         className="Frame1000008617 w-10 h-[15px] p-[5.51px] left-[34px] top-[4190px] absolute bg-[#716f6f]/50 rounded-[27.50px] justify-center items-center gap-[5.51px] inline-flex"
//       >
//         <div
//           data-layer="Dancing"
//           className="Dancing text-white text-[6.89px] font-semibold font-['Caros'] leading-[8.41px]"
//         >
//           Dancing
//         </div>
//       </div>
//       <div
//         data-layer="Frame 1000008618"
//         className="Frame1000008618 h-[33px] left-[37px] top-[4206px] absolute flex-col justify-start items-start gap-0.5 inline-flex"
//       >
//         <div
//           data-layer="Dancing Star"
//           className="DancingStar self-stretch text-white text-xs font-semibold font-['Caros'] leading-none"
//         >
//           Dancing Star
//         </div>
//         <div data-layer="Frame 2608868" className="Frame2608868" />
//       </div>
//       <div
//         data-layer="Group 1000008588"
//         className="Group1000008588 w-[170px] h-[137px] left-[27px] top-[4183px] absolute"
//       >
//         <div
//           data-layer="Mask group"
//           className="MaskGroup w-[170px] h-[137px] left-0 top-0 absolute"
//         >
//           <div
//             data-layer="Rectangle 3463537"
//             className="Rectangle3463537 w-[170px] h-[137px] left-0 top-0 absolute bg-[#ed6388]"
//           />
//           <div
//             data-layer="Group 1000007711"
//             className="Group1000007711 w-[195.94px] h-[170.98px] left-[-22.84px] top-[-6.95px] absolute"
//           ></div>
//         </div>
//         <div
//           data-layer="Group 1000008496"
//           className="Group1000008496 w-[163.34px] h-[126.01px] left-0 top-[5.71px] absolute"
//         ></div>
//         <div
//           data-layer="Group 1000008498"
//           className="Group1000008498 w-[163.34px] h-[126.01px] left-0 top-[5.71px] absolute"
//         ></div>
//       </div>
//       <div
//         data-layer="image"
//         className="Image w-[169px] h-[137px] left-[178px] top-[4182px] absolute bg-gradient-to-b from-black to-black"
//       />
//       <img
//         data-layer="image 123"
//         className="Image123 w-[38px] h-10 left-[33px] top-[4273px] absolute"
//         src="https://via.placeholder.com/38x40"
//       />
//       <div
//         data-layer="Frame 1000008619"
//         className="Frame1000008619 left-[118px] top-[4295px] absolute justify-start items-center gap-[3px] inline-flex"
//       >
//         <img
//           data-layer="image"
//           className="Image w-4 h-4 rounded-full border border-white"
//           src="https://via.placeholder.com/16x16"
//         />
//         <div
//           data-layer="Riya"
//           className="Riya opacity-90 text-white text-xs font-medium font-['Caros'] leading-[14.64px]"
//         >
//           Riya
//         </div>
//       </div>
//       <div
//         data-layer="Rectangle 3463708"
//         className="Rectangle3463708 w-80 h-[137px] left-[27px] top-[4025px] absolute bg-[#ffc56f]"
//       />
//       <div
//         data-layer="Frame 1000008620"
//         className="Frame1000008620 w-10 h-[15px] p-[5.51px] left-[300px] top-[4032px] absolute bg-[#716f6f]/50 rounded-[27.50px] justify-center items-center gap-[5.51px] inline-flex"
//       >
//         <div
//           data-layer="Drawing"
//           className="Drawing text-white text-[6.89px] font-semibold font-['Caros'] leading-[8.41px]"
//         >
//           Drawing
//         </div>
//       </div>
//       <div
//         data-layer="Frame 1000008621"
//         className="Frame1000008621 h-[33px] left-[251px] top-[4050px] absolute flex-col justify-start items-start gap-0.5 inline-flex"
//       >
//         <div
//           data-layer="Color Carnival"
//           className="ColorCarnival self-stretch text-white text-xs font-semibold font-['Caros'] leading-none"
//         >
//           Color Carnival
//         </div>
//         <div data-layer="Frame 2608868" className="Frame2608868" />
//       </div>
//       <div
//         data-layer="Group 1000008589"
//         className="Group1000008589 w-[195.94px] h-[170.98px] left-[154.16px] top-[4018.05px] absolute"
//       >
//         <div
//           data-layer="Group 1000007711"
//           className="Group1000007711 w-[195.94px] h-[170.98px] left-0 top-0 absolute"
//         ></div>
//         <div
//           data-layer="Group 1000008496"
//           className="Group1000008496 w-[160.61px] h-[126.01px] left-[22.84px] top-[12.66px] absolute"
//         ></div>
//         <div
//           data-layer="Group 1000008498"
//           className="Group1000008498 w-[160.61px] h-[126.01px] left-[22.84px] top-[12.66px] absolute"
//         ></div>
//       </div>
//       <div
//         data-layer="image"
//         className="Image w-[185px] h-[137px] left-[27px] top-[4025px] absolute bg-gradient-to-b from-black to-black"
//       />
//       <img
//         data-layer="image 124"
//         className="Image124 w-[38px] h-10 left-[303px] top-[4117px] absolute"
//         src="https://via.placeholder.com/38x40"
//       />
//       <div
//         data-layer="Frame 1000008622"
//         className="Frame1000008622 left-[215px] top-[4143px] absolute justify-start items-center gap-[3px] inline-flex"
//       >
//         <img
//           data-layer="image"
//           className="Image w-4 h-4 rounded-full border border-white"
//           src="https://via.placeholder.com/16x16"
//         />
//         <div
//           data-layer="Riya"
//           className="Riya opacity-90 text-white text-xs font-medium font-['Caros'] leading-[14.64px]"
//         >
//           Riya
//         </div>
//       </div>
//       <div
//         data-layer="Rectangle 3463709"
//         className="Rectangle3463709 w-[164px] h-[136px] left-[27px] top-[4183px] absolute bg-[#d9d9d9]/0"
//       />
//       <div
//         data-layer="Rectangle 3463710"
//         className="Rectangle3463710 w-[346px] h-[41px] left-[14px] top-[4690px] absolute bg-[#cbcde6] rounded-lg"
//       />
//       <div
//         data-layer="Q. What happens after I register?"
//         className="QWhatHappensAfterIRegister left-[26px] top-[4702px] absolute text-black text-[13px] font-semibold font-['Caros']"
//       >
//         Q. What happens after I register?
//       </div>
//       <div
//         data-layer="Rectangle 3463712"
//         className="Rectangle3463712 w-[346px] h-[41px] left-[14px] top-[4873px] absolute bg-[#cbcde6] rounded-lg"
//       />
//       <div
//         data-layer="Q. How will I know if my payment is secure?"
//         className="QHowWillIKnowIfMyPaymentIsSecure left-[26px] top-[4881px] absolute text-black text-[13px] font-semibold font-['Caros']"
//       >
//         Q. How will I know if my payment is secure?
//       </div>
//       <div
//         data-layer="Rectangle 3463713"
//         className="Rectangle3463713 w-[346px] h-12 left-[13px] top-[4923px] absolute bg-[#cbcde6] rounded-lg"
//       />
//       <div
//         data-layer="Q. Are there any special offers for multiple contest entries?"
//         className="QAreThereAnySpecialOffersForMultipleContestEntries w-[269px] left-[29px] top-[4929px] absolute text-black text-[13px] font-semibold font-['Caros']"
//       >
//         Q. Are there any special offers for multiple contest entries?
//       </div>
//       <div
//         data-layer="Rectangle 3463711"
//         className="Rectangle3463711 w-[346px] h-[126px] left-[14px] top-[4739px] absolute bg-[#cbcde6] rounded-lg"
//       />
//       <div
//         data-layer="Q. Can I get a refund if my child decides not to participate?"
//         className="QCanIGetARefundIfMyChildDecidesNotToParticipate w-[296px] left-[26px] top-[4751px] absolute text-black text-[13px] font-semibold font-['Caros']"
//       >
//         Q. Can I get a refund if my child decides not <br />
//         to participate?
//       </div>
//       <div
//         data-layer="A. Unfortunately, we do not offer refunds once the registration process is completed. However, if you face any issues, feel free to reach out to us, and we’ll try our best to assist you."
//         className="AUnfortunatelyWeDoNotOfferRefundsOnceTheRegistrationProcessIsCompletedHoweverIfYouFaceAnyIssuesFeelFreeToReachOutToUsAndWeLlTryOurBestToAssistYou w-[296px] left-[25px] top-[4792px] absolute"
//       >
//         <span class="text-black text-[15px] font-medium font-['Caros']">
//           A.{" "}
//         </span>
//         <span class="text-black text-xs font-normal font-['Caros']">
//           Unfortunately, we do not offer refunds once the registration process
//           is completed. However, if you face any issues, feel free to reach out
//           to us, and we’ll try our best to assist you.
//         </span>
//       </div>
//       <img
//         data-layer="online-payment 1"
//         className="OnlinePayment1 w-[65px] h-[65px] left-[264px] top-[2640px] absolute"
//         src="https://via.placeholder.com/65x65"
//       />
//       <div
//         data-layer="Group 1000008590"
//         className="Group1000008590 origin-top-left rotate-180 w-[59px] h-14 left-[381px] top-[1880px] absolute"
//       ></div>
//       <div
//         data-layer="Group 1000008586"
//         className="Group1000008586 origin-top-left rotate-[-1.19deg] w-[55.01px] h-[55.76px] left-[6px] top-[1881.15px] absolute"
//       ></div>
//       <div
//         data-layer="Rectangle 3463732"
//         className="Rectangle3463732 w-[375px] h-[716px] left-0 top-0 absolute bg-[#1b1d30]"
//       />
//       <div
//         data-layer="Rectangle 3463734"
//         className="Rectangle3463734 w-[416px] h-[803px] left-[-30px] top-[1069px] absolute bg-[#1b1d30]"
//       />
//       <img
//         data-layer="Untitled_design__3_-removebg-preview 1"
//         className="UntitledDesign3RemovebgPreview1 w-[274px] h-[268px] left-[51px] top-[276px] absolute"
//         src="https://via.placeholder.com/274x268"
//       />
//       <div
//         data-layer="Your Child’s Talent Deserves the Spotlight!"
//         className="YourChildSTalentDeservesTheSpotlight w-[361px] left-[7px] top-[66px] absolute text-center"
//       >
//         <span class="text-white text-[33px] font-medium font-['Publica Sans'] leading-9">
//           Your{" "}
//         </span>
//         <span class="text-[#d63970] text-[33px] font-medium font-['Publica Sans'] leading-9">
//           Child’s Talent{" "}
//         </span>
//         <span class="text-white text-[33px] font-medium font-['Publica Sans'] leading-9">
//           Deserves the Spotlight!
//         </span>
//       </div>
//       <div
//         data-layer="Message + Send Time"
//         className="MessageSendTime h-5 left-[248px] top-[366px] absolute flex-col justify-end items-end gap-3 inline-flex"
//       >
//         <div
//           data-layer="Bubble + Tail"
//           className="BubbleTail self-stretch justify-end items-end inline-flex"
//         >
//           <div
//             data-layer="Tail"
//             className="Tail w-[0.10px] h-5 flex-col justify-start items-start inline-flex"
//           >
//             <div
//               data-layer="Container"
//               className="Container w-[11px] flex-col justify-center items-center flex"
//             />
//           </div>
//         </div>
//       </div>
//       <div
//         data-layer="Message + Send Time"
//         className="MessageSendTime h-[34px] left-[281px] top-[352px] absolute flex-col justify-end items-end gap-3 inline-flex"
//       >
//         <div data-layer="Bubble + Tail" className="BubbleTail self-stretch" />
//       </div>
//       <div
//         data-layer="MessageBubble"
//         className="Messagebubble left-[74px] top-[499px] absolute flex-col justify-end items-end gap-2 inline-flex"
//       >
//         <div
//           data-layer="Message + Send Time"
//           className="MessageSendTime h-14 rounded-[10px] flex-col justify-start items-start gap-3 flex"
//         >
//           <div
//             data-layer="Bubble + Tail"
//             className="BubbleTail self-stretch rounded-[20px] justify-end items-end inline-flex"
//           >
//             <div
//               data-layer="Bubble"
//               className="Bubble grow shrink basis-0 self-stretch px-3 py-1.5 bg-[#d63970] rounded-lg justify-start items-start flex"
//             >
//               <div
//                 data-layer="✏️ Message"
//                 className="Message grow shrink basis-0 text-center text-white text-[17px] font-semibold font-['Poppins'] leading-snug"
//               >
//                 98% Satisfaction Rate among parents
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         data-layer="Last few spots left!"
//         className="LastFewSpotsLeft w-[298px] left-[39px] top-[574px] absolute text-center text-white text-lg font-medium font-['Inter'] leading-snug"
//       >
//         Last few spots left!
//       </div>
//       <div
//         data-layer="Join India's Most Trusted Platform to discover and showcase young talents through Competitions guided by Experts"
//         className="JoinIndiaSMostTrustedPlatformToDiscoverAndShowcaseYoungTalentsThroughCompetitionsGuidedByExperts w-[337px] left-[20px] top-[150px] absolute text-center"
//       >
//         <span class="text-white text-[15px] font-light font-['Caros'] leading-[18px]">
//           Join India's Most Trusted Platform to discover and showcase young
//           talents through Competitions{" "}
//         </span>
//         <span class="text-white text-[15px] font-medium font-['Caros'] leading-[18px]">
//           guided by Experts
//         </span>
//       </div>
//       <div
//         data-layer="Rectangle 3463733"
//         className="Rectangle3463733 w-[379px] h-[375px] left-0 top-[716px] absolute bg-[#eeeffc]"
//       />
//       <div
//         data-layer="Turning Talents into Opportunities!"
//         className="TurningTalentsIntoOpportunities w-[324px] left-[25px] top-[742px] absolute text-center"
//       >
//         <span class="text-[#1b1d30] text-[26px] font-medium font-['Publica Sans'] leading-normal">
//           Turning{" "}
//         </span>
//         <span class="text-[#d63970] text-[26px] font-medium font-['Publica Sans'] leading-normal">
//           Talents into Opportunities!
//         </span>
//       </div>
//       <div
//         data-layer="Hear It from the Parents: Their Stories, Their Trust!"
//         className="HearItFromTheParentsTheirStoriesTheirTrust w-[313px] left-[28px] top-[1129px] absolute text-center"
//       >
//         <span class="text-white text-[26px] font-medium font-['Publica Sans'] leading-normal">
//           Hear It from
//         </span>
//         <span class="text-[#d63970] text-[26px] font-medium font-['Publica Sans'] leading-normal">
//           {" "}
//           the Parents:
//         </span>
//         <span class="text-white text-[26px] font-medium font-['Publica Sans'] leading-normal">
//           {" "}
//           Their Stories, Their Trust!
//         </span>
//       </div>
//       <img
//         data-layer="WhatsApp Image 2025-01-11 at 12.01.08 4"
//         className="WhatsappImage20250111At1201084 w-[228px] h-[177px] left-[69px] top-[1398px] absolute rounded-lg"
//         src="https://via.placeholder.com/228x177"
//       />
//       <img
//         data-layer="WhatsApp Image 2025-01-11 at 12.01.08 5"
//         className="WhatsappImage20250111At1201085 w-[227px] h-[173px] left-[70px] top-[1595px] absolute rounded-lg"
//         src="https://via.placeholder.com/227x173"
//       />
//       <img
//         data-layer="WhatsApp Image 2025-01-11 at 12.01.51 2"
//         className="WhatsappImage20250111At1201512 w-[228px] h-[166px] left-[69px] top-[1212px] absolute rounded-lg"
//         src="https://via.placeholder.com/228x166"
//       />
//       <img
//         data-layer="Untitled_design__2_-removebg-preview 5"
//         className="UntitledDesign2RemovebgPreview5 w-[50px] h-[50px] left-[272px] top-[1378px] absolute"
//         src="https://via.placeholder.com/50x50"
//       />
//       <img
//         data-layer="Untitled_design__2_-removebg-preview 6"
//         className="UntitledDesign2RemovebgPreview6 w-[50px] h-[50px] left-[272px] top-[1192px] absolute"
//         src="https://via.placeholder.com/50x50"
//       />
//       <img
//         data-layer="Untitled_design__2_-removebg-preview 7"
//         className="UntitledDesign2RemovebgPreview7 w-[50px] h-[50px] left-[272px] top-[1570px] absolute"
//         src="https://via.placeholder.com/50x50"
//       />
//       <div
//         data-layer="Button"
//         className="Button w-[205px] px-5 py-[13px] left-[80px] top-[1793px] absolute bg-[#5259aa] rounded-[10px] justify-center items-center gap-2.5 inline-flex"
//       >
//         <div
//           data-layer="✏️ Label"
//           className="Label text-center text-white text-[17px] font-bold font-['Poppins'] leading-snug"
//         >
//           REGISTER NOW
//         </div>
//       </div>
//       <div
//         data-layer="Button"
//         className="Button w-[205px] px-5 py-[13px] left-[84px] top-[603px] absolute bg-[#5259aa] rounded-[10px] justify-center items-center gap-2.5 inline-flex"
//       >
//         <div
//           data-layer="✏️ Label"
//           className="Label text-center text-white text-[17px] font-bold font-['Poppins'] leading-snug"
//         >
//           REGISTER NOW
//         </div>
//       </div>
//       <div
//         data-layer="Rectangle 3463726"
//         className="Rectangle3463726 w-[165px] h-[191px] left-[19px] top-[3092px] absolute bg-[#1b1d30] rounded-xl"
//       />
//       <div
//         data-layer="Rectangle 3463727"
//         className="Rectangle3463727 w-[165px] h-[191px] left-[19px] top-[2887px] absolute bg-[#1b1d30] rounded-xl"
//       />
//       <div
//         data-layer="Rectangle 3463728"
//         className="Rectangle3463728 w-[165px] h-[191px] left-[195px] top-[2887px] absolute bg-[#1b1d30] rounded-xl"
//       />
//       <div
//         data-layer="Rectangle 3463729"
//         className="Rectangle3463729 w-[165px] h-[191px] left-[195px] top-[3092px] absolute bg-[#1b1d30] rounded-xl"
//       />
//       <div
//         data-layer="Rectangle 3463730"
//         className="Rectangle3463730 w-[341px] h-[191px] left-[19px] top-[3297px] absolute bg-[#1b1d30] rounded-xl"
//       />
//       <div
//         data-layer="Rectangle 3463731"
//         className="Rectangle3463731 w-[165px] h-[191px] left-[19px] top-[3092px] absolute bg-[#5259aa]/0 rounded-xl"
//       />
//       <img
//         data-layer="Winner's Certificate 3"
//         className="WinnerSCertificate3 w-[150px] h-[106.05px] left-[203px] top-[2914px] absolute"
//         src="https://via.placeholder.com/150x106"
//       />
//       <div
//         data-layer="Certificates for all"
//         className="CertificatesForAll left-[212px] top-[3041px] absolute text-center text-white text-[15px] font-semibold font-['Caros'] leading-tight"
//       >
//         Certificates for all
//       </div>
//       <div
//         data-layer="Live online workshop"
//         className="LiveOnlineWorkshop left-[115px] top-[3457px] absolute text-center text-white text-[15px] font-semibold font-['Caros'] leading-tight"
//       >
//         Live online workshop
//       </div>
//       <div
//         data-layer="Personalised Feedback"
//         className="PersonalisedFeedback left-[199px] top-[3250px] absolute text-center text-white text-sm font-semibold font-['Caros'] leading-tight"
//       >
//         Personalised Feedback
//       </div>
//       <div
//         data-layer="Featured in Weekly Showcase"
//         className="FeaturedInWeeklyShowcase w-[168px] left-[9px] top-[3245px] absolute text-center text-white text-[15px] font-semibold font-['Caros'] leading-[15px]"
//       >
//         Featured in Weekly Showcase
//       </div>
//       <div
//         data-layer="Medals for winners"
//         className="MedalsForWinners left-[33px] top-[3041px] absolute text-center text-white text-[15px] font-semibold font-['Caros'] leading-tight"
//       >
//         Medals for winners
//       </div>
//       <img
//         data-layer="Untitled_design__1_-removebg-preview 3"
//         className="UntitledDesign1RemovebgPreview3 w-[250px] h-[250px] left-[-23px] top-[2842px] absolute"
//         src="https://via.placeholder.com/250x250"
//       />
//       <img
//         data-layer="5a354aecfa8ebbf03466b635081c412b-removebg-preview 3"
//         className="A354aecfa8ebbf03466b635081c412bRemovebgPreview3 w-[165px] h-[148px] left-[195px] top-[3092px] absolute"
//         src="https://via.placeholder.com/165x148"
//       />
//       <img
//         data-layer="Grey_Black_Simple_Fashion_Instagram_Post-removebg-preview 4"
//         className="GreyBlackSimpleFashionInstagramPostRemovebgPreview4 w-[130px] h-[137px] left-[37px] top-[3102px] absolute"
//         src="https://via.placeholder.com/130x137"
//       />
//       <div
//         data-layer="Rectangle 3463732"
//         className="Rectangle3463732 w-[165px] h-[191px] left-[19px] top-[3092px] absolute bg-[#1b1d30] rounded-xl"
//       />
//       <div
//         data-layer="Rectangle 3463733"
//         className="Rectangle3463733 w-[165px] h-[191px] left-[19px] top-[2887px] absolute bg-[#1b1d30] rounded-xl"
//       />
//       <div
//         data-layer="Rectangle 3463734"
//         className="Rectangle3463734 w-[165px] h-[191px] left-[195px] top-[2887px] absolute bg-[#1b1d30] rounded-xl"
//       />
//       <div
//         data-layer="Rectangle 3463735"
//         className="Rectangle3463735 w-[165px] h-[191px] left-[195px] top-[3092px] absolute bg-[#1b1d30] rounded-xl"
//       />
//       <div
//         data-layer="Rectangle 3463736"
//         className="Rectangle3463736 w-[341px] h-[191px] left-[19px] top-[3297px] absolute bg-[#1b1d30] rounded-xl"
//       />
//       <div
//         data-layer="Rectangle 3463737"
//         className="Rectangle3463737 w-[165px] h-[191px] left-[19px] top-[3092px] absolute bg-[#5259aa]/0 rounded-xl"
//       />
//       <img
//         data-layer="Winner's Certificate 4"
//         className="WinnerSCertificate4 w-[150px] h-[106.05px] left-[203px] top-[2914px] absolute"
//         src="https://via.placeholder.com/150x106"
//       />
//       <div
//         data-layer="Certificates for all"
//         className="CertificatesForAll left-[212px] top-[3041px] absolute text-center text-white text-[15px] font-semibold font-['Caros'] leading-tight"
//       >
//         Certificates for all
//       </div>
//       <div
//         data-layer="Expert Feedback"
//         className="ExpertFeedback left-[220px] top-[3250px] absolute text-center text-white text-sm font-semibold font-['Caros'] leading-tight"
//       >
//         Expert Feedback
//       </div>
//       <div
//         data-layer="Featured in Weekly Showcase"
//         className="FeaturedInWeeklyShowcase w-[156px] left-[24px] top-[3247px] absolute text-center text-white text-[15px] font-semibold font-['Caros'] leading-[15px]"
//       >
//         Featured in Weekly Showcase
//       </div>
//       <div
//         data-layer="Medals for winners"
//         className="MedalsForWinners left-[33px] top-[3041px] absolute text-center text-white text-[15px] font-semibold font-['Caros'] leading-tight"
//       >
//         Medals for winners
//       </div>
//       <img
//         data-layer="5a354aecfa8ebbf03466b635081c412b-removebg-preview 4"
//         className="A354aecfa8ebbf03466b635081c412bRemovebgPreview4 w-[165px] h-[148px] left-[195px] top-[3092px] absolute rounded-tl-xl rounded-tr-xl"
//         src="https://via.placeholder.com/165x148"
//       />
//       <img
//         data-layer="Grey_Black_Simple_Fashion_Instagram_Post-removebg-preview 5"
//         className="GreyBlackSimpleFashionInstagramPostRemovebgPreview5 w-[130px] h-[131px] left-[37px] top-[3105px] absolute"
//         src="https://via.placeholder.com/130x131"
//       />
//       <div
//         data-layer="Live online workshop"
//         className="LiveOnlineWorkshop left-[110px] top-[3452px] absolute text-center text-white text-[15px] font-semibold font-['Caros'] leading-tight"
//       >
//         Live online workshop
//       </div>
//       <div
//         data-layer="Button"
//         className="Button w-[205px] px-5 py-[13px] left-[88px] top-[3506px] absolute bg-[#5259aa] rounded-[10px] justify-center items-center gap-2.5 inline-flex"
//       >
//         <div
//           data-layer="✏️ Label"
//           className="Label text-center text-white text-[17px] font-bold font-['Poppins'] leading-snug"
//         >
//           REGISTER NOW
//         </div>
//       </div>
//       <div
//         data-layer="Perks of Joining StarKid:"
//         className="PerksOfJoiningStarkid w-[326px] left-[29px] top-[2836px] absolute text-center"
//       >
//         <span class="text-[#1b1d30] text-[26px] font-medium font-['Publica Sans'] leading-normal">
//           Perks of Joining{" "}
//         </span>
//         <span class="text-[#d63970] text-[26px] font-medium font-['Publica Sans'] leading-normal">
//           StarKid:
//         </span>
//       </div>
//       <div
//         data-layer="Group 1000008090"
//         className="Group1000008090 w-10 h-10 left-[126px] top-[14px] absolute"
//       >
//         <div
//           data-layer="Ellipse 2769"
//           className="Ellipse2769 w-[5.11px] h-[5.10px] left-[14.80px] top-[14.58px] absolute bg-white rounded-full"
//         />
//         <img
//           data-layer="Subtract"
//           className="Subtract w-10 h-10 left-0 top-0 absolute border"
//           src="https://via.placeholder.com/40x40"
//         />
//       </div>
//       <img
//         data-layer="Next page"
//         className="NextPage w-5 h-5 left-[347px] top-[4702px] absolute origin-top-left rotate-[88.73deg]"
//         src="https://via.placeholder.com/20x20"
//       />
//       <img
//         data-layer="Next page"
//         className="NextPage w-5 h-5 left-[347px] top-[4881px] absolute origin-top-left rotate-[88.73deg]"
//         src="https://via.placeholder.com/20x20"
//       />
//       <img
//         data-layer="Next page"
//         className="NextPage w-5 h-5 left-[347px] top-[4932px] absolute origin-top-left rotate-[88.73deg]"
//         src="https://via.placeholder.com/20x20"
//       />
//       <img
//         data-layer="Next page"
//         className="NextPage w-5 h-5 left-[347px] top-[4771.44px] absolute origin-top-left rotate-[-88.73deg]"
//         src="https://via.placeholder.com/20x20"
//       />
//       <img
//         data-layer="Group 1000008586 1"
//         className="Group10000085861 w-[60px] h-[13px] left-[166px] top-[27px] absolute"
//         src="https://via.placeholder.com/60x13"
//       />
//       <img
//         data-layer="WhatsApp Image 2025-01-21 at 9.40.19 AM 1"
//         className="WhatsappImage20250121At94019Am1 w-36 h-[139px] left-[30px] top-[2896px] absolute"
//         src="https://via.placeholder.com/144x139"
//       />
//       <div
//         data-layer="Celebrating creativity and imagination through colorful masterpieces."
//         className="CelebratingCreativityAndImaginationThroughColorfulMasterpieces w-[124px] left-[214px] top-[4068px] absolute text-right text-white text-[8px] font-normal font-['Caros'] leading-[9.76px]"
//       >
//         Celebrating creativity and imagination through colorful masterpieces.
//       </div>
//       <div
//         data-layer="Theme Options: Bollywood Beats Retro Vibes Seasons in Dance"
//         className="ThemeOptionsBollywoodBeatsRetroVibesSeasonsInDance w-[124px] left-[37px] top-[4224px] absolute"
//       >
//         <span class="text-white text-[8px] font-normal font-['Caros'] leading-[9.76px]">
//           Theme Options:
//           <br />
//         </span>
//         <span class="text-white text-[8px] font-normal font-['Caros'] leading-[9.76px]">
//           Bollywood Beats
//           <br />
//           Retro Vibes
//           <br />
//           Seasons in Dance
//         </span>
//       </div>
//       <div
//         data-layer="Participate in any competition for just ₹259!"
//         className="ParticipateInAnyCompetitionForJust259 w-[312px] left-[29px] top-[658px] absolute text-center text-white text-[15px] font-normal font-['Caros'] leading-snug"
//       >
//         Participate in any competition for just ₹259!
//       </div>
//       <div
//         data-layer="Rectangle 3463750"
//         className="Rectangle3463750 w-[377px] h-[501px] left-[-1px] top-[5024px] absolute bg-[#eeeffc]"
//       />
//       <img
//         data-layer="Group 1000008586 (3) 1"
//         className="Group100000858631 w-[78px] h-[18px] left-[59px] top-[5053px] absolute"
//         src="https://via.placeholder.com/78x18"
//       />
//       <img
//         data-layer="logo (1) 1"
//         className="Logo11 w-10 h-10 left-[13px] top-[5042px] absolute"
//         src="https://via.placeholder.com/40x40"
//       />
//       <div
//         data-layer="Linkedin"
//         className="Linkedin w-7 h-7 left-[70px] top-[5115px] absolute justify-center items-center inline-flex overflow-hidden"
//       >
//         <div
//           data-layer="Group"
//           className="Group grow shrink basis-0 self-stretch relative"
//         ></div>
//       </div>
//       <div
//         data-layer="PRODUCTS"
//         className="Products left-[199px] top-[5181px] absolute text-[#6d6d6d] text-[17px] font-medium font-['Caros']"
//       >
//         PRODUCTS
//       </div>
//       <div
//         data-layer="COMPANY"
//         className="Company left-[24px] top-[5181px] absolute text-[#6d6d6d] text-[17px] font-medium font-['Caros']"
//       >
//         COMPANY
//       </div>
//       <div
//         data-layer="Contact Us"
//         className="ContactUs left-[24px] top-[5257px] absolute text-[#1b1d30] text-[15px] font-semibold font-['Caros']"
//       >
//         Contact Us
//       </div>
//       <div
//         data-layer="Privacy Policy"
//         className="PrivacyPolicy left-[24px] top-[5293px] absolute text-[#1b1d30] text-[15px] font-semibold font-['Caros']"
//       >
//         Privacy Policy
//       </div>
//       <div
//         data-layer="Refund & Cancellation Policy"
//         className="RefundCancellationPolicy left-[24px] top-[5330px] absolute text-[#1b1d30] text-[15px] font-semibold font-['Caros']"
//       >
//         Refund & Cancellation
//         <br />
//         Policy
//       </div>
//       <div
//         data-layer="Shipping & Delivery"
//         className="ShippingDelivery left-[24px] top-[5384px] absolute text-[#1b1d30] text-[15px] font-semibold font-['Caros']"
//       >
//         Shipping & Delivery
//       </div>
//       <div
//         data-layer="Terms & Conditions"
//         className="TermsConditions left-[24px] top-[5420px] absolute text-[#1b1d30] text-[15px] font-semibold font-['Caros']"
//       >
//         Terms & Conditions
//       </div>
//       <div
//         data-layer="About Us"
//         className="AboutUs left-[27px] top-[5220px] absolute text-[#1b1d30] text-[15px] font-semibold font-['Caros']"
//       >
//         About Us
//       </div>
//       <div
//         data-layer="Starkid App"
//         className="StarkidApp left-[199px] top-[5220px] absolute text-[#1b1d30] text-[15px] font-semibold font-['Caros']"
//       >
//         Starkid App
//       </div>
//       <img
//         data-layer="gettyimages-140825495-612x612-removebg-preview 2"
//         className="Gettyimages140825495612x612RemovebgPreview2 w-[243px] h-[211px] left-[51px] top-[288px] absolute"
//         src="https://via.placeholder.com/243x211"
//       />
//       <div
//         data-layer="MessageBubble"
//         className="Messagebubble h-[34px] left-[96px] top-[446px] absolute flex-col justify-end items-end gap-2 inline-flex"
//       >
//         <div
//           data-layer="Message + Send Time"
//           className="MessageSendTime self-stretch h-[34px] flex-col justify-start items-start gap-3 flex"
//         >
//           <div
//             data-layer="Bubble + Tail"
//             className="BubbleTail self-stretch justify-end items-end inline-flex"
//           >
//             <div
//               data-layer="Tail"
//               className="Tail w-[0.10px] h-5 flex-col justify-start items-start inline-flex"
//             >
//               <div
//                 data-layer="Container"
//                 className="Container w-[11px] flex-col justify-center items-center flex"
//               />
//             </div>
//             <div
//               data-layer="Bubble"
//               className="Bubble w-[105px] self-stretch px-3 py-1.5 bg-[#d63970] rounded-[15px] justify-start items-start flex"
//             >
//               <div
//                 data-layer="✏️ Message"
//                 className="Message w-[115px] text-white text-[15px] font-semibold font-['Poppins'] leading-snug"
//               >
//                 Rated 4.8/5
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         data-layer="Message + Send Time"
//         className="MessageSendTime h-11 left-[7px] top-[249px] absolute flex-col justify-start items-start gap-3 inline-flex"
//       >
//         <div
//           data-layer="Bubble + Tail"
//           className="BubbleTail self-stretch justify-end items-end inline-flex"
//         >
//           <div
//             data-layer="Bubble"
//             className="Bubble grow shrink basis-0 self-stretch px-3 py-1.5 bg-[#d63970] rounded-[14px] justify-start items-start flex"
//           >
//             <div data-layer="✏️ Message" className="Message w-[104px]">
//               <span class="text-white text-[15px] font-semibold font-['Poppins'] leading-none">
//                 Over 10,000+ registeration
//               </span>
//               <span class="text-white text-[17px] font-semibold font-['Poppins'] leading-none">
//                 s{" "}
//               </span>
//             </div>
//           </div>
//           <div
//             data-layer="Tail"
//             className="Tail w-[0.10px] h-5 origin-top-left rotate-180 flex-col justify-start items-start inline-flex"
//           >
//             <div
//               data-layer="Container"
//               className="Container w-[11px] flex-col justify-center items-center flex"
//             />
//           </div>
//         </div>
//       </div>
//       <div
//         data-layer="instagram"
//         className="Instagram w-[30px] h-[30px] left-[25px] top-[5118px] absolute  overflow-hidden"
//       />
//       <div
//         data-layer="Rectangle 3463751"
//         className="Rectangle3463751 w-[301px] h-[243px] left-[39px] top-[814px] absolute bg-[#d9d9d9] rounded-[10px]"
//       />
//       <img
//         data-layer="Tips-to-raise-a-Confident-public-speaker-min 1"
//         className="TipsToRaiseAConfidentPublicSpeakerMin1 w-[300px] h-[175px] left-[39px] top-[814px] absolute rounded-tl-[10px] rounded-tr-[10px]"
//         src="https://via.placeholder.com/300x175"
//       />
//       <div
//         data-layer="Rectangle 3463754"
//         className="Rectangle3463754 w-[301px] h-[74px] left-[39px] top-[983px] absolute bg-[#00afaa] rounded-bl-[10px] rounded-br-[10px]"
//       />
//       <div
//         data-layer="Aryan’s public speaking experience with us gave him the confidence to participate in a national-level debate competition"
//         className="AryanSPublicSpeakingExperienceWithUsGaveHimTheConfidenceToParticipateInANationalLevelDebateCompetition w-[263px] left-[58px] top-[997px] absolute text-center"
//       >
//         <span class="text-white text-xs font-medium font-['Caros']">
//           Aryan’s public speaking experience with us gave him the
//         </span>
//         <span class="text-white text-xs font-semibold font-['Caros']"> </span>
//         <span class="text-[#1b1d30] text-xs font-semibold font-['Caros']">
//           confidence to participate in a national-level{" "}
//         </span>
//         <span class="text-white text-xs font-medium font-['Caros']">
//           debate competition
//         </span>
//       </div>
//       <div
//         data-layer="Frame 1000008626"
//         className="Frame1000008626 w-[85px] h-4 p-[5.51px] left-[243px] top-[824px] absolute bg-[#716f6f]/50 rounded-[27.50px] justify-center items-center gap-[5.51px] inline-flex"
//       >
//         <div
//           data-layer="Public Speaking"
//           className="PublicSpeaking text-white text-[8px] font-medium font-['Caros'] leading-[9.76px]"
//         >
//           Public Speaking
//         </div>
//       </div>
//       <div
//         data-layer="Rectangle 3463755"
//         className="Rectangle3463755 w-[301px] h-[207px] left-[354px] top-[832px] absolute bg-[#d9d9d9] rounded-[10px]"
//       />
//       <img
//         data-layer="Tips-to-raise-a-Confident-public-speaker-min 2"
//         className="TipsToRaiseAConfidentPublicSpeakerMin2 w-[300px] h-[149px] left-[354px] top-[832px] absolute rounded-tl-[10px] rounded-tr-[10px]"
//         src="https://via.placeholder.com/300x149"
//       />
//       <div
//         data-layer="Rectangle 3463756"
//         className="Rectangle3463756 w-[301px] h-[63px] left-[354px] top-[976px] absolute bg-[#d63970] rounded-bl-[10px] rounded-br-[10px]"
//       />
//       <div
//         data-layer="Aryan’s public speaking experience with us gave him the confidence to participate in a national-level debate competition"
//         className="AryanSPublicSpeakingExperienceWithUsGaveHimTheConfidenceToParticipateInANationalLevelDebateCompetition w-[251px] h-10 left-[373px] top-[987px] absolute text-center text-white text-xs font-medium font-['Caros']"
//       >
//         Aryan’s public speaking experience with us gave him the confidence to
//         participate in a national-level debate competition
//       </div>
//       <div
//         data-layer="Frame 1000008627"
//         className="Frame1000008627 w-[85px] h-4 p-[5.51px] left-[553px] top-[824px] absolute bg-[#716f6f]/50 rounded-[27.50px] justify-center items-center gap-[5.51px] inline-flex"
//       >
//         <div
//           data-layer="Public Speaking"
//           className="PublicSpeaking text-white text-[8px] font-medium font-['Caros'] leading-[9.76px]"
//         >
//           Public Speaking
//         </div>
//       </div>
//       <div
//         data-layer="Rectangle 3463757"
//         className="Rectangle3463757 w-[301px] h-[207px] left-[-275px] top-[832px] absolute bg-[#d9d9d9] rounded-[10px]"
//       />
//       <img
//         data-layer="Tips-to-raise-a-Confident-public-speaker-min 3"
//         className="TipsToRaiseAConfidentPublicSpeakerMin3 w-[300px] h-[149px] left-[-275px] top-[832px] absolute rounded-tl-[10px] rounded-tr-[10px]"
//         src="https://via.placeholder.com/300x149"
//       />
//       <div
//         data-layer="Rectangle 3463758"
//         className="Rectangle3463758 w-[301px] h-[63px] left-[-275px] top-[976px] absolute bg-[#ffc56f] rounded-bl-[10px] rounded-br-[10px]"
//       />
//       <div
//         data-layer="Aryan’s public speaking experience with us gave him the confidence to participate in a national-level debate competition"
//         className="AryanSPublicSpeakingExperienceWithUsGaveHimTheConfidenceToParticipateInANationalLevelDebateCompetition w-[251px] h-10 left-[-249px] top-[987px] absolute text-center text-white text-xs font-medium font-['Caros']"
//       >
//         Aryan’s public speaking experience with us gave him the confidence to
//         participate in a national-level debate competition
//       </div>
//     </div>
//   );
// }
