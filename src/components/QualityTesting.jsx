import React from "react";
import Tick from "../assets/Tick.png";

const QualityTesting = () => {
  const fontFam = {
    fontFamily: "Lora",
  };
  return (
    <>
      <div>
        <div className="flex pb-12 justify-center">
          <div className="pt-10 pl-4">
            <div
              className="text-neutral-800 text-[40px] font-medium leading-[60px]"
              style={fontFam}
            >
              Our Testing Process
            </div>
            <div className="w-[86px] h-1 bg-amber-300 rounded-[32px]" />
          </div>
          <div className="pt-16 pl-40">
            <div className="flex mb-4 ml-6">
              <img src={Tick} />
              <div className="text-black text-base font-light leading-7 ml-2">
                Breaking Load
              </div>
            </div>
            <div className="flex m-6">
              <img src={Tick} />
              <div className="text-black text-base font-light leading-7 ml-2">
                Tensile Test
              </div>
            </div>
            <div className="flex m-6">
              <img src={Tick} />
              <div className="text-black text-base font-light leading-7 ml-2">
                Elongation
              </div>
            </div>
            <div className="flex m-6">
              <img src={Tick} />
              <div className="text-black text-base font-light leading-7 ml-2">
                Elongation
              </div>
            </div>
            <div className="flex m-6">
              <img src={Tick} />
              <div className="text-black text-base font-light leading-7 ml-2">
                Uniformity of Zinc Coating
              </div>
            </div>
          </div>
          <div className="pt-16 pl-40">
            <div className="flex mb-4 ml-6">
              <img src={Tick} />
              <div className="text-black text-base font-light leading-7 ml-2">
                DIP Test
              </div>
            </div>
            <div className="flex m-6">
              <img src={Tick} />
              <div className="text-black text-base font-light leading-7 ml-2">D. C. Resistance</div>
            </div>
            <div className="flex m-6">
              <img src={Tick} />
              <div className="text-black text-base font-light leading-7 ml-2">Overall Dia</div>
            </div>
            <div className="flex m-6">
              <img src={Tick} />
              <div className="text-black text-base font-light leading-7 ml-2">Strand Breaking Load</div>
            </div>
            <div className="flex m-6">
              <img src={Tick} />
              <div className="text-black text-base font-light leading-7 ml-2">Lay Length</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QualityTesting;
