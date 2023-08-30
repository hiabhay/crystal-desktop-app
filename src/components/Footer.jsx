import React from "react";
import crystal from "../assets/Crystal.svg";
import InstaWhite from "../assets/InstaWhite.svg";
import LinkedInWhite from "../assets/LinkedInWhite.svg";
import FacebookWhite from "../assets/FacebookWhite.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 flex pb-32 justify-center items-center">
        <div className="pt-8 pl-8">
          <img src={crystal} />
          <div className="w-[364px] text-zinc-500 text-sm font-normal leading-[21px] tracking-tight pt-4">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway.
          </div>
        </div>
        <div className="pt-12 pl-20">
          <div className="w-[127px] h-[157px] flex-col justify-start items-start gap-[34px] inline-flex">
            <div className="text-white text-xl font-semibold leading-[25px] flex">
              Links
              <div className="w-5 h-px bg-amber-300 rounded-[32px] mt-5 ml-2" />
            </div>
            <div className="text-zinc-500 text-sm font-normal leading-[21px] tracking-tight">
              Profile
            </div>
            <div className="text-zinc-500 text-sm font-normal leading-[21px] tracking-tight">
              License & Approval
            </div>
            <div className="text-zinc-500 text-sm font-normal leading-[21px] tracking-tight">
              Clients
            </div>
          </div>
        </div>
        <div className="pt-12 pl-20">
          <div className="w-[140px] h-[157px] flex-col justify-start items-start gap-[34px] inline-flex">
            <div className="text-white text-xl font-semibold leading-[25px] flex">
              Other Links
              <div className="w-5 h-px bg-amber-300 rounded-[32px] mt-5 ml-2" />
            </div>

            <div className="text-zinc-500 text-sm font-normal leading-[21px] tracking-tight">
              <Link to="/manufacturing">Manufacturing</Link>
            </div>
            <div className="text-zinc-500 text-sm font-normal leading-[21px] tracking-tight">
              <Link to="/quality">Quality Control</Link>
            </div>
            <div className="text-zinc-500 text-sm font-normal leading-[21px] tracking-tight">
              Discord
            </div>
          </div>
        </div>
        <div className="pt-20 pl-20">
          <div className="w-[242px] h-[189px] relative">
            <div className="left-0 top-0 absolute text-white text-xl font-semibold leading-[25px] flex">
              Get in touch
              <div className="w-5 h-px bg-amber-300 rounded-[32px] mt-5 ml-2" />
            </div>
            <div className="w-[242px] left-0 top-[59px] absolute text-zinc-500 text-base font-normal leading-normal">
              <div>
                Address: 1/1 Awas Crystal, Road No. 1, Contractors Area,
                Bistupur, Jamshedpur-831001 Jharkhand
              </div>
              <div className="pt-4">Phone: +91 9556793910</div>
              <div className="pt-4">Email: crystal.fastener@gmail.com</div>
              <div className="flex">
                <div className="pt-4">
                  <button>
                    <div className="p-[9.33px] rounded-3xl border border-white flex-col justify-center items-center gap-[6.67px] inline-flex">
                      <div className="w-[13.33px] h-[13.33px] relative">
                        <img src={FacebookWhite} />
                      </div>
                    </div>
                  </button>
                </div>

                <div className="pt-4 pl-6">
                  <button>
                    <div className="p-[9.33px] rounded-3xl border border-white flex-col justify-center items-center gap-[6.67px] inline-flex">
                      <div className="w-[13.33px] h-[13.33px] relative">
                        <img src={LinkedInWhite} />
                      </div>
                    </div>
                  </button>
                </div>
                <div className="pt-4 pl-6">
                  <button>
                    <div className="p-[9.33px] rounded-3xl border border-white flex-col justify-center items-center gap-[6.67px] inline-flex">
                      <div className="w-[13.33px] h-[13.33px] relative">
                        <img src={InstaWhite} />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
