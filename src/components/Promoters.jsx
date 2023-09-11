import React from "react";
import Section from "./Section";
import Hands from "../assets/Hands.png";

const Promoters = () => {
  const fontFam = {
    fontFamily: "Lora",
  };
  return (
    <>
      <Section>
        <div>
          <div className="p-16 sm:pt-4 sm:pr-4 flex sm:pl-6">
          <div className="pt-8 relative">
            <div className="w-[400px] h-[350px] border-2 border-amber-300 absolute top-16 left-0 sm:hidden" />
            <img src={Hands} className="z-10 relative pl-4 sm:hidden" />
          </div>
            <div className="pl-12 sm:pl-0">
              <div
                className="text-neutral-800 sm:w-fit text-[40px] font-medium leading-[60px] flex sm:text-[20px]"
                style={fontFam}
              >
                Promoters & Management
                <div className="w-[86px] sm:w-[40px] h-1 bg-amber-300 rounded-[32px] mt-[2.5rem] sm:mt-[2.2rem] ml-2" />
              </div>
              <div className="w-[655px] sm:w-fit text-stone-500 text-base font-light leading-7 pt-4 text-justify">
                At Crystal Fasteners Industry, excellence is driven by a team of
                seasoned professionals. The leadership is led by the promoter
                who holds degrees in Engineering and an MBA in Finance and
                Marketing from prestigious institutions.
              </div>
              <div className="w-[562px] sm:w-fit pt-4 text-justify">
                <span className="text-neutral-600 text-base font-normal leading-7">
                  Located in Jamshedpur, Jharkhand,{" "}
                </span>
                <span className="text-neutral-600 text-base font-bold leading-7">
                  Crystal Fasteners Industry
                </span>
                <span className="text-neutral-600 text-base font-normal leading-7">
                  {" "}
                  is a prominent firm under Crystal Group specializing in the
                  production of premium stainless steel, carbon steel and high
                  tensile galvanized standard fasteners.
                </span>
              </div>
              <div className="w-[550px] sm:w-fit pt-4 text-justify">
                <span className="text-neutral-600 text-base font-normal leading-7 e">
                  Our primary specialization lies in the manufacturing of
                  diverse types of Collated Nails, meticulously crafted to
                  adhere to international standard ISO{" "}
                </span>
                <span className="text-neutral-600 text-base font-normal leading-7">
                  9001:2015
                </span>
                <span className="text-neutral-600 text-base font-normal leading-7">
                  . These fasteners find extensive applications across various
                  sectors, including Construction, Industrial, and General
                  Engineering, etc.
                </span>
              </div>
              <img src={Hands} className="z-10 relative pl-0 sm:pt-6 lg:hidden xl:hidden 2xl:hidden md:hidden" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Promoters;
