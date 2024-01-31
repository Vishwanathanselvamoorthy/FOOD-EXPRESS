import { useDispatch } from "react-redux";
import { FOODIMG } from "./utils/constants";

import { addItem } from "./utils/cardSlice";

const FoodList = ({ foodList }) => {
  const dispatch = useDispatch();

  const addToCart = (food) => {
    dispatch(addItem(food));
  };
  return (
    <div>
      {foodList.map((food) => (
        <div className="flex justify-between items-center gap-32 border-b-2 p-3">
          <div className="w-[80%]">
            <h1 className="text-xl font-semibold">{food.card.info.name}</h1>
            {food.card.info.price ? (
              <h2 className="mb-4">₹{food.card.info.price / 100}</h2>
            ) : (
              ""
            )}

            <h3 className="text-gray-400 text-sm">
              {food.card.info.description}
            </h3>
          </div>
          <div className="w-[20%] relative">
            <img
              className="w-[100%] rounded-xl"
              src={FOODIMG + food.card.info.imageId}
            />
            <button
              className="text-green-600 bg-white font-bold shadow-lg border-2 px-3 rounded-lg text-center absolute ml-auto mr-auto right-0 left-0 bottom-0"
              onClick={() => addToCart(food)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FoodList;
