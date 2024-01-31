import { useState } from "react";
import FoodList from "./FoodList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Categories = ({ dataCategory, showHide, setShowIndex }) => {
  // const [showHide, setShowHide] = useState(false);
  const showHideFunc = () => {
    // setShowHide(!showHide);
    setShowIndex();
  };
  return (
    <div>
      <div
        className="flex justify-between my-5 border-b-2 p-4 shadow-lg px-10 cursor-pointer"
        onClick={showHideFunc}
      >
        <h1 className="text-lg font-bold ">
          {dataCategory?.title} ({dataCategory?.itemCards?.length})
        </h1>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div>{showHide && <FoodList foodList={dataCategory?.itemCards} />}</div>
    </div>
  );
};
export default Categories;
