import React from "react";
import CapacityImg from "../assets/CapacityImg.png";

const Capacity = () => {
  const fontFam = {
    fontFamily: "Lora",
  };
  return (
    <>
      <div className="bg-zinc-100 pt-20 pl-8 flex pb-16 justify-center">
        <div>
          <div className="flex">
            <div
              className="text-neutral-800 text-[40px] font-medium leading-[60px]"
              style={fontFam}
            >
              Capacity
            </div>
            <div className="w-[86px] h-1 bg-amber-300 rounded-[32px] mt-11 ml-4" />
          </div>
          <div className="w-[567px] text-stone-500 text-base font-light leading-7 mt-8">
            The Company has an installed capacity of 20,000 MT P.A. of
            Galvanized Steel Wires in various grades & sizes for manufacturing
            of the above products.
          </div>
        </div>
        <div className="pt-6 pl-8">
          <img src={CapacityImg} />
        </div>
      </div>
    </>
  );
};

export default Capacity;
