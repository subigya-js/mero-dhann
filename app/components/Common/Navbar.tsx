"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import LoginModal from "../Modals/LoginModals";
import Button from "../ui/button";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-black py-4 px-4 md:px-8 lg:px-24 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-end">
          <Image
            src={logo}
            alt="MeroDhan"
            width={40}
            height={40}
            className="md:w-[50px] md:h-[50px]"
          />
          <span className="text-red-500 font-semibold text-xl md:text-2xl ml-1">
            eroDhann
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center max-w-2xl mx-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="w-3 h-3 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="What are you looking for today?"
              className="w-full md:w-[60%] pl-10 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
            />
          </div>
        </div>

        <div className="hidden md:block">
          <Button onClick={toggleModal}>Login/Register</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch className="w-3 h-3 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="What are you looking for today?"
                className="w-full pl-10 py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
              />
            </div>
            <Button onClick={toggleModal}>Login/Register</Button>
          </div>
        </div>
      )}
      <LoginModal isOpen={showModal} onClose={toggleModal} />
    </nav>
  );
};

export default Navbar;
