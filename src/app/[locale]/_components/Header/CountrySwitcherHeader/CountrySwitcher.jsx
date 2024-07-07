"use client";

import { useState, useEffect, useRef } from "react";
import { IoGlobeOutline } from "react-icons/io5";

const CountrySwitcher = () => {
  const [selectedCountry, setSelectedCountry] = useState("Польша");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const countries = ["Польша", "Чехия", "Словакия", "Германия"];

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center gap-1 text-[1rem]" ref={dropdownRef}>
      <IoGlobeOutline className="text-[1.2rem] text-sky-600 dark:text-white" />
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="text-mainMenu font-medium appearance-none pl-[0.5rem] pr-[2.3rem] w-full focus:outline-none cursor-pointer bg-transparent text-black dark:text-white"
        >
          {selectedCountry}
        </button>
        {isOpen && (
          <ul className="absolute mt-1 w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-lg">
            {countries
              .filter((country) => country !== selectedCountry)
              .map((country) => (
                <li
                  key={country}
                  onClick={() => handleCountrySelect(country)}
                  className={`cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 ${selectedCountry === country ? "bg-gray-100 dark:bg-gray-900" : ""}`}
                >
                  {country}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CountrySwitcher;
