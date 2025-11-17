"use client";
import { useState, useRef, useEffect } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SwiperSlideCard from "./SwiperSlideCard";
import { INSIGHT_CONTENT } from "./insight.content";
import CustomPagination from "./swiper/CustomPagination";

export default function InsightSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swiperRef = useRef<SwiperType | null>(null);

  const handleSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  const toggleAutoplay = (toggle: "play" | "pause") => {
    if (swiperRef.current) {
      if (toggle === "pause") {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        setCurrentIndex(swiperRef.current.realIndex);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [swiperRef.current?.realIndex]);

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => {}}
        onSwiper={handleSwiper}
        speed={1500}
      >
        {INSIGHT_CONTENT.map((content) => (
          <SwiperSlide key={content.id}>
            <SwiperSlideCard
              src={content.src}
              text={content.text}
              vol={content.vol}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-5 flex justify-center">
        <CustomPagination
          totalSlides={INSIGHT_CONTENT.length}
          currentIndex={currentIndex}
          onClickDot={(index) => swiperRef.current?.slideTo(index)}
          onClickArrow={(direction) => {
            if (direction === "next") {
              swiperRef.current?.slideNext();
            } else {
              swiperRef.current?.slidePrev();
            }
          }}
          onToggleAutoPlay={(toggle) => toggleAutoplay(toggle)}
        />
      </div>
    </div>
  );
}
