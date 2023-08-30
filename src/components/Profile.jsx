import React from "react";
import Profile1 from "../assets/profile1.png";
import Profile2 from "../assets/profile2.png";

const Profile = () => {
  const fontFam = {
    fontFamily: "Lora",
  };
  return (
    <>
      <div className="bg-zinc-100 pt-20 pl-10 pb-28 flex justify-center">
        <div>
          <div className="flex">
            <div
              className="text-neutral-800 text-[40px] font-medium leading-[60px]"
              style={fontFam}
            >
              Company Profile
            </div>
            <div className="w-[86px] h-1 bg-amber-300 rounded-[32px] mt-11 ml-4" />
          </div>
          <div className="pt-10">
            <div className="w-[567px] text-stone-500 text-base font-light leading-7 pt-4">
              Crystal Fasteners is a leading manufacturer of collated nails in
              India. We have been in business for over 20 years and have a
              reputation for quality and reliability. We offer a wide range of
              collated nails for a variety of applications, including framing,
              roofing, siding, and more.
            </div>
          </div>
          <div className="w-[562px] text-neutral-600 text-lg font-normal leading-7 pt-4">
            Our nails are made from high-quality materials and are subjected to
            rigorous quality control checks to ensure that they meet the highest
            standards. We also offer a variety of customization options, so you
            can get the perfect nails for your needs.
          </div>
          <div className="w-[562px] text-neutral-600 text-lg font-normal leading-7 pt-4">
            We are committed to providing our customers with the best possible
            products and services. We have a team of experienced and
            knowledgeable staff who are always happy to help you choose the
            right nails for your project. We also offer fast shipping and a
            satisfaction guarantee.
          </div>
        </div>

        <div className="pl-12">
          <div className="relative">
            <div className="w-[426px] h-[374px] border-2 border-amber-300 absolute top-8 left-8 z-10" />
            <img src={Profile1} className="z-10 relative" />
          </div>

          <div className="pl-20 pt-16 relative">
            <div className="w-[426px] h-[374px] border-2 border-amber-300 absolute top-24 left-28" />
            <img src={Profile2} className="z-10 relative" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
