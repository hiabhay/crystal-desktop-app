import React from "react";
import InfrastructureImg from "../assets/InfrastructureImg.png";

const Capacity = () => {
  const fontFam = {
    fontFamily: "Lora",
  };
  return (
    <>
      <div className="bg-zinc-100 pt-20 sm:pt-10 pl-8 sm:pl-4 flex pb-16 justify-center sm:flex-col">
        <div>
          <div className="flex">
            <div
              className="text-neutral-800 text-[34px] sm:text-[20px] font-medium leading-[60px]"
              style={fontFam}
            >
              Infrastructure and Expertise
            </div>
            <div className="w-[60px] sm:w-[30px] md:w-[40px] h-1 bg-amber-300 rounded-[32px] sm:mt-9 mt-10 ml-4" />
          </div>
          <div className="mr-4">
            <div className="w-[567px] sm:w-fit text-stone-500 text-base font-light leading-7 mt-8 text-justify">
              Our expansive manufacturing unit spans over 2,50,000 square feet
              and is situated in the Adityapur Industrial Area with a dedicated
              workforce of over 100 skilled professionals, our plant stands as a
              testament to our operational capabilities.
            </div>
            <div className="w-[567px] sm:w-fit text-stone-500 text-base font-light leading-7 mt-8 text-justify">
              To ensure the highest standards of production, we have equipped
              our facility with cutting-edge machinery imported from esteemed
              manufacturers from Korea & Taiwan
            </div>
          </div>
        </div>
        <div className="pt-6 pl-8 sm:pl-0 sm:pr-4">
          <img src={InfrastructureImg} />
        </div>
      </div>
    </>
  );
};

export default Capacity;
