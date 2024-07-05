"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  const trimmedText = text.substr(0, maxLength);
  return trimmedText.substr(0, Math.min(trimmedText.length, trimmedText.lastIndexOf(" "))) + "...";
}

const slidesData = [
  {
    imageSrc: "/images/home_slider/slide_1.jpg",
    title: "Nowoczesna aranżacja Twojego ogrodu",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa, distinctio nesciunt, maxime debitis doloremque magnam, est cupiditate ducimus similique aspernatur ...",
  },
  {
    imageSrc: "/images/home_slider/slide_2.jpg",
    title: "Piękne wnętrze dla Twojego domu",
    description: "Aliquam quaerat quisquam veniam, aspernatur tempore repellat quidem sunt adipisci amet doloremque? Fugiat, veritatis nisi ...",
  },
  // Добавьте больше объектов для каждого слайда
];

export default function CatalogHeroSlider() {
  return (
    <div className="w-10/12 ml-auto">
      <Swiper modules={[Pagination, Autoplay]} spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 5000 }} className="catalog-hero-slider">
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide ">
            <div className="w-full h-[8rem] flex bg-white/70  ">
              <div>
                <Image src={slide.imageSrc} alt={slide.title} width={120} height={120} className=" border border-neutral-200 h-full w-full aspect-[4/3] object-cover" />
              </div>
              <div className="w-full p-[0.5rem]">
                <h2 className="mb-[0.5rem] font-bold">{slide.title}</h2>
                <p className="text-left text-textBase">{truncateText(slide.description, 165)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
