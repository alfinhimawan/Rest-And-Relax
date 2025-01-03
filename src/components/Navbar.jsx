import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <div className="text-blue-600 text-2xl font-bold">
          <a href="/">Staycation.</a>
        </div>

        <div className="space-x-6 hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/hero"
                smooth={true}
                className="font-bold text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="mostpicked"
                smooth={true}
                className="font-bold text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer"
              >
                Most Picked
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="font-bold text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer"
              >
                Categories
              </button>
              {isOpen && (
                <ul className="absolute bg-white shadow-md mt-2 w-48 rounded-lg text-gray-700">
                  <li>
                    <Link
                      to="houses"
                      smooth={true}
                      className="font-bold block px-4 py-2 hover:bg-blue-100"
                    >
                      Houses with Spacious Backyards
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="hotels"
                      smooth={true}
                      className="font-bold block px-4 py-2 hover:bg-blue-100"
                    >
                      Hotels with Large Living Room
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="apartments"
                      smooth={true}
                      className="font-bold block px-4 py-2 hover:bg-blue-100"
                    >
                      Apartments with Kitchen Set
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="happy-story"
                smooth={true}
                className="font-bold text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-yellow-500 text-white text-1xl font-bold px-6 py-3 rounded-lg transition duration-300 hover:scale-105">
            Login
          </button>
          <button className="bg-blue-600 text-white text-1xl font-bold px-6 py-3 rounded-lg transition duration-300 hover:scale-105">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
