import { useState } from "react";

import ProgressBar1 from "./ProgressBar1";

const ChooseUsCard1 = ({ title, img }) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <div
      class="flex group items-center space-y-4 flex-col justify-center pl-8"
      onMouseEnter={() => {
        setIsMouseEnter(true);
      }}
      onMouseLeave={() => {
        setIsMouseEnter(false);
      }}
    >
      <div class="max-w-[400px] overflow-hidden">
        <div class="max-w-[300px] max-h-[300px] overflow-hidden">
          <img
            src={img}
            class="hover:scale-125 transition duration-500 object-cover sm:pt-4 sm:pl-6 w-[240px]"
          />
        </div>
        <div className="text-black text-[28px] font-medium leading-[39.20px] tracking-wide mt-2 sm:pl-6">
          {title}
        </div>
        <ProgressBar1 isMouseEnter={isMouseEnter} />
      </div>
    </div>
  );
};

export default ChooseUsCard1;
