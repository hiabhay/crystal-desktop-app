import React from "react";
import CertificationImg from "../assets/CertificationImg.png";
import certDuotone from "../assets/certDuotone.png";
import Section from "./Section";

const Cerification = () => {
  const fontFam = {
    fontFamily: "Lora",
  };
  return (
    <>
      <Section color="bg-gray-800">
        <div className="bg-gray-800 flex sm:flex-col">
          <img src={CertificationImg} />
          <div className="pt-16 pl-8 sm:pl-4">
            <div className="flex">
              <div
                className="text-white text-[40px] font-medium leading-[60px] sm:text-[30px]"
                style={fontFam}
              >
                Certification
              </div>
              <div className="w-[86px] sm:w-[40px] h-1 bg-amber-300 rounded-[32px] sm:mt-9 mt-11 ml-4" />
            </div>
            <div>
              <div className="w-[600px] sm:w-fit text-white text-opacity-40 text-lg font-normal leading-7 pt-8 text-justify sm:pr-4">
                We excel in the production of a wide range of Collated Nails,
                each meticulously crafted to meet the stringent standards of ISO
                9001:2015.
              </div>
              <div className="flex pt-20 sm:pt-6 sm:flex-col sm:pb-6">
                <div className="sm:flex sm:pt-6 pl-0">
                  <img src={certDuotone} />
                  <div className="text-white text-md font-normal leading-snug sm:mt-4 ml-2 mt-2">
                    ISO Certificate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Cerification;
