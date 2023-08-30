import React, { useState, useEffect } from "react";

const ProgressBar = ({ className, isMouseEnter }) => {
  const [customWidth, setCustomWidth] = useState(10);
  const delay = 500;

  useEffect(() => {
    if (isMouseEnter) {
      setCustomWidth(100);
      setTimeout(() => {
        setCustomWidth(96);
      }, delay);
    } else {
      setCustomWidth(6);
      setTimeout(() => {
        setCustomWidth(10);
      }, delay);
    }
  }, [isMouseEnter]);

  return (
    <div
      className={`${className} relative h-[1px] mt-2 bg-white transition-all ease-out duration-500 group-hover:bg-amber-300`}
      style={{ width: `${customWidth}%` }}
    ></div>
  );
};

export default ProgressBar;
