"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "../../../../../navigation";
import { useTranslations } from "next-intl";
import { IoLanguageOutline } from "react-icons/io5";

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  const languages = {
    en: "english",
    pl: "polish",
    uk: "ukrainian",
    ru: "russian",
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "en";
    setSelectedLanguage(storedLang);
    if (storedLang !== router.locale) {
      router.replace(pathname, { locale: storedLang });
    }
  }, [router, pathname]);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    localStorage.setItem("language", language);
    router.replace(pathname, { locale: language });
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
    <div className="w-auto flex items-center text-[1rem]" ref={dropdownRef}>
      <IoLanguageOutline className="text-[1.2rem] text-sky-600 " />
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[3.2rem] text-left text-mainMenu font-medium appearance-none pl-[0.5rem] pr-[0.5rem] focus:outline-none cursor-pointer bg-transparent duration-300 hover:text-sky-600 text-black"
        >
          {t(`select_language_abbr.${languages[selectedLanguage]}`)}
        </button>
        {isOpen && (
          <ul className="absolute left-0 mt-1 w-auto bg-white text-black rounded-md shadow-lg">
            {Object.entries(languages)
              .filter(([key, _]) => key !== selectedLanguage)
              .map(([key, value]) => (
                <li key={key} onClick={() => handleLanguageSelect(key)} className="cursor-pointer px-4 py-2 text-black duration-300 hover:bg-sky-600 hover:text-white">
                  {t(`select_language.${value}`)}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
