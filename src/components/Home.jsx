import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HomeBG from "../assets/HomeBG.png";
import Section from "./Section";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import SliderImg1 from "../assets/SliderImg1.png";
import HomeSlider2 from "../assets/HomeSlider2.png";
import HomeSlider3 from "../assets/HomeSlider3.png";
import NavbarPhone from "./NavbarPhone";
import { Link } from "react-router-dom";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const App = () => {
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

  const handleButtonClick = () => {
    const url =
      "https://drive.google.com/file/d/1wuotHsbMNk6dYpUO8Cx3aBDDEqoNXcvc/view?usp=sharing";
    window.open(url, "_blank");
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          zIndex: 100,
          minHeight: "100vh",
        }}
        className=""
      >
        <div>{isMobile ? <NavbarPhone /> : <Navbar />}</div>
        <main>
          <div className="max-w-screen-xl mx-auto sm:mx-1 px-4">
            <Section>
              <div className="w-[700px] sm:w-fit text-white text-6xl sm:text-3xl md:text-6xl sm:pt-20 font-bold leading-[72px] pt-40 pl-16 sm:pl-0 sm:mr-4">
                The Perfect Finish for Your Project
              </div>
              <div className="w-[704px] text-white text-base font-normal leading-7 pt-4 pl-16 sm:w-fit sm:pl-0 sm:text-xs sm:pr-2 sm:pt-4 text-justify">
                We are a leading manufacturer of Fasteners and Nails (Bulk &
                Collated). The strategic location within the Steel Belt of India
                make it convenient for us to access the world's finest quality
                steel. We specialize in production of premium stainless steel,
                carbon steel and high tensile galvanized standard fasteners.
              </div>
              <div className="flex pt-6 pl-16 sm:pl-0">
                <button
                  className="rounded-full bg-amber-300 p-2 text-slate-800 text-sm font-semibold leading-normal hover:bg-white pl-4 pr-4"
                  onClick={handleButtonClick}
                >
                  OUR CATALOGUE
                </button>

                <div
                  style={{ margin: "0 0.5rem" }}
                  className="pl-2 sm:pl-0"
                ></div>
                <button
                  class="rounded-full bg-transparent p-2 text-white text-sm font-semibold leading-normal border hover:bg-zinc-100 hover:text-black pl-4 pr-4"
                  onClick={scrollToTop}
                >
                  <Link to="/about">MORE ABOUT US</Link>
                </button>
              </div>
            </Section>
          </div>
        </main>
      </div>

      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={2000}
        bullets={false}
        fillParent={true}
        buttons={false}
      >
        <div data-src={SliderImg1} />
        <div data-src={HomeSlider2} />
        <div data-src={HomeSlider3} />
      </AutoplaySlider>
    </>
  );
};

export default App;
