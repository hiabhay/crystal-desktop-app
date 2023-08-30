import React from "react";

const QualityControlBody = () => {
  const fontFam = {
    fontFamily: "Lora",
  };
  return (
    <>
      <div className="bg-zinc-100 pb-16">
        <div className="flex pt-16 pl-16">
          <div className="text-neutral-800 text-[40px] font-medium leading-[60px]" style={fontFam}>
            Quality Control
          </div>
          <div className="w-[86px] h-1 bg-amber-300 rounded-[32px] mt-11 ml-2" />
        </div>
          <div className="w-[1240px] text-stone-500 text-base font-light leading-7 pr-10 pl-16 pt-10">
            Quality is the guiding force at GWPL and total quality control is an integral part of the manufacturing process from raw-material to the finished goods. GWPL wires are rigorously tested in terms of Surface Finish, Tensile Strength, Torsion, Breaking Load, Zinc Coating, Dip (Adhesion) Test. Apart from the product testing, the company believes in IN-process Testing to meet the prescribed Quality Standards, and we can also provide the tests as per Customer Requirement.
          </div>
          <div className="w-[1229px] text-neutral-600 text-lg font-normal leading-7 pr-10 pl-16 pt-10">Quality Management System has been given us most importance at GEEKAY WIRES PVT LTD, Hyderabad to meet the customer needs and expectations. In the wake of high competition in all the spheres of business environment it has become more essential to maintain high standards of quality in all the business activities. This is to withstand the stiff competition from the indigenous industry and also to make our services competitive on par with the norms of global market requirements. In this background, it has become imperative to establish and maintain a documented quality management system to meet the requirements of the International Standard ISO 9001 - 2008 which is an upgraded version and adopted in GEEKAY WIRES PVT LTD, Hyderabad. The requirements as mentioned in this QSM are implemented and maintained with the involvement of all the employees in the organization. The effectiveness of implementation of this QMS is reviewed periodically by the Management.</div>
      </div>
    </>
  );
};

export default QualityControlBody;

