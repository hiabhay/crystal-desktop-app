import React from "react";
import { Link } from "react-router-dom";
import ProductsTemp from "../assets/ProductsTemp.png";
import CollatedNailsList from "../components/CollatedNailsList";
import Section from "./Section";

const CollatedNails = () => {
  return (
    <>
      <Section color='bg-zinc-100'>
        <div className="pb-16 bg-zinc-100">
          <div className="flex pt-16 pl-56 sm:pt-0 sm:pl-0 sm:flex-col sm:w-fit">
            <div key={CollatedNailsList[0].id} className="pl-8 sm:pt-8">
              <Link to={`/products/collatednails/${CollatedNailsList[0].id}`}>
                <div className="w-[250px] h-[250px] border-2 border-gray-300">
                  <img
                    src={CollatedNailsList[0].img}
                    alt={CollatedNailsList[0].name}
                    className="w-[250px] h-[245px]"
                  />
                </div>

                <h2 className="text-neutral-800 text-[13px] font-medium leading-[39.20px] tracking-wide">
                  {CollatedNailsList[0].name}
                </h2>
              </Link>
            </div>

            <div key={CollatedNailsList[1].id} className="pl-8 sm:pt-8">
              <Link to={`/products/collatednails/${CollatedNailsList[1].id}`}>
                <div className="w-[250px] border-2 border-gray-300">
                  <img
                    src={CollatedNailsList[1].img}
                    alt={CollatedNailsList[1].name}
                    className="w-[250px]"
                  />
                </div>

                <h2 className="text-neutral-800 text-[13px] font-medium leading-[39.20px] tracking-wide">
                  {CollatedNailsList[1].name}
                </h2>
              </Link>
            </div>

            <div key={CollatedNailsList[2].id} className="pl-8 sm:pt-8">
              <Link to={`/products/collatednails/${CollatedNailsList[2].id}`}>
                <div className="w-[250px] h-[250px] border-2 border-gray-300">
                  <img
                    src={CollatedNailsList[2].img}
                    alt={CollatedNailsList[2].name}
                    className="w-[250px] h-[245px]"
                  />
                </div>

                <h2 className="text-neutral-800 text-[13px] font-medium leading-[39.20px] tracking-wide">
                  {CollatedNailsList[2].name}
                </h2>
              </Link>
            </div>
          </div>

          <div className="flex pl-56 pt-10 sm:pt-0 sm:pl-0 sm:flex-col">
            <div key={CollatedNailsList[3].id} className="pl-8 sm:pt-8">
              <Link to={`/products/collatednails/${CollatedNailsList[3].id}`}>
                <div className="w-[250px] h-[250px] border-2 border-gray-300">
                  <img
                    src={CollatedNailsList[3].img}
                    alt={CollatedNailsList[3].name}
                    className="w-[250px] h-[245px]"
                  />
                </div>

                <h2 className="text-neutral-800 text-[13px] font-medium leading-[39.20px] ">
                  {CollatedNailsList[3].name}
                </h2>
              </Link>
            </div>

            <div key={CollatedNailsList[4].id} className="pl-8 sm:pt-8">
              <Link to={`/products/collatednails/${CollatedNailsList[4].id}`}>
                <div className="w-[250px] h-[250px] border-2 border-gray-300">
                  <img
                    src={CollatedNailsList[4].img}
                    alt={CollatedNailsList[4].name}
                    className="w-[250px] h-[245px]"
                  />
                </div>

                <h2 className="text-neutral-800 text-[13px] font-medium leading-[39.20px]">
                  {CollatedNailsList[4].name}
                </h2>
              </Link>
            </div>

            <div key={CollatedNailsList[5].id} className="pl-8 sm:pt-8">
              <Link to={`/products/collatednails/${CollatedNailsList[5].id}`}>
              <div className="w-[250px] h-[250px] border-2 border-gray-300">
              <img
                  src={CollatedNailsList[5].img}
                  alt={CollatedNailsList[5].name}
                  className="w-[250px] h-[245px]"
                />
              </div>
                
                <h2 className="text-neutral-800 text-[13px] font-medium leading-[39.20px] tracking-wide">
                  {CollatedNailsList[5].name}
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default CollatedNails;
