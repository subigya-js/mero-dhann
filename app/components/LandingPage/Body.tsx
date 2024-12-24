"use client";

import Image from "next/image";
import { useState } from "react";
import market from "../../assets/market.png";
import LoginModal from "../Modals/LoginModals";
import leftRibbon from "../../assets/ribbon-left.png";
import rightRibbon from "../../assets/ribbon-right.png";
import Button from "../UI/button";

const Body = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mt-4 sm:mt-6 md:mt-8 lg:mt-10 min-h-[75vh] flex flex-col gap-8 sm:gap-10 md:gap-12">
      <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Your money deserves <br className="hidden sm:inline" />
          more
        </h1>

        <p className="text-center text-base sm:text-lg md:text-xl text-gray-400 max-w-md lg:max-w-lg font-semibold">
          Built for a prosperous Nepal.
        </p>

        <Button
          onClick={toggleModal}
          className="text-sm sm:text-base md:text-lg w-[50%] sm:w-auto sm:min-w-[200px]"
        >
          Get Started
        </Button>
      </div>

      <LoginModal isOpen={showModal} onClose={toggleModal} />

      <div className="flex justify-center items-center">
        <Image
          src={market}
          alt="Market image"
          height={700}
          width={1000}
          className="w-full h-auto max-w-[1000px]"
        />
      </div>

      {/* Ribbon  */}
      <div className="flex justify-center items-center gap-2 text-center">
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center">
          <Image
            src={leftRibbon}
            alt="Left Ribbon"
            height={17}
            width={17}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-[10px] sm:text-xs md:text-sm">
          Nepal's #1 <br /> Stock Broker
        </p>
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center">
          <Image
            src={rightRibbon}
            alt="Right Ribbon"
            height={17}
            width={17}
            className="scale-x-[-1] w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Line  */}
      <div className="text-centre flex justify-center items-center gap-3 sm:gap-4 md:gap-5">
        <span className="border-[0.01px] border-gray-700 w-24 sm:w-32 md:w-48"></span>
        <p className="text-[11px] sm:text-xs md:text-sm">
          Trusted by 1Lakh + active investors
        </p>
        <span className="border-[0.01px] border-gray-700 w-24 sm:w-32 md:w-48"></span>
      </div>
    </div>
  );
};

export default Body;
