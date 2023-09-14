import React from "react";
import InfractructureImg1 from "../assets/InfractructureImg1.png";
import InfrastructureImg2 from "../assets/InfrastructureImg2.png";
import InfrastructureImg3 from "../assets/InfrastructureImg3.png";
import InfrastructureImg4 from "../assets/InfrastructureImg4.png";
import InfrastructureImg5 from "../assets/InfrastructureImg5.png";
const ManufacturingBody = () => {
  return (
    <>
      <div className="pb-16">
        <div className="items-center justify-center flex pt-16">
          <div className="w-[939px] sm:w-fit sm:pl-4 sm:pr-4 text-justify text-neutral-600 text-lg font-normal leading-7">
            Crystal Fasteners Industry operates from a strategic location within
            the Steel Belt of India, granting us convenient access to the
            world's finest quality steel. Our commitment to excellence is
            reflected in our sourcing practices - we exclusively procure raw
            materials from Tata Steel Limited, a renowned name synonymous with
            top-tier product quality.
          </div>
        </div>
        <div className="flex sm:flex-col items-center justify-center pt-16 pl-32 pr-32 sm:pl-0 sm:pr-0">
          <div>
            <img src={InfractructureImg1} className="sm:w-[340px]" />
          </div>
          <div className="pl-8 sm:pl-0 sm:pt-4">
            <img src={InfrastructureImg2} className="sm:w-[340px]" />
          </div>
        </div>
        <div className="flex sm:flex-col items-center justify-center pt-16 sm:pt-4">
          <div>
            <img src={InfrastructureImg3} className="sm:w-[340px]"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManufacturingBody;
