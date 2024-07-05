"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Обработчик скролла для определения видимости кнопки
  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight * 0.4) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Обработчик клика для плавной прокрутки вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Добавляем обработчик скролла при монтировании компонента
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`flex items-center justify-center fixed bottom-[5rem] right-[1.25rem] z-20 duration-300 hover:-translate-y-1 ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}
      onClick={scrollToTop}
      style={{ transition: "duration-300 opacity 0.5s, visibility 0.5s" }}
    >
      <IoIosArrowUp className="text-[2rem] text-amber-950" />
    </button>
  );
};

export default ScrollToTopButton;
