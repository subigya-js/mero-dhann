"use client";

import Image from "next/image";
import { useState } from "react";
import market from "../../assets/market.png";
import LoginModal from "../Modals/LoginModals";

const Body = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 mt-4 sm:mt-6 md:mt-8 min-h-[75vh] flex flex-col gap-12">
      <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Your money deserves <br className="hidden sm:inline" />
          more
        </h1>

        <p className="text-center text-base sm:text-lg text-gray-400 max-w-md font-semibold">
          Built for a prosperous Nepal.
        </p>

        <button
          className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-md text-sm sm:text-[13px] font-semibold transition duration-150 ease-in-out max-w-xs w-full sm:w-auto"
          onClick={toggleModal}
        >
          Get Started
        </button>
      </div>

      <LoginModal isOpen={showModal} onClose={toggleModal} />

      <div className="flex justify-center items-center">
        <Image src={market} alt="Market image" height={700} width={1000} />
      </div>
    </div>
  );
};

export default Body;
