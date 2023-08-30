import React from "react";
import Navbar from "./Navbar";
import HomeBG from "../assets/HomeBG.png";
import Section from "./Section";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import HomeBG1 from "../assets/HomeBG1.png";
import HomeBG2 from "../assets/HomeBG2.jpg";
import HomeBG3 from "../assets/HomeBG3.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const App = () => {
  const divStyle = {
    backgroundImage: `url(${HomeBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100vh",
  };

  return (
    <>
    <div style={{
      position: "relative",
      zIndex: 100,
      minHeight: "100vh",
    }} className=""> 
      <Navbar />
      <main>
        <div>
        <Section>
          <div className="w-[700px] text-white text-6xl font-bold leading-[72px] pt-40 pl-16">
            The Perfect Finish for Your Project
          </div>
          <div className="w-[704px] text-white text-base font-normal leading-7 pt-4 pl-16">
            We are a leading manufacturer of fasteners and collated nails Our
            products are made from high-quality materials and are finished to
            the highest standards. We also offer a variety of finishes,
            including bright, electro-galvanized, and hot-dip galvanized.
          </div>
          <div className="flex pt-6 pl-16">
            <button class="rounded-full bg-amber-300 p-2 text-slate-800 text-sm font-semibold leading-normal hover:bg-white pl-4 pr-4">
              OUR CATALOGUE
            </button>
            <div style={{ margin: "0 0.5rem" }} className="pl-2"></div>
            <button class="rounded-full bg-transparent p-2 text-white text-sm font-semibold leading-normal border hover:bg-zinc-100 hover:text-black pl-4 pr-4">
              MORE ABOUT US
            </button>
          </div>
          </Section>
        </div>
      </main>
    </div>
    <AutoplaySlider play={true} cancelOnInteraction={false} interval={2000} bullets={false} fillParent={true} buttons={false}>
        <div data-src={HomeBG1} />
        <div data-src={HomeBG2} />
        <div data-src={HomeBG3} />
      </AutoplaySlider>
    </>
  );
};

export default App;
