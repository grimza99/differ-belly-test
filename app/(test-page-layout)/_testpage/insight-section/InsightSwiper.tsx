"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperSlideCard from "./SwiperSlideCard";
import { INSIGHT_CONTENT } from "./insight.content";

export default function InsightSwiper() {
  const handleSlideChange = () => {
    // console.log("slide change");
  };
  const handleSwiper = () => {
    // console.log("swiper");
  };
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSlideChange={handleSlideChange}
      onSwiper={handleSwiper}
      speed={1500}
      pagination={{
        clickable: true,
      }}
    >
      {INSIGHT_CONTENT.map((content) => (
        <SwiperSlide>
          <SwiperSlideCard
            src={content.src}
            text={content.text}
            vol={content.vol}
            key={content.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
