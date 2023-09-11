import React from "react";
import QualityImg from "../assets/QualityImg.png";

const Quality = () => {
  const fontFam = {
    fontFamily: 'Lora'
}
  return (
    <div className="flex pb-16 justify-center items-center sm:flex-col max-w-full">
      <div className="sm:p-4 justify-center">
        <div className="flex pl-16 pt-10 sm:flex-col sm:pl-8">
          <div className="text-neutral-800 text-[40px] font-medium leading-[60px] sm:w-fit sm:text-2xl" style={fontFam}>
            Quality Control
          </div>
          <div className="w-[60px] sm:w-[40px] sm:mt-2 sm:ml-0 h-1 bg-amber-300 rounded-[32px] mt-11 ml-4 sm:m-0" />
        </div>
        <div className="pl-16 pt-10 sm:pl-8">
          <div className="w-[567px] sm:w-fit text-stone-500 text-base font-light leading-7 sm:text-xs sm:pr-8">
            Quality is the guiding force at Crystal Fasteners and total quality
            control is an integral and critical process to ensure that the nails
            meet the required standards of quality from raw-material to the
            finished goods.
          </div>
          <div className="w-[562px] sm:w-fit text-neutral-600 text-lg font-normal leading-7 pt-4 sm:text-sm sm:pr-8">Crystal Fasteners are rigorously tested in terms of Visual Inspection, Length Measurement, Diameter Measurement, Tensile Strength , Surface Finishing, Corrosion resistance testing, Impact testing By implementing these quality control measures, we ensure that our products meet the required standards of quality and that they are safe and reliable for use.<br/><br/>Apart from the product testing the company believes in process Testing to meet the prescribed Quality Standards, and we can also provide the tests as per Customer Requirement</div>
        </div>
      </div>
      <div className="p-12">
        <img src={QualityImg} className="w-fit" />
      </div>
    </div>
  );
};

export default Quality;
