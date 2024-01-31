import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [action, setAction] = useState("Sign In");
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white rounded-xl shadow-xl text-center p-10 w-96">
        <h1 class="text-3xl font-bold mb-6 text-blue-900">Sign Up</h1>

        {action === "Sign In" ? (
          <div></div>
        ) : (
          <div class="flex  items-center justify-evenly mb-4">
            <h1 class="text-4xl mb-2 text-gray-600">
              <FontAwesomeIcon icon={faUser} />
            </h1>
            <input
              class="border rounded py-2 px-3 mb-2 w-48 focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              placeholder="Username"
            />
          </div>
        )}

        <div class="flex  items-center justify-evenly mb-4">
          <h1 class="text-4xl mb-2 text-gray-600">
            <FontAwesomeIcon icon={faEnvelope} />
          </h1>
          <input
            class="border rounded py-2 px-3 mb-2 w-48 focus:outline-none focus:ring focus:border-blue-500"
            type="email"
            placeholder="Email"
          />
        </div>

        <div class="flex items-center justify-evenly mb-6">
          <h1 class="text-4xl mb-2 text-gray-600">
            <FontAwesomeIcon icon={faLock} />
          </h1>
          <input
            class="border rounded py-2 px-3 mb-2 w-48 focus:outline-none focus:ring focus:border-blue-500"
            type="password"
            placeholder="Password"
          />
        </div>

        <div class="flex justify-evenly items-center">
          <button
            className={action === "Sign Up" ? "bg-blue-900 px-4 py-2 rounded-lg font-bold text-white" : "bg-gray-500  px-4 py-2 rounded-lg font-bold text-white"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </button>
          <button
            className={action === "Sign In" ? "bg-blue-900  px-4 py-2 rounded-lg font-bold text-white" : "bg-gray-500  px-4 py-2 rounded-lg font-bold text-white"}
            onClick={() => {
              setAction("Sign In");
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
