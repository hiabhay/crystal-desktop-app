import React from "react";
import group from "../assets/group.svg";
import chip from "../assets/chip.svg";
import headphone from "../assets/headphone.svg";
import mailC from "../assets/mailC.svg";

const WhyChooseUs = () => {
  const fontFam = {
    fontFamily: "Lora",
  };

  return (
    <>
      <div className="flex pb-16 justify-center sm:flex-col">
        <div>
          <div
            className="text-neutral-800 text-[40px] font-medium leading-[60px] pt-16 pl-10 sm:text-2xl sm:pl-4"
            style={fontFam}
          >
            Why Choose Us!
          </div>
          <div className="w-[80px] sm:w-[40px] h-1 bg-amber-300 rounded-[32px] ml-10 mt-2 sm:ml-4" />
        </div>
        <div className="pt-10 pl-10 sm:flex-col sm:pl-4">
          <div className="flex sm:flex-col">
            <div className="pr-4 sm:pr-0">
              <div className="w-[380px] h-[230px] relative group overflow-hidden hover:shadow-xl transition-shadow">
                <div className="mt-10 ml-6 pt-2 sm:mt-12">
                  <img src={group} className="w-[2rem]"/>
                </div>
                <div className="w-[380px] sm:w-[340px] h-[230px] left-0 top-0 absolute rounded border border-zinc-500 border-opacity-40">
                  <div className="w-full h-1 bg-transparent border-b-2 border-amber-500 absolute bottom-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="w-10 h-10 left-[24px] top-[24px] absolute" />
                <div className="left-[24px] top-[104px] absolute text-neutral-800 text-2xl font-bold leading-normal sm:text-xl">
                  Dedicated Team
                </div>
                <div className="left-[24px] top-[144px] absolute text-neutral-800 text-lg font-normal leading-7 sm:text-sm">
                  A Passionate and Dedicated Team <br />
                  Working Together to Achieve Excellence
                </div>
              </div>
            </div>

            <div className="pr-4 sm:pr-0 sm:mt-8">
              <div className="w-[380px] h-[230px] relative group overflow-hidden hover:shadow-xl transition-shadow">
                <div className="mt-10 ml-6 pt-2 sm:mt-12">
                  <img src={chip} className="w-[2rem]" />
                </div>
                <div className="w-[380px] sm:w-[340px] h-[230px] left-0 top-0 absolute rounded border border-zinc-500 border-opacity-40">
                  <div className="w-full h-1 bg-transparent border-b-2 border-amber-500 absolute bottom-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="w-10 h-10 left-[24px] top-[24px] absolute" />
                <div className="left-[24px] top-[104px] absolute text-neutral-800 text-2xl font-bold leading-normal sm:text-xl">
                  Latest Technology
                </div>
                <div className="left-[24px] top-[144px] absolute text-neutral-800 text-lg font-normal leading-7 pr-2 sm:text-sm sm:mr-8">
                  Embracing the Cutting-Edge: Harnessing the Power of the Latest Technology.
                </div>
              </div>
            </div>
          </div>

          <div className="flex pt-4 sm:flex-col sm:w-fit">
            <div className="pr-4 sm:w-fit">
              <div className="w-[380px] h-[230px] relative group overflow-hidden hover:shadow-xl transition-shadow">
                <div className="mt-10 ml-6 pt-2 sm:mt-12">
                  <img src={mailC} className="w-[2rem]"/>
                </div>
                <div className="w-[380px] sm:w-[340px] h-[230px] left-0 top-0 absolute rounded border border-zinc-500 border-opacity-40">
                  <div className="w-full h-1 bg-transparent border-b-2 border-amber-500 absolute bottom-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="w-10 h-10 left-[24px] top-[24px] absolute" />
                <div className="left-[24px] top-[104px] absolute text-neutral-800 text-2xl font-bold leading-normal sm:text-xl">
                  Certified Engineers
                </div>
                <div className="left-[24px] top-[144px] absolute text-neutral-800 text-lg font-normal leading-7 pr-4 sm:text-sm sm:mr-8">
                  Certified Engineers Crafting Solutions with Expertise and
                  Precision
                </div>
              </div>
            </div>
            
            <div className="pr-4 sm:pt-4 sm:w-fit">
              <div className="w-[380px] h-[230px] relative group overflow-hidden hover:shadow-xl transition-shadow">
                <div className="mt-10 ml-6 pt-2 sm:mt-12">
                  <img src={headphone} className="w-[2rem]"/>
                </div>
                <div className="w-[380px] sm:w-[340px] h-[230px] left-0 top-0 absolute rounded border border-zinc-500 border-opacity-40">
                  <div className="w-full h-1 bg-transparent border-b-2 border-amber-500 absolute bottom-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="w-10 h-10 left-[24px] top-[24px] absolute" />
                <div className="left-[24px] top-[104px] absolute text-neutral-800 text-2xl font-bold leading-normal sm:text-xl">
                  24*7 Support
                </div>
                <div className="left-[24px] top-[144px] absolute text-neutral-800 text-lg font-normal leading-7 pr-4 sm:text-sm sm:mr-8">
                  Round-the-Clock Support, Always Ready to Assist You.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;