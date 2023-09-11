import React from "react";
import { Link } from "react-router-dom";
import ProductsTemp from "../assets/ProductsTemp.png";
import BulkNailsList from "../components/BulkNailsList";
import Section from "./Section";

const BulkNails = () => {
  return (
    <>
      <Section>
        <div className="pl-32 sm:pl-3 pt-10 pb-10 items-center justify-center bg-zinc-100">
          <div className="flex sm:flex-col">
            {/* Item 1 */}
            <div key={BulkNailsList[0].id} className="sm:pl-8">
              <Link to={`/products/bulknails/${BulkNailsList[0].id}`}>
                <div className="bg-white w-[230px] h-[230px] sm:w-fit sm:pr-8 border-2 border-gray-300">
                  <img
                    src={BulkNailsList[0].img}
                    alt={BulkNailsList[0].name}
                    className="w-[230px] h-[230px]"
                  />
                </div>
                <h2 className="text-neutral-800 text-[20px] font-medium leading-[39.20px] tracking-wide">
                  {BulkNailsList[0].name}
                </h2>
              </Link>
            </div>

            {/* Item 2 */}
            <div key={BulkNailsList[1].id} className="pl-8 sm:pt-8">
              <Link to={`/products/bulknails/${BulkNailsList[1].id}`}>
                <div className="bg-white w-[230px] h-[230px] sm:w-fit sm:pr-8 border-2 border-gray-300">
                  <img
                    src={BulkNailsList[1].img}
                    alt={BulkNailsList[1].name}
                    className="w-[230px] h-[230px]"
                  />
                </div>

                <h2 className="text-neutral-800 text-[20px] font-medium leading-[39.20px] tracking-wide">
                  {BulkNailsList[1].name}
                </h2>
              </Link>
            </div>

            <div key={BulkNailsList[2].id} className="pl-8 sm:pt-8">
              <Link to={`/products/bulknails/${BulkNailsList[2].id}`}>
                <div className="bg-white w-[230px] h-[230px] sm:w-fit sm:pr-8 border-2 border-gray-300">
                  <img
                    src={BulkNailsList[2].img}
                    alt={BulkNailsList[2].name}
                    className="w-[230px] h-[230px]"
                  />
                </div>

                <h2 className="text-neutral-800 text-[20px] font-medium leading-[39.20px] tracking-wide">
                  {BulkNailsList[2].name}
                </h2>
              </Link>
            </div>

            <div key={BulkNailsList[3].id} className="pl-8 sm:pt-8">
              <Link to={`/products/bulknails/${BulkNailsList[3].id}`}>
                <div className="bg-white w-[230px] h-[230px] sm:w-fit sm:pr-8 border-2 border-gray-300">
                  <img
                    src={BulkNailsList[3].img}
                    alt={BulkNailsList[3].name}
                    className="w-[230px] h-[230px]"
                  />
                </div>

                <h2 className="text-neutral-800 text-[20px] font-medium leading-[39.20px] tracking-wide">
                  {BulkNailsList[3].name}
                </h2>
              </Link>
            </div>
          </div>

          <div className="flex pt-10 sm:pt-0 sm:flex-col">
            {/* Item 1 */}
            <div key={BulkNailsList[4].id} className="sm:pl-8 sm:pt-8">
              <Link to={`/products/bulknails/${BulkNailsList[4].id}`}>
              <div className="bg-white w-[230px] h-[230px] sm:w-fit sm:pr-8 border-2 border-gray-300">
              <img
                  src={BulkNailsList[4].img}
                  alt={BulkNailsList[4].name}
                  className="w-[230px] h-[230px]"
                />
              </div>
                
                <h2 className="text-neutral-800 text-[20px] font-medium leading-[39.20px] tracking-wide">
                  {BulkNailsList[4].name}
                </h2>
              </Link>
            </div>

            {/* Item 2 */}
            <div key={BulkNailsList[5].id} className="pl-8 sm:pt-8">
              <Link to={`/products/bulknails/${BulkNailsList[5].id}`}>
              <div className="bg-white w-[230px] h-[230px] sm:w-fit sm:pr-8 border-2 border-gray-300">
              <img
                  src={BulkNailsList[5].img}
                  alt={BulkNailsList[5].name}
                  className="w-[230px] h-[230px]"
                />
              </div>
                
                <h2 className="text-neutral-800 text-[20px] font-medium leading-[39.20px] tracking-wide">
                  {BulkNailsList[5].name}
                </h2>
              </Link>
            </div>

            <div key={BulkNailsList[6].id} className="pl-8 sm:pt-8">
              <Link to={`/products/bulknails/${BulkNailsList[6].id}`}>
              <div className="bg-white w-[230px] h-[230px] sm:w-fit sm:pr-8 border-2 border-gray-300">
              <img
                  src={BulkNailsList[6].img}
                  alt={BulkNailsList[6].name}
                  className="w-[230px] h-[230px]"
                />
              </div>
                
                <h2 className="text-neutral-800 text-[20px] font-medium leading-[39.20px] tracking-wide">
                  {BulkNailsList[6].name}
                </h2>
              </Link>
            </div>

            <div key={BulkNailsList[7].id} className="pl-8 sm:pt-8">
              <Link to={`/products/bulknails/${BulkNailsList[7].id}`}>
              <div className="bg-white w-[230px] h-[230px] sm:w-fit sm:pr-8 border-2 border-gray-300">
              <img
                  src={BulkNailsList[7].img}
                  alt={BulkNailsList[7].name}
                  className="w-[230px] h-[230px]"
                />
              </div>
                
                <h2 className="text-neutral-800 text-[20px] font-medium leading-[39.20px] tracking-wide">
                  {BulkNailsList[7].name}
                </h2>
              </Link>
            </div>
          </div>

          <div className="flex pl-48 pt-10 sm:pt-0 sm:pl-2 sm:flex-col">
            <div key={BulkNailsList[8].id} className="pl-6 sm:pt-8">
              <Link to={`/products/bulknails/${BulkNailsList[8].id}`}>
              <div className="bg-white w-[230px] h-[230px] sm:w-fit sm:pr-8 border-2 border-gray-300">
              <img
                  src={BulkNailsList[8].img}
                  alt={BulkNailsList[8].name}
                  className="w-[230px] h-[230px]"
                />
              </div>
                
                <h2 className="text-neutral-800 text-[20px] font-medium leading-[39.20px] tracking-wide">
                  {BulkNailsList[8].name}
                </h2>
              </Link>
            </div>

            <div key={BulkNailsList[9].id} className="pl-6 sm:pt-8">
              <Link to={`/products/bulknails/${BulkNailsList[9].id}`}>
              <div className="bg-white w-[230px] h-[230px] sm:w-fit sm:pr-8 border-2 border-gray-300">
              <img
                  src={BulkNailsList[9].img}
                  alt={BulkNailsList[9].name}
                  className="w-[230px] h-[230px]"
                />
              </div>
                
                <h2 className="text-neutral-800 text-[20px] font-medium leading-[39.20px] tracking-wide">
                  {BulkNailsList[9].name}
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BulkNails;
