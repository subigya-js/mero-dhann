"use client";

import React, { useState } from "react";

const Body = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="p-10 mt-8">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl font-bold text-center">
          Your money deserves <br />
          more
        </h1>

        <p className="text-center text-lg text-gray-400">
          Built for a prosperous Nepal.
        </p>

        <button
          className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-md text-[13px] font-semibold transition duration-150 ease-in-out"
          onClick={toggleModal}
        >
          Get Started
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-black text-center">Welcome to MeroDhan</h2>
            <div className="mb-4">
              <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center mb-2">
                <img
                  src="/google-icon.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Continue with Google
              </button>
              <p className="text-center text-gray-500 my-2">Or</p>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full border border-gray-300 rounded-md py-2 px-4 mb-2"
              />
              <button className="w-full bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded-md transition duration-150 ease-in-out">
                Continue
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center">
              By proceeding, I agree to{" "}
              <a href="#" className="text-blue-500">
                T&C
              </a>
              ,{" "}
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>{" "}
              &{" "}
              <a href="#" className="text-blue-500">
                Tariff Rates
              </a>
            </p>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={toggleModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
