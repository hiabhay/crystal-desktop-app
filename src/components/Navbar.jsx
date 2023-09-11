import React, { useState, useEffect } from "react";
import "./Navbar.css";
import facebook from "../assets/Facebook.svg";
import linkedIn from "../assets/LinkedIn.svg";
import insta from "../assets/Insta.svg";
import home from "../assets/home.svg";
import mail from "../assets/mail.svg";
import crystal from "../assets/Crystal.svg";
import { Link, useLocation } from "react-router-dom";
import Section from "./Section";

const Navbar = () => {
  let location = useLocation();

  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (!event.target.closest(".dropdown-content")) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${visible ? "" : "hidden"}`}>
      <Section>
        {/* upper section of navbar */}
        <div className="flex items-start pt-2">
          <div className="flex justify-start pl-12 sm:hidden">
            <img src={mail} className="pt-0" alt="Mail" />
            <p className="text-xs font-normal text-white pd-2 pl-2 pr-8">
              crystal.fastener@gmail.com
            </p>
            <img src={home} className="pt-0" alt="Home" />
            <p className="text-xs font-normal text-white pd-2 pl-2 pr-8">
              Address: 1/1 Awas Crystal, Road No. 1, Contractors Area, Bistupur,
              Jamshedpur-831001 Jharkhand
            </p>
          </div>
          <div className="flex pt-0flex flex-grow justify-end pr-12 pt-0 sm:justify-center sm:text-center">
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
        </div>

        <hr className="border-t border-gray-100 my-4 mx-12 sm:w-40" />

        {/* lower section of navbar including buttons and logo */}

        <div className="flex">
          <Link to="/" className="sm:left-0">
            <img src={crystal} className="pl-10" alt="Logo" />
          </Link>
          <div className="text-white flex pt-0flex flex-grow justify-end pr-12 pt-0 sm:flex-col">
            <button>
              <Link
                to="/"
                className={`${
                  location.pathname === "/" ? "text-amber-300" : ""
                }`}
              >
                <h1 className="pl-4 hover:text-amber-300">Home</h1>
              </Link>
            </button>
            <button className="pl-4 hover:text-amber-300">
              <Link
                to="/about"
                className={`${
                  location.pathname === "/about" ? "text-amber-300" : ""
                }`}
              >
                <h1>About</h1>
              </Link>
            </button>
            <button className="pl-4 hover:text-amber-300">
              <Link
                to="/products"
                className={`${
                  location.pathname === "/products" ? "text-amber-300" : ""
                }`}
              >
                <h1>Products</h1>
              </Link>
            </button>

            <div className="relative pt-3 pl-4 hover:text-amber-300 sm:pl-56 sm:pt-0">
              <button onClick={toggleDropdown}>
                <Link
                  className={`${
                    location.pathname === "/manufacturing" ||
                    location.pathname === "/quality"
                      ? "text-amber-300"
                      : ""
                  }`}
                >
                  <h1>Infrastructure</h1>
                </Link>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-10 left-1 bg-white text-black rounded-md shadow-md dropdown-content">
                  <Link to="/quality">
                    <h1 className="p-2 hover:text-amber-500 hover:rounded-md">
                      Quality
                    </h1>
                  </Link>
                  <Link to="/manufacturing">
                    <h1 className="p-2 hover:text-amber-500 hover:rounded-md">
                      Manufacturing
                    </h1>
                  </Link>
                </div>
              )}
            </div>

            <button className="pl-4 hover:text-amber-300">
              <Link
                to="/contact"
                className={`${
                  location.pathname === "/contact" ? "text-amber-300" : ""
                }`}
              >
                <h1>Contact</h1>
              </Link>
            </button>
          </div>
        </div>


      </Section>
    </nav>
  );
};

export default Navbar;



