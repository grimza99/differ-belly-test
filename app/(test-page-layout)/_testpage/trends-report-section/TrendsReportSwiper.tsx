"use client";
import { useState, useRef, useEffect } from "react";
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TrendsReportCard from "./TrendsReportCard";
import { TRENDS_REPORT_CONTENT } from "./trends-report-content";

export default function TrendsReportSwiper() {
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
    <>
      <Swiper
        modules={[Pagination, Scrollbar]}
        spaceBetween={0}
        onSlideChange={() => {}}
        onSwiper={handleSwiper}
        speed={1500}
      >
        {TRENDS_REPORT_CONTENT.map((report) => (
          <SwiperSlide key={report.id} className="w-auto!">
            <TrendsReportCard
              src={report.src}
              title={report.content}
              date={report.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
