import { useContext, useState } from "react";
import { LOGO } from "./utils/constants";
import useOnlineStatus from "./utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const [btnName, setBtnName] = useState("Sign-in");

  const { loggedInUser } = useContext(UserContext);

  const cart = useSelector((store) => store.cart.items);

  // cartLengthDisplay = cart.length === 0 ? cart.length : cart.length;

  return (
    <>
      <div className="flex  justify-between items-center border-2 shadow-2xl px-20 py-2">
        <div>
          <img className="w-20 rounded-[100%]" src={LOGO} />
        </div>
        <div>
          <ul className="flex text-md gap-20 font-semibold text-gray-700">
            <Link to="/search">
              <li className="hover:text-blue-950">
                {" "}
                <FontAwesomeIcon className="mr-2" icon={faMagnifyingGlass} />
                Search
              </li>
            </Link>

            <Link to="/">
              <li className="hover:text-blue-950">Home</li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-blue-950">Contact</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-blue-950">About</li>
            </Link>
            <Link to="/cart">
              <li className=" flex gap-2 justify-center items-center  hover:text-blue-950">
                Cart
                <div className="relative">
                  <h1 className="absolute top-1 font-bold left-1/2 transform -translate-x-1/2 text-sm bg-none">
                    {cart.length}
                  </h1>

                  {cart.length > 0 ? (
                    <FontAwesomeIcon
                      className="text-2xl text-green-500 mt-1"
                      icon={faInbox}
                    />
                  ) : (
                    <FontAwesomeIcon className="text-2xl mt-1" icon={faInbox} />
                  )}
                </div>
              </li>
            </Link>

            <Link to='/signup'>
              <button
                className="hover:text-blue-950"
                onClick={() => {
                  btnName === "Sign-in"
                    ? setBtnName("Sign-up")
                    : setBtnName("Sign-in");
                }}
              >
                {btnName}
              </button>
            </Link>

            {loggedInUser && loggedInUser.length > 0 ? (
              <li className="hover:text-blue-950">👤{loggedInUser}</li>
            ) : (
              ""
            )}

            <li className="absolute right-0 top-0 text-sm">
              {onlineStatus ? "🟢" : "🔴"}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
