import React from "react";
import { Tilt } from "react-tilt";
import mapYellow from "../assets/mapYellow.svg";
import phoneYellow from "../assets/phoneYellow.svg";
import mailYellow from "../assets/mailYellow.svg";

const HeadOffice = () => {
  return (
    <>
      <div className="w-[490px] h-[451px] bg-gray-800 rounded ml-20">
        <div className="flex pt-10 pl-10">
          <div className="text-white text-[40px] font-medium leading-[60px]">
            Head Office
          </div>
          <div className="w-[86px] h-1 bg-amber-300 rounded-[32px] mt-10 ml-4" />
        </div>
        <div className="flex pt-10 pl-10">
          <div className="flex items-start">
            <img src={mapYellow} className="mr-4" />
            <div className="w-[374px] text-zinc-500 text-base font-normal leading-normal">
              Address: 1/1 Awas Crystal, Road No. 1, Contractors Area, Bistupur,
              Jamshedpur-831001 Jharkhand
            </div>
          </div>
        </div>
        <div className="flex pt-10 pl-10">
          <div className="flex items-start">
            <img src={mailYellow} className="mr-4" />
            <div className="text-zinc-500 text-lg font-normal leading-normal">
              crystal.fastener@gmail.com
            </div>
          </div>
        </div>
        <div className="flex pt-10 pl-10">
          <div className="flex items-start">
            <img src={phoneYellow} className="mr-4" />
            <div className="text-zinc-500 text-lg font-normal leading-normal">
              +91 9556793910
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadOffice;

// import React from 'react'
// import mapYellow from "../assets/mapYellow.svg";
// import phoneYellow from "../assets/phoneYellow.svg";
// import mailYellow from "../assets/mailYellow.svg";

// const HeadOffice = () => {
//   return (
//     <>
//         <div className="w-[525px] h-[451px] bg-gray-800 rounded ml-20">
//               <div className="flex pt-10 pl-10">
//                 <div className="text-white text-[40px] font-medium leading-[60px]">
//                   Head Office
//                 </div>
//                 <div className="w-[86px] h-1 bg-amber-300 rounded-[32px] mt-10 ml-4" />
//               </div>
//               <div className="flex pt-10 pl-10">
//                 <div className="flex items-start">
//                   <img src={mapYellow} className="mr-4" />
//                   <div className="w-[374px] text-zinc-500 text-base font-normal leading-normal">
//                     Praesent nulla massa, hendrerit vestibulum gravida in,
//                     feugiat auctor felis. Praesent nulla massa, hendrerit
//                     vestibulum gravida in, feugiat auctor felis.
//                   </div>
//                 </div>
//               </div>
//               <div className="flex pt-10 pl-10">
//                 <div className="flex items-start">
//                   <img src={mailYellow} className="mr-4" />
//                   <div className="text-zinc-500 text-lg font-normal leading-normal">
//                     example@gmail.com
//                   </div>
//                 </div>
//               </div>
//               <div className="flex pt-10 pl-10">
//                 <div className="flex items-start">
//                   <img src={phoneYellow} className="mr-4" />
//                   <div className="text-zinc-500 text-lg font-normal leading-normal">
//                     +91 765 756 9872
//                   </div>
//                 </div>
//               </div>
//             </div>
//     </>
//   )
// }

// export default HeadOffice
