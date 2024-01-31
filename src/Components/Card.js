import { FOODIMG } from "./utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ restaurantCardsData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId, areaName } =
    restaurantCardsData?.info;
  const { deliveryTime } = restaurantCardsData?.info?.sla;
  // const { header, subHeader } =
  //   restaurantCardsData.info.aggregatedDiscountInfoV3;
  const { info } = restaurantCardsData || {};
  const { sla, aggregatedDiscountInfoV3 } = info || {};
  const { header, subHeader } = aggregatedDiscountInfoV3 || {};

  return (
    <div className=" h-80 rounded-xl w-72  transition-transform transform hover:scale-105 -mb-10   ">
      <div className="h-[50%] w-full relative">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={FOODIMG + cloudinaryImageId}
          alt="Food"
        />

        <h2 className="absolute  bottom-0 right-0 left-5 font-bold text-2xl text-white">
          {header}
          {subHeader}
        </h2>
      </div>
      <div className="h-[50%] w-full text-gray-700 ">
        <h2 className="font-bold  text-xl ml-3">{name}</h2>
        <h3 className="ml-3 font-bold text-lg">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon
              className="bg-green-600 text-xs p-1 text-white rounded-full"
              icon={faStar}
            />
            {avgRating} , {deliveryTime} mins
          </div>
        </h3>

        <div style={{ width: "200px", height: "20px", overflow: "hidden" }}>
          <p className="ml-3  overflow-hidden text-gray-500">
            {cuisines.join(",")}
          </p>
        </div>

        <p className="ml-3  text-gray-500  ">{areaName}</p>
      </div>
    </div>
  );
};
export default Card;
