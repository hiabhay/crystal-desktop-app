import React from "react";
import group from "../assets/group.svg";
import chip from "../assets/chip.svg";
import headphone from "../assets/headphone.svg";
import mailC from "../assets/mailC.svg";

const WhyChooseUs = () => {
  const fontFam = {
    fontFamily: "Lora",
  };

  return (
    <>
      <div className="flex pb-16 justify-center">
        <div>
          <div
            className="text-neutral-800 text-[40px] font-medium leading-[60px] pt-16 pl-10"
            style={fontFam}
          >
            Why Choose Us!
          </div>
          <div className="w-[80px] h-1 bg-amber-300 rounded-[32px] ml-10 mt-2" />
        </div>
        <div className="pt-10 pl-10">
          <div className="flex">
            <div className="pr-4">
              <div className="w-[380px] h-[230px] relative group overflow-hidden hover:shadow-xl transition-shadow">
                <div className="mt-10 ml-6 pt-2">
                  <img src={group} />
                </div>
                <div className="w-[380px] h-[230px] left-0 top-0 absolute rounded border border-zinc-500 border-opacity-40">
                  <div className="w-full h-1 bg-transparent border-b-2 border-amber-500 absolute bottom-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="w-10 h-10 left-[24px] top-[24px] absolute" />
                <div className="left-[24px] top-[104px] absolute text-neutral-800 text-2xl font-bold leading-normal">
                  Dedicated Team
                </div>
                <div className="left-[24px] top-[144px] absolute text-neutral-800 text-lg font-normal leading-7">
                  A Passionate and Dedicated Team <br />
                  Working Together to Achieve Excellence
                </div>
              </div>
            </div>

            <div className="pr-4">
              <div className="w-[380px] h-[230px] relative group overflow-hidden hover:shadow-xl transition-shadow">
                <div className="mt-10 ml-6 pt-2">
                  <img src={chip} />
                </div>
                <div className="w-[380px] h-[230px] left-0 top-0 absolute rounded border border-zinc-500 border-opacity-40">
                  <div className="w-full h-1 bg-transparent border-b-2 border-amber-500 absolute bottom-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="w-10 h-10 left-[24px] top-[24px] absolute" />
                <div className="left-[24px] top-[104px] absolute text-neutral-800 text-2xl font-bold leading-normal">
                  Latest Technology
                </div>
                <div className="left-[24px] top-[144px] absolute text-neutral-800 text-lg font-normal leading-7 pr-2">
                  Embracing the Cutting-Edge: Harnessing the Power of the Latest
                  Technology.
                </div>
              </div>
            </div>
          </div>

          <div className="flex pt-4">
            <div className="pr-4">
              <div className="w-[380px] h-[230px] relative group overflow-hidden hover:shadow-xl transition-shadow">
                <div className="mt-10 ml-6 pt-2">
                  <img src={mailC} />
                </div>
                <div className="w-[380px] h-[230px] left-0 top-0 absolute rounded border border-zinc-500 border-opacity-40">
                  <div className="w-full h-1 bg-transparent border-b-2 border-amber-500 absolute bottom-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="w-10 h-10 left-[24px] top-[24px] absolute" />
                <div className="left-[24px] top-[104px] absolute text-neutral-800 text-2xl font-bold leading-normal">
                  Certified Engineers
                </div>
                <div className="left-[24px] top-[144px] absolute text-neutral-800 text-lg font-normal leading-7 pr-4">
                  Certified Engineers Crafting Solutions with Expertise and
                  Precision
                </div>
              </div>
            </div>
            <div className="pr-4">
              <div className="w-[380px] h-[230px] relative group overflow-hidden hover:shadow-xl transition-shadow">
                <div className="mt-10 ml-6 pt-2">
                  <img src={headphone} />
                </div>
                <div className="w-[380px] h-[230px] left-0 top-0 absolute rounded border border-zinc-500 border-opacity-40">
                  <div className="w-full h-1 bg-transparent border-b-2 border-amber-500 absolute bottom-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <div className="w-10 h-10 left-[24px] top-[24px] absolute" />
                <div className="left-[24px] top-[104px] absolute text-neutral-800 text-2xl font-bold leading-normal">
                  24*7 Support
                </div>
                <div className="left-[24px] top-[144px] absolute text-neutral-800 text-lg font-normal leading-7 pr-4">
                  Round-the-Clock Support, Always Ready to Assist You.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;

// import React from "react";
// import group from "../assets/group.svg";
// import chip from "../assets/chip.svg";
// import headphone from "../assets/headphone.svg";
// import mailC from "../assets/mailC.svg";
// import { Tilt } from 'react-tilt'

// const WhyChooseUs = () => {
//   const fontFam = {
//     fontFamily: "Lora",
//   };
//   return (
//     <>
//       <div className="flex pb-16 justify-center">
//         <div>
//           <div
//             className="text-neutral-800 text-[40px] font-medium leading-[60px] pt-16 pl-10"
//             style={fontFam}
//           >
//             Why Choose Us!
//           </div>
//           <div className="w-[80px] h-1 bg-amber-300 rounded-[32px] ml-10 mt-2" />
//         </div>
//         <div className="pt-10 pl-10">

//         <div className="flex">
//           <Tilt>

//           <div className="pr-4">
//               <div className="w-[380px] h-[230px] relative">
//                 <div className="mt-10 ml-6 pt-10">
//                   <img src={group} />
//                 </div>
//                 <div className="w-[380px] h-[230px] left-0 top-0 absolute rounded border border-zinc-500 border-opacity-40" />
//                 <div className="w-10 h-10 left-[24px] top-[24px] absolute" />
//                 <div className="left-[24px] top-[104px] absolute text-neutral-800 text-2xl font-bold leading-normal">
//                   Dedicated Team
//                 </div>
//                 <div className="left-[24px] top-[144px] absolute text-neutral-800 text-lg font-normal leading-7">
//                   A Passionate and Dedicated Team <br />
//                   Working Together to Achieve Excellence
//                 </div>
//               </div>
//             </div>

//             </Tilt>
//             <Tilt>
//             <div className="pl-4">
//               <div className="w-[380px] h-[230px] relative">
//                 <div className="mt-10 ml-6 pt-10">
//                   <img src={chip} />
//                 </div>
//                 <div className="w-[380px] h-[230px] left-0 top-0 absolute rounded border border-zinc-500 border-opacity-40" />
//                 <div className="left-[24px] top-[104px] absolute text-neutral-800 text-2xl font-bold leading-normal">
//                   Latest Technology
//                 </div>
//                 <div className="left-[24px] top-[144px] absolute text-neutral-800 text-lg font-normal leading-7">
//                   Embracing the Cutting-Edge: Harnessing
//                   <br /> the Power of the Latest Technology.
//                 </div>
//                 <div className="w-10 h-10 left-[24px] top-[24px] absolute">
//                   <div className="w-10 h-10 left-0 top-0 absolute"></div>
//                 </div>
//               </div>
//             </div>
//             </Tilt>
//           </div>

//           <div className="flex pt-4">
//           <Tilt>
//           <div className="pr-4">
//           <div className="w-[380px] h-[230px] relative">
//               <div className="mt-10 ml-6 pt-10">
//                 <img src={mailC} />
//               </div>
//               <div className="w-[380px] h-[230px] left-0 top-0 absolute rounded border border-zinc-500 border-opacity-40" />
//               <div className="left-[24px] top-[104px] absolute text-neutral-800 text-2xl font-bold leading-normal">
//                 Certified Engineers
//               </div>
//               <div className="left-[24px] top-[144px] absolute text-neutral-800 text-lg font-normal leading-7">
//                 Certified Engineers Crafting Solutions
//                 <br /> with Expertise and Precision
//               </div>
//               <div className="w-10 h-10 left-[24px] top-[24px] absolute" />
//             </div>
//           </div>
//           </Tilt>
//           <Tilt>
//             <div className="pl-4">
//             <div className="w-[380px] h-[230px] relative">
//               <div className="mt-10 ml-6 pt-10">
//                 <img src={headphone} />
//               </div>
//               <div className="w-[380px] h-[230px] left-0 top-0 absolute rounded border border-zinc-500 border-opacity-40" />
//               <div className="left-[24px] top-[104px] absolute text-neutral-800 text-2xl font-bold leading-normal">
//                 24*7 Support
//               </div>
//               <div className="left-[24px] top-[144px] absolute text-neutral-800 text-lg font-normal leading-7">
//                 Round-the-Clock Support, Always <br />
//                 Ready to Assist You.
//               </div>
//               <div className="w-10 h-10 left-[24px] top-[24px] absolute" />
//             </div>
//             </div>
//             </Tilt>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WhyChooseUs;
