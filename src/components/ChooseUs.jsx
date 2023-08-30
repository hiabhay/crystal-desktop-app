import React, { useState } from "react";

import Nails from "../assets/Nails.png";
import Fencing from "../assets/Fencing.png";
import Fasteners from "../assets/Fasteners.png";
import Power from "../assets/Power.png";
import ChooseUsCard from "./ChooseUsCard";
import Section from "./Section";

const ChooseUs = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const fontFam = {
    fontFamily: "Lora",
  };

  const handleMouseEnter = () => {
    setIsMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEnter(false);
  };

  return (
    <Section color="bg-gray-800">
      <div className="pb-10 justify-center">
        <div className="flex pt-16 pl-28">
          <div
            className="text-white text-[40px] font-medium leading-[60px]"
            style={fontFam}
          >
            Our Products
          </div>
          <div className="w-[60px] h-1 bg-amber-300 rounded-[32px] mt-11 ml-4" />
        </div>

        <div className="flex group pl-4 pt-8 justify-center">
          <ChooseUsCard img={Nails} title="Collated Nails" />

          <ChooseUsCard img={Fencing} title="Fencing" />

          <ChooseUsCard img={Fasteners} title="Fasteners" />

          <ChooseUsCard img={Power} title="Hand Driven Nails" />
        </div>
        <div className="flex pl-14 pt-8"></div>
      </div>
    </Section>
  );
};

export default ChooseUs;