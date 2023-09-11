import React from "react";
import facebook from "../assets/Facebook.svg";
import linkedIn from "../assets/LinkedIn.svg";
import insta from "../assets/Insta.svg";
import crystal from "../assets/Crystal.svg";
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";

const NavbarPhone = () => {
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
            <img src={crystal} className="sm:w-[10rem] p-4" alt="Logo" />
          </Link>
          <div>
            <button>
              <img src={menu} className="absolute inset-y-16 right-6 sm:w-[1.7rem]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarPhone;
