"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

export default function HeroSwiper() {
  return (
    <Swiper modules={[Navigation, Autoplay]} spaceBetween={50} slidesPerView={1} navigation autoplay={{ delay: 50000 }}>
      <SwiperSlide className="swiper-slide ">
        <div className="flex w-full h-[calc(100dvh-4rem)]">
          <div className="w-5/12 flex flex-col items-center justify-center">
            <h1 className="mb-11 text-center font-medium">Nowoczesna aranżacja Twojego ogrodu</h1>
            <p className="w-10/12 text-left text-textBase">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.</p>
          </div>
          <div className="w-7/12 relative">
            <Image src="/images/home_slider/slide_1.jpg" alt="Example Image" fill className="object-cover w-full h-full" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide ">
        <div className="flex w-full h-[calc(100dvh-4rem)]">
          <div className="w-5/12 flex flex-col items-center justify-center">
            <h1 className="mb-11 text-center font-medium">Nowoczesna aranżacja Twojego ogrodu</h1>
            <p className="w-10/12 text-left text-textBase">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.</p>
          </div>
          <div className="w-7/12 relative">
            <Image src="/images/home_slider/slide_2.jpg" alt="Example Image" fill className="object-cover w-full h-full" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide ">
        <div className="flex w-full h-[calc(100dvh-4rem)]">
          <div className="w-5/12 flex flex-col items-center justify-center">
            <h1 className="mb-11 text-center font-medium">Nowoczesna aranżacja Twojego ogrodu</h1>
            <p className="w-10/12 text-left text-textBase">Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji.</p>
          </div>
          <div className="w-7/12 relative">
            <Image src="/images/home_slider/slide_3.jpg" alt="Example Image" fill className="object-cover w-full h-full" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
