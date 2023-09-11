import React from "react";
import CompanyProfileImg1 from "../assets/CompanyProfileImg1.png";
import CompanyProfileImg2 from "../assets/CompanyProfileImg2.png";

const Profile = () => {
  const fontFam = {
    fontFamily: "Lora",
  };
  return (
    <>
      <div className="bg-zinc-100 pt-20 sm:pt-10 pl-10 pb-28 flex justify-center sm:flex-col sm:pl-4">
        <div>
          <div className="flex">
            <div
              className="text-neutral-800 text-[40px] font-medium leading-[60px] sm:text-[30px]"
              style={fontFam}
            >
              Company Profile
            </div>
            <div className="w-[86px] sm:w-[40px] h-1 sm:h-0.5 bg-amber-300 rounded-[32px] sm:mt-9 mt-11 ml-4 sm:ml-2" />
          </div>
          <div className="pt-10 sm:pt-4 sm:pr-4">
            <div className="w-[567px] sm:w-fit text-stone-500 text-base font-light leading-7 pt-4 text-justify">
              Crystal Group is a distinguished company with a strong commitment
              to delivering exceptional products across its portfolio of
              companies for the past two decades. With an unwavering focus on
              high-quality offerings and a robust brand reputation, Crystal
              Group has consistently upheld it's position as a leader in the
              industry.
            </div>
          </div>
          <div className="w-[562px] sm:w-fit pt-4 text-justify sm:pr-4">
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
          <div className="w-[562px] sm:text-base sm:w-fit sm:pr-4 text-neutral-600 text-lg font-normal leading-7 pt-4 text-justify">
            Our primary specialization lies in the manufacturing of diverse
            types of Collated Nails, meticulously crafted to adhere to
            international standard ISO 9001:2015. These fasteners find extensive
            applications across various sectors, including Construction,
            Industrial, and General Engineering, etc.
          </div>
        </div>

        <div className="pl-12 sm:pl-0 sm:pt-8 sm:mr-4">
          <div className="relative">
            <div className="w-[426px] h-[374px] border-2 border-amber-300 absolute top-8 left-8 z-10 sm:hidden" />
            <img src={CompanyProfileImg1} className="z-10 relative" />
          </div>

          <div className="pl-20 pt-16 relative sm:hidden">
            <div className="w-[426px] h-[374px] border-2 border-amber-300 absolute top-24 left-28" />
            <img src={CompanyProfileImg2} className="z-10 relative sm:w-fit" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
