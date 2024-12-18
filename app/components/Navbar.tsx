"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      className={` text-black py-5 px-24 flex items-center justify-between shadow-sm`}
    >
      <div className="flex items-end">
        <Image src={logo} alt="MeroDhan" width={50} height={50} />
        <span className="text-red-500 font-semibold text-2xl ">eroDhan</span>
      </div>
      <div className="flex-1 flex justify-center max-w-2xl mx-4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="w-3 h-3 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="What are you looking for today?"
            className="w-[60%] pl-10 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
          />
        </div>
      </div>
      <div>
        <button
          className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-md text-[13px] font-semibold transition duration-150 ease-in-out"
          onClick={toggleModal}
        >
          Login/Register
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-black text-center">
              Welcome to MeroDhan
            </h2>
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

export default Navbar;
