import React from "react";
import Navbar from "./Navbar";
import AboutCover from "../assets/AboutCover.png";

const ProductsHeader = () => {
  const divStyle = {
    backgroundImage: `linear-gradient(to right, rgba(36, 49, 66, 1), rgba(36, 49, 66, 0)), url(${AboutCover})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "50vh",
  };
  return (
    <>
      <div>
        <Navbar />
        <main>
          <div className="pt-40 pl-32" style={divStyle}>
            <div className="w-[500px] text-white text-5xl font-bold leading-[72px] ml-30">
              Products
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductsHeader;