import { useDispatch, useSelector } from "react-redux";

import FoodList from "./FoodList";
import { clearCart } from "./utils/cardSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  if (cartItem.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen flex-col ">
        <div className="text-center -mt-60 flex flex-col gap-3">
          <h1 className="text-[250px]">🛒</h1>
          <h1 className="text-xl font-semibold text-gray-700 ">
            Your Cart Is Empty
          </h1>
          <h5 className="text-sm text-gray-500">
            You Can Go To Home Page To View More Restaurants
          </h5>
          <Link to="/">
            <button className="bg-blue-900 font-bold text-white p-2">
              SEE RESTAURANTS NEAR YOU
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-3xl font-bold m-5">Your Cart 🛒</h1>
      <div className="w-[800px] m-auto mt-20 border-2 p-2">
        <FoodList foodList={cartItem} />
      </div>
      <button
        className="bg-black text-white w-max ml-auto mr-auto m-5 p-2 rounded-xl font-bold"
        onClick={clearCartItems}
      >
        Clear Cart 🛒
      </button>
    </div>
  );
};

export default Cart;
