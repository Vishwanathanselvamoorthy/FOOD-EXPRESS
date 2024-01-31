import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENUAPI } from "./utils/constants";
import useMenu from "./utils/useMenu";
import Categories from "./Categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const menuApi = useMenu(resId);

  if (menuApi === null) {
    return (
      <div className="flex items-center justify-center -mt-16 h-screen">
        <img
          className="w-[500px] h-[500px]"
          src="https://i.pinimg.com/originals/ee/1d/08/ee1d081c5bdf966b058c1a6588e73e8a.gif"
        />
      </div>
    );
  }

  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = menuApi?.cards[0]?.card?.card?.info;

  const { lastMileTravelString, slaString } =
    menuApi?.cards[0]?.card?.card?.info?.sla;

  const { message } = menuApi?.cards[0]?.card?.card?.info?.feeDetails;

  // const {couponCode,description,header} = menuApi?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[0]?.info;

  const categories =
    menuApi?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="w-[1000px] ml-auto mr-auto">
        <div className="flex justify-between mt-16 pb-5 items-center border-b-4 border-dotted">
          <div>
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-gray-500 mt-2 text-sm font-semibold ">
              {cuisines.join(",")}
            </p>
            <p className="text-gray-500 text-sm font-semibold">
              {areaName},{lastMileTravelString}
            </p>
            <p className="text-sm text-gray-500 mt-5 font-semibold">
              {message}
            </p>
          </div>
          <div className="flex flex-col border-2 gap-4 text-center items-center p-1 rounded-xl">
            <h2 className="border-b-2 text-green-700 font-bold text-lg">
              <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
              {avgRating}
            </h2>
            <p className="text-gray-500 text-sm font-bold">
              {totalRatingsString}
            </p>
          </div>
        </div>
        <div className="p-1 my-5 flex gap-5 text-lg font-bold text-gray-800 ">
          <h2 className="flex items-center gap-2">
            <FontAwesomeIcon icon={faClock} />
            {slaString}{" "}
          </h2>
          <h2>{costForTwoMessage}</h2>
        </div>
        {categories.map((Category, index) => (
          <Categories
            key={Category?.card?.card?.title}
            dataCategory={Category?.card?.card}
            showHide={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </>
  );
};
export default Menu;
