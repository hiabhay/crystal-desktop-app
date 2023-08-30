import React from "react";
import Standard from "../assets/Standard.jpg";

const Standards = () => {
  const fontFam = {
    fontFamily: 'Lora'
}
  return (
    <div className="bg-zinc-100 flex pb-20 justify-center items-center">
      <div className="flex flex-col justify-center pt-10 pl-8">
        <div className="flex">
          <div className="text-neutral-800 text-[40px] font-medium leading-[60px]" style={fontFam}>
            We set the standards
          </div>
          <div className="w-[86px] h-1 bg-amber-300 rounded-[32px] mt-11 ml-4" />
        </div>

        <div className="w-[567px] text-stone-500 text-base font-light leading-7 mt-10">
          We are an ISO 9001:2008 certified company, and we are committed to
          continuous improvement. We invest in new technology and equipment to
          ensure that we are always at the forefront of the industry.
        </div>
        <div className="w-[562px] text-neutral-600 text-lg font-normal leading-7 pt-4">
          We also have a team of experienced and dedicated employees who are
          committed to providing our customers with the best products and
          services.
        </div>
        <div className="flex pt-8">
          <button className="rounded-full bg-amber-300 p-2 text-slate-800 text-sm font-semibold leading-normal hover:bg-amber-400 pl-4 pr-4">
            OUR CATALOGUE
          </button>
          <div style={{ margin: "0 0.5rem" }}></div>
          <button className="rounded-full bg-white p-2 text-slate-500 text-sm font-semibold leading-normal border border-amber-300 hover:bg-zinc-200 pl-4 pr-4">
            MORE ABOUT US
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center pt-20 pl-4">
        <img src={Standard} alt="Standard" />
      </div>
    </div>
  );
};

export default Standards;
