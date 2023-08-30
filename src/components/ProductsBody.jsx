// import React from "react";
// import Nails from "../assets/Nails.png";
// import Fencing from "../assets/Fencing.png";
// import Fasteners from "../assets/Fasteners.png";
// import Power from "../assets/Power.png";

// const ProductsBody = () => {
//   return (
//     <>
//       <div className="bg-zinc-100 pb-10 justify-center">
//         <div className="flex pl-4 pt-16 justify-center">
//           <div class="flex items-center space-y-4 flex-col justify-center">
//             <div class="max-w-[400px] overflow-hidden">
//               <div class="max-w-[300px] max-h-[300px] overflow-hidden">
//                 <img
//                   src={Nails}
//                   class="hover:scale-125 transition duration-500 object-cover"
//                 />
//               </div>

//               <div className="text-black text-[28px] font-medium leading-[39.20px] tracking-wide mt-2">
//                 Collated Nails
//               </div>
//               <div className="w-[30px] h-px bg-black rounded-[32px] mt-2" />
//             </div>
//           </div>

//           <div class="flex items-center space-y-4 flex-col justify-center pl-8">
//             <div class="max-w-[400px] overflow-hidden">
//               <div class="max-w-[300px] max-h-[300px] overflow-hidden">
//                 <img
//                   src={Fencing}
//                   class="hover:scale-125 transition duration-500 object-cover"
//                 />
//               </div>
//               <div className="text-black text-[28px] font-medium leading-[39.20px] tracking-wide mt-2">
//                 Fencing
//               </div>
//               <div className="w-[30px] h-px bg-black rounded-[32px] mt-2" />
//             </div>
//           </div>

//           <div class="flex items-center space-y-4 flex-col justify-center pl-8">
//             <div class="max-w-[400px] overflow-hidden">
//               <div class="max-w-[300px] max-h-[300px] overflow-hidden">
//                 <img
//                   src={Fasteners}
//                   class="hover:scale-125 transition duration-500 object-cover"
//                 />
//               </div>
//               <div className="text-black text-[28px] font-medium leading-[39.20px] tracking-wide mt-2">
//                 Fasteners
//               </div>
//               <div className="w-[30px] h-px bg-black rounded-[32px] mt-2" />
//             </div>
//           </div>

//           <div class="flex items-center space-y-4 flex-col justify-center pl-8">
//             <div class="max-w-[400px] overflow-hidden">
//               <div class="max-w-[300px] max-h-[300px] overflow-hidden">
//                 <img
//                   src={Power}
//                   class="hover:scale-125 transition duration-500 object-cover"
//                 />
//               </div>
//               <div className="text-black text-[28px] font-medium leading-[39.20px] tracking-wide mt-2">
//                 Power Industry
//               </div>
//               <div className="w-[30px] h-px bg-black rounded-[32px] mt-2" />
//             </div>
//           </div>
//         </div>
//         <div className="flex pl-14 pt-8"></div>
//       </div>
//     </>
//   );
// };

// export default ProductsBody;
import React, { useState } from "react";

import Nails from "../assets/Nails.png";
import Fencing from "../assets/Fencing.png";
import Fasteners from "../assets/Fasteners.png";
import Power from "../assets/Power.png";
import ChooseUsCard1 from "./ChooseUsCard1";
import Section from "./Section";

const ProductsBody = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const fontFam = {
    fontFamily: "Lora",
  };

  const handleMouseEnter = () => {
    setIsMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEnter(false);
  };

  return (
    <Section color="bg-zinc-100">
      <div className="pb-10 justify-center pt-8">

        <div className="flex group pl-4 pt-8 justify-center">
          <ChooseUsCard1 img={Nails} title="Collated Nails" />

          <ChooseUsCard1 img={Fencing} title="Fencing" />

          <ChooseUsCard1 img={Fasteners} title="Fasteners" />

          <ChooseUsCard1 img={Power} title="Hand Driven Nails" />
        </div>
        <div className="flex pl-14 pt-8"></div>
      </div>
    </Section>
  );
};

export default ProductsBody;

