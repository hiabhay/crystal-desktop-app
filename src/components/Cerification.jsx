import React from "react";
import CertificationImg from "../assets/CertificationImg.png";
import certDuotone from '../assets/certDuotone.png'
import Section from "./Section";

const Cerification = () => {
  const fontFam = {
    fontFamily: "Lora",
  };
  return (
    <>
    <Section color="bg-gray-800">
      <div className="bg-gray-800 flex">
        <img src={CertificationImg} />
        <div className="pt-16 pl-8">
          <div className="flex">
            <div className="text-white text-[40px] font-medium leading-[60px]" style={fontFam}>
              Certification
            </div>
            <div className="w-[86px] h-1 bg-amber-300 rounded-[32px] mt-11 ml-4" />
          </div>
          <div>
          <div className="w-[600px] text-white text-opacity-40 text-lg font-normal leading-7 pt-8">Today with robust manufacturing and in-house testing facilities, we are among the preferred vendors of PGCIL (Power Grid Corporation of India Ltd) in most of the State Transmission & Distributions companies across India.</div>
          <div className="flex pt-20">
            <img src={certDuotone}/>
            <div className="text-white text-md font-normal leading-snug pl-4 pt-2">AEO <br/>Certificate</div>
            <div className="w-12 h-[0px] origin-top-left rotate-90 border border-gray-500 ml-6 mt-2"></div>
            <img src={certDuotone}/>
            <div className="text-white text-md font-normal leading-snug pl-4 pt-2">Status <br/>Certificate</div>
            <div className="w-12 h-[0px] origin-top-left rotate-90 border border-gray-500 ml-6 mt-2"></div>
            <img src={certDuotone}/>
            <div className="text-white text-md font-normal leading-snug ml-6 mt-2">ISO <br/>Certificate</div>
          </div>
          </div>
        </div>
      </div>
      </Section>
    </>
  );
};

export default Cerification;
