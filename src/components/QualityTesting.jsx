import React from "react";
import Tick from "../assets/Tick.png";
import Section from "./Section";

const QualityTesting = () => {
  const fontFam = {
    fontFamily: "Lora",
  };
  return (
    <>
    <Section>
      <div>
        <div className="pb-12 pl-10 sm:pl-2">
          <div className="pt-10 pl-4">
            <div
              className="text-neutral-800 text-[40px] sm:text-[30px] font-medium leading-[60px]"
              style={fontFam}
            >
              Testing Process
            </div>
            <div className="w-[86px] h-1 bg-amber-300 rounded-[32px]" />
          </div>
          <div className="w-[1150px] sm:w-fit text-neutral-600 text-lg font-normal leading-7 pl-4 pt-12 text-justify sm:pr-4">Our testing process includes Tensile Test, Torsion Test, Elongation, Breaking Load, D.C. Resistance, Lay Length, Uniformity of Zinc Coating, Overall Dia, DIP Test & Strand Breaking Load</div>
        </div>
      </div>
      </Section>
    </>
  );
};

export default QualityTesting;
