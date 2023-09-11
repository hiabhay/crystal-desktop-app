import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarPhone from "./NavbarPhone";
import AboutCover from "../assets/AboutCover.png";
import Section from "./Section";

const DetailsHeader = () => {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1023);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const divStyle = {
    backgroundImage: `linear-gradient(to right, rgba(36, 49, 66, 1), rgba(36, 49, 66, 0)), url(${AboutCover})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "50vh",
  };

  return (
     <>
      <div>
      {isMobile ? <NavbarPhone /> : <Navbar />}
        <main>
          <div className="pt-40 pl-20 sm:pl-6 sm:pt-20" style={divStyle}>
            <div className="w-[500px] sm:w-fit sm:text-5xl text-white text-5xl font-bold leading-[72px] ml-30">
              Details
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default DetailsHeader