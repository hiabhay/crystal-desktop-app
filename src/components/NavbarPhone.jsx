import React, { useState } from "react";
import facebook from "../assets/Facebook.svg";
import linkedIn from "../assets/LinkedIn.svg";
import insta from "../assets/Insta.svg";
import crystal from "../assets/Crystal.svg";
import CrystalLogoImg from '../assets/CrystalLogoImg.png'
import CrystalLogoName from '../assets/CrystalLogoName.png'
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";

const NavbarPhone = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-gray-800">
        <div>
          <div className="flex pt-0flex flex-grow pt-4 pb-4 justify-center text-center">
            <button>
              <img src={facebook} className="pr-4" alt="Facebook" />
            </button>
            <button>
              <img src={linkedIn} className="pr-4" alt="LinkedIn" />
            </button>
            <button>
              <img src={insta} className="pr-4" alt="Instagram" />
            </button>
          </div>
          <div className="flex pt-0flex flex-grow justify-center text-center">
            <div className="w-[380px] h-[0px] border border-white border-opacity-25"></div>
          </div>
        </div>
        <div className="flex">
          <Link to="/" className="sm:left-0">
            {/* <img src={crystal} className="sm:w-[10rem] p-4" alt="Logo" /> */}
            <div className="flex mt-2">
            <img src={CrystalLogoImg} className="w-[32px] h-[30px] ml-4 mt-2 mb-2"></img>
            <img src={CrystalLogoName} className="w-[56px] h-[20px] mt-3.5 ml-2"></img>
            </div>
          </Link>
          <div>
            <button onClick={toggleMenu}>
              <img src={menu} className="absolute inset-y-16 right-6 sm:w-[1.7rem]" alt="Menu" />
            </button>
            {isMenuOpen && (
              <div className="absolute right-6 mt-12 bg-zinc-100 rounded-md border-gray-300 p-2">
                <Link to="/" className="block py-1 text-gray-800 font-semibold">Home</Link>
                <Link to="/about" className="block py-1 text-gray-800 font-semibold">About</Link>
                <Link to="/products" className="block py-1 text-gray-800 font-semibold">Products</Link>
                <Link to="/quality" className="block py-1 text-gray-800 font-semibold">Quality</Link>
                <Link to="/manufacturing" className="block py-1 text-gray-800 font-semibold">Manufacturing</Link>
                <Link to="/contact" className="block py-1 text-gray-800 font-semibold">Contact</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarPhone;


