import React from "react";
import { useParams } from "react-router-dom";
import BulkNailsList from "./BulkNailsList";
import Section from "../components/Section";
import DetailsHeader from "./DetailsHeader";
import Footer from "../components/Footer";

const BulkNailsDetails = () => {
  const { id } = useParams();

  const selectedItem = BulkNailsList.find(
    (item) => item.id === parseInt(id, 10)
  );

  if (!selectedItem) {
    return <div>Item not found</div>;
  }
  return (
    <>
      <DetailsHeader />
      <Section>
        <div className="pl-32 pb-16 sm:pl-0">
          <div className="flex sm:flex-col">
            <div className="pt-16 sm:pl-8">
            <div className="w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] bg-white border-2 border-gray-400">
            <img src={selectedItem.img} alt={selectedItem.name} className="w-[200px] h-[200px]"/>
            </div>
              
            </div>
            <div className="pl-12 pt-12 sm:pl-8 sm:pt-8 sm:w-fit">
              <h2 className="text-slate-600 text-[34px] font-semibold leading-[60px]">
                {selectedItem.name}
              </h2>
              <p>
                <span className="text-neutral-600 text-base font-bold leading-loose tracking-tight">
                  Material:
                </span>{" "}
                {selectedItem.material}
              </p>
              <p>
                <span className="text-neutral-600 text-base font-bold leading-loose tracking-tight">
                  Shank Type:
                </span>{" "}
                {selectedItem.shankType}
              </p>
              <p>
                <span className="text-neutral-600 text-base font-bold leading-loose tracking-tight">
                  Shank Head Type:
                </span>{" "}
                {selectedItem.shankHeadType}
              </p>
              <p>
                <span className="text-neutral-600 text-base font-bold leading-loose tracking-tight">
                  Point Type:
                </span>{" "}
                {selectedItem.pointType}
              </p>
              <p>
                <span className="text-neutral-600 text-base font-bold leading-loose tracking-tight">
                  Finish:
                </span>{" "}
                {selectedItem.finish}
              </p>
              <p>
                <span className="text-neutral-600 text-base font-bold leading-loose tracking-tight">
                  Standard:
                </span>{" "}
                {selectedItem.standard}
              </p>
              <div className="pt-6">
                <button className="bg-amber-300 text-sm p-2 rounded-3xl pl-4 pr-4"><div className="text-center text-slate-800 text-sm font-semibold leading-normal">Download Broucher</div></button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default BulkNailsDetails;
