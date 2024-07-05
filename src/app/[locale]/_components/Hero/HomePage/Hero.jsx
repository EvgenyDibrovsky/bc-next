"use client";

// import Image from "next/image";

import Category from "../../MainCategory/HomePage/MainCategoryList";
import HeroSearch from "../../Hero/HomePage/HeroSearch";

export default function Hero() {
  return (
    <section className="relative bg-hero bg-no-repeat bg-top bg-cover  flex flex-col justify-between w-full h-[100dvh]">
      <div className="absolute z-0 top-0 left-0 w-full h-full bg-black/10"></div>
      <div className="relarive z-10 h-[100%] flex justify-center items-center ">
        <div className="w-full">
          <div className="flex flex-col w-full -mt-[6rem] px-[0.5rem] py-[5.5rem] bg-white/20 backdrop-blur-sm">
            <div className="container mb-[2rem]">
              <h1 className="text-black text-center text-[1.2rem] font-bold">Бизнес без границ!</h1>
              <p className="text-sky-600 text-center text-[2rem] font-bold">Бизнес каталог </p>
            </div>
            <div className="container">
              <HeroSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 z-10 container ">
        <Category />
      </div>
    </section>
  );
}
