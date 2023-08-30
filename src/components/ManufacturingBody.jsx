import React from "react";
import Nails from "../assets/Nails.png";
import Fencing from "../assets/Fencing.png";
import Fasteners from "../assets/Fasteners.png";
import Power from "../assets/Power.png";
const ManufacturingBody = () => {
  return (
    <>
      <div className="pb-16">
        <div className="items-center justify-center flex pt-16">
          <div className="w-[939px] text-center text-neutral-600 text-lg font-normal leading-7">
            The company has a manufacturing history of over two decades, during
            which it has achieved phenomenal success as a leading supplier of
            ACSR Steel Core Wire & GS Earth-Wire.
          </div>
        </div>
        <div className="flex items-center justify-center pt-16">
          <div>
            <img src={Nails} />
          </div>
          <div className="pl-8">
            <img src={Fencing} />
          </div>
          <div className="pl-8">
            <img src={Fasteners} />
          </div>
          <div className="pl-8">
            <img src={Power} />
          </div>
        </div>
        <div className="flex items-center justify-center pt-16">
          <div>
            <img src={Nails} />
          </div>
          <div className="pl-8">
            <img src={Fencing} />
          </div>
          <div className="pl-8">
            <img src={Fasteners} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManufacturingBody;
