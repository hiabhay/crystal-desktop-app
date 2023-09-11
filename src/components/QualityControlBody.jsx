import React from "react";
import Section from "./Section";

const QualityControlBody = () => {
  const fontFam = {
    fontFamily: "Lora",
  };
  return (
    <>
      <Section color="bg-zinc-100">
        <div className="bg-zinc-100 pb-16">
          <div className="flex pt-16 pl-16 sm:pl-6">
            <div
              className="text-neutral-800 text-[40px] sm:text-[30px] font-medium leading-[60px]"
              style={fontFam}
            >
              Quality Control
            </div>
            <div className="w-[86px] sm:w-[40px] h-1 sm:h-0.5 bg-amber-300 rounded-[32px] sm:mt-10 mt-11 ml-2" />
          </div>
          <div className="w-[1240px] sm:w-fit text-stone-500 text-base font-light leading-7 pr-10 pl-16 pt-10 text-justify sm:pl-6">
            Our commitment to excellence is reflected in our sourcing practices
            as we exclusively procure raw materials from Tata Steel Limited a
            renound name synonymous with top-tier product quality. Quality is
            the guiding force at Crystal Fasteners and total quality control is
            an integral and critical process to ensure that the nails meet the
            required standards of quality from raw-material to the finished
            goods.
          </div>
          <div className="w-[1229px] sm:w-fit text-neutral-600 text-lg font-normal leading-7 pr-10 pl-16 pt-10 text-justify sm:pl-6">
            Crystal Fasteners are rigorously tested in terms of Visual
            Inspection, Length Measurement, Diameter Measurement, Tensile
            Strength , Surface Finishing, Corrosion resistance testing, Impact
            testing By implementing these quality control measures, we ensure
            that our products meet the required standards of quality and that
            they are safe and reliable for use.<br/><br/> Apart from the product testing
            the company believes in process Testing to meet the prescribed
            Quality Standards, and we can also provide the tests as per Customer
            Requirement
          </div>
        </div>
      </Section>
    </>
  );
};

export default QualityControlBody;
