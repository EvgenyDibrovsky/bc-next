"use client";

import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function ClockDate() {
  const [currentTime, setCurrentTime] = useState(null); // Инициализация состояния без начального значения

  useEffect(() => {
    // Задаем начальное время как только компонент монтируется в DOM
    setCurrentTime(new Date());

    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Очистка таймера при размонтировании компонента
  }, []);

  if (!currentTime) {
    return <ThreeDots visible={true} height="40" width="40" color="#0284c7" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass="" />;
  }

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="w-full flex items-end">
      <div className="w-[5.2rem] flex items-end  text-neutral-400 text-[1.2rem]">{formatTime(currentTime)}</div>
      <div className="w-fit flex items-end  text-[1rem] text-neutral-400">{formatDate(currentTime)}</div>
    </div>
  );
}
