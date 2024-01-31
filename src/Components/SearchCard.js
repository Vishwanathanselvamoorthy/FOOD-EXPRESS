import React from "react";
import { FOODIMG1 } from "./utils/constants";

const SearchCard = ({ resData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  const { info } = resData || {};
  const { sla, aggregatedDiscountInfoV3 } = info || {};
  const { header, subHeader } = aggregatedDiscountInfoV3 || {};
  return (
    <div className="flex w-[500px] gap-20 border-2 items-center p-3 m-5 rounded-lg ">
      <div className="w-[40%] relative">
        <img className="rounded-lg h-40" src={FOODIMG1 + cloudinaryImageId} />
        {aggregatedDiscountInfoV3 ? (
          <h2 className="absolute  bottom-0 right-7 left-0  text-sm text-center text-red-500 bg-white w-max m-auto ml-auto mr-auto rounded-xl p-1 shadow-xl  font-extrabold">
            {header}
            <br></br>
            {subHeader}
          </h2>
        ) : (
          ""
        )}
      </div>

      <div className="w-[60%]">
        <h2 className="font-bold text-lg text-gray-700">{name}</h2>
        <h3 className="font-bold text-gray-600  ">
          {avgRating} , {deliveryTime} , {costForTwo}
        </h3>
        <h4 className="text-xs text-gray-500 ">{cuisines.join(" , ")}</h4>
      </div>
    </div>
  );
};

export default SearchCard;
