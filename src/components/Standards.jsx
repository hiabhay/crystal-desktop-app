import React from "react";
import StandardsImg from "../assets/StandardsImg.png";
import Section from "./Section";
import { Link } from "react-router-dom";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const Standards = () => {
  const fontFam = {
    fontFamily: "Lora",
  };
  return (
    <div className="sm:mx-0 sm:w-fit">
      <Section color="bg-zinc-100">
        <div className="bg-zinc-100 sm:flex-col sm:w-fit flex pb-20 justify-center items-center">
          <div className="flex flex-col justify-center pt-10 pl-6 sm:mx-auto sm:text-left sm:pt-4 sm:pl-8">
            <div className="flex sm:flex-col sm:pl-0 sm:ml-0">
              <div
                className="text-neutral-800 text-[40px] font-medium leading-[60px] sm:text-[30px] sm:pl-0"
                style={fontFam}
              >
                We set the standards
              </div>
              <div className="w-[86px] sm:w-[43px] h-1 bg-amber-300 rounded-[32px] mt-11 ml-4 sm:mt-0 sm:ml-0" />
            </div>
            <div className="w-[567px] sm:w-fit sm:text-xs sm:pr-2 sm:pt-4 text-stone-500 text-base font-light leading-7 mt-10 sm:mt-0 sm:mr-8 text-justify mr-8">
              We are an ISO 9001:2015 certified company, and we are committed to
              continuous improvement. We invest in new technology and equipment
              to ensure that we are always at the forefront of the industry.
            </div>
            <div className="w-[562px] sm:w-fit text-neutral-600 text-lg font-normal leading-7 pt-4 sm:text-sm sm:mr-8 text-justify">
              To ensure the highest standards of production, we have equipped
              our facility with cutting-edge machinery imported from esteemed
              manufacturers from Korea & Taiwan
            </div>
            <div className="flex pt-8 sm:flex-col sm:pr-6">
              <button className="rounded-full bg-amber-300 p-2 text-slate-800 text-sm font-semibold leading-normal hover:bg-amber-400 pl-4 pr-4 sm:w-auto" onClick={scrollToTop}>
                <Link to="/quality">Our Quality Control</Link>
              </button>
              <div style={{ margin: "0 0.5rem" }} className="sm:pt-4"></div>
              <button className="rounded-full bg-white p-2 text-slate-500 text-sm font-semibold leading-normal border border-amber-300 hover:bg-zinc-200 pl-4 pr-4 sm:w-auto" onClick={scrollToTop}>
                <Link to="/about">MORE ABOUT US</Link>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center pt-20 pl-4 sm:pl-0 sm:pt-12">
            <img src={StandardsImg} alt="Standard" className="w-[480px] sm:w-fit" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Standards;
