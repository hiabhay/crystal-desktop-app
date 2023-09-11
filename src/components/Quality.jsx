import React from "react";
import QualityImg from "../assets/QualityImg.png";

const Quality = () => {
  const fontFam = {
    fontFamily: "Lora",
  };
  return (
    <div className="flex pb-16 justify-center items-center sm:flex-col max-w-full md:flex-col">
      <div className="sm:p-4 justify-center">
        <div className="flex pl-16 pt-10 sm:flex-col sm:pl-8">
          <div
            className="text-neutral-800 text-[40px] font-medium leading-[60px] sm:w-fit sm:text-2xl"
            style={fontFam}
          >
            Quality Control
          </div>
          <div className="w-[60px] sm:w-[40px] sm:mt-2 sm:ml-0 h-1 bg-amber-300 rounded-[32px] mt-11 ml-4 sm:m-0" />
        </div>
        <div className="pl-16 pt-10 sm:pl-8">
          <div className="w-[567px] sm:w-fit text-stone-500 text-lg font-light leading-7 sm:text-sm sm:pr-8 text-justify">
            Our commitment to excellence is reflected in our sourcing practices
            as we exclusively procure raw materials from Tata Steel Limited, a
            renowned name synonymous with top-tier product quality
          </div>
          <div className="w-[562px] sm:w-fit text-neutral-600 text-lg font-normal leading-7 pt-4 sm:text-sm sm:pr-8 text-justify">
            Quality Control is ingrained in every step of our manufacturing
            process. Our commitment to delivering products of the highest
            standard is evident through our In-House Testing Lab. We rigorously
            test our products to meet prescribed quality standards and fulfill
            customer requirements. Our paramount emphasis is on ensuring
            reliability and top-notch quality across our product range, which
            caters to markets worldwide.<br/><br/>In addition to product testing, our company places great emphasis on process testing to ensure compliance with established quality standards. Moreover, we are equipped to conduct tests tailored to meet specific customer requirements.
          </div>
        </div>
      </div>
      <div className="p-12">
        <img src={QualityImg} className="sm:w-screen" />
      </div>
    </div>
  );
};

export default Quality;
