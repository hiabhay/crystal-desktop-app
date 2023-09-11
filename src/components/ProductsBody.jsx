import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tick from "../assets/Tick.png";
import Nails from "../assets/Nails.png";
import BulkNails from "../assets/BulkNails.png";
import Fencing from "../assets/Fencing.png";
import Fasteners from "../assets/Fasteners.png";
import Power from "../assets/Power.png";
import ChooseUsCard1 from "./ChooseUsCard1";
import Section from "./Section";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const ProductsBody = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const fontFam = {
    fontFamily: "Lora",
  };
  const fontFam1 = {
    fontFamily: "Inter",
  };

  const handleMouseEnter = () => {
    setIsMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEnter(false);
  };

  return (
    <Section color="bg-zinc-100">
      <div>
        <div style={fontFam} className="flex pt-12 pl-32 sm:pl-4">
          <div className="text-neutral-800 text-[40px] font-medium leading-[60px] sm:text-[30px]">
            Our Products
          </div>
          <div className="w-[86px] sm:w-[40px] h-1 sm:h-0.5 bg-amber-300 rounded-[32px] sm:mt-10 mt-11 ml-4" />
        </div>
        <div className="pl-32 pt-4 sm:pl-4 sm:pr-6">
          <div className="w-[1020px] sm:w-fit text-neutral-600 text-base font-normal leading-7 text-justify">
            Crystal Fasteners Industry specializes in producing a diverse range
            of nails to cater to various applications. Our two major categories
            of nails are:
          </div>
        </div>
        <div className="pl-32 pt-10 sm:pl-4">
          <div className="flex">
            <img src={Tick} />
            <button>
              <Link to="/products/bulknails">
                <div
                  className="text-black text-base font-semibold leading-7 pl-4 hover:text-amber-400"
                  style={fontFam1}
                >
                  Bulk Nails
                </div>
              </Link>
            </button>
          </div>
          <div className="flex pt-4">
            <img src={Tick} />
            <button>
              <Link to="/products/collatednails">
                <div
                  className="text-black text-base leading-7 pl-4 font-semibold hover:text-amber-400"
                  style={fontFam1}
                >
                  Collated Nails
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="pb-10">
        <div className="flex group pl-4 sm:pl-0 pt-8 sm:w-fit justify-center sm:flex-col">
          <button onClick={scrollToTop}>
            <Link to="/products/collatednails">
              <ChooseUsCard1 img={BulkNails} title="Collated Nails" />
            </Link>
          </button>

          <button onClick={scrollToTop}>
            <Link to='/products/bulknails'>
              <ChooseUsCard1 img={Nails} title="Bulk Nails" />
            </Link>
          </button>

          <ChooseUsCard1 img={Fencing} title="Fencing" />

          <ChooseUsCard1 img={Fasteners} title="Fasteners" />
        </div>
        <div className="flex pl-14 pt-8"></div>
      </div>
    </Section>
  );
};

export default ProductsBody;
