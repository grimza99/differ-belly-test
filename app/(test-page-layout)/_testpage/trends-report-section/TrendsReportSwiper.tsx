"use client";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TrendsReportCard from "./TrendsReportCard";
import { TRENDS_REPORT_CONTENT } from "./trends-report-content";
import CustomPaginationBullets from "./swiper/CustomPaginationBullets";
import ArrowButton from "@/app/_common/arrow-button/ArrowButton";

export default function TrendsReportSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swiperRef = useRef<SwiperType | null>(null);

  const handleSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  const handleClickArrow = (direction: "prev" | "next") => {
    if (direction === "next") {
      swiperRef.current?.slideNext();
    } else {
      swiperRef.current?.slidePrev();
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
    <div className="flex flex-col items-center">
      <div className="hidden lg:block relative">
        <ArrowButton
          direction="left"
          className="absolute top-1/2 -left-5 z-100"
          onClick={() => handleClickArrow("prev")}
        />
        <Swiper
          modules={[]}
          spaceBetween={0}
          onSwiper={handleSwiper}
          speed={1500}
          slidesPerView={"auto"}
          breakpoints={{
            352: {
              spaceBetween: 16,
            },
            768: {
              spaceBetween: 30,
            },
          }}
          className="w-full lg:w-77  "
        >
          {TRENDS_REPORT_CONTENT.map((report) => (
            <SwiperSlide key={report.id} className="w-fit!">
              <TrendsReportCard
                src={report.src}
                title={report.content}
                date={report.date}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <ArrowButton
          direction="right"
          className="absolute top-1/2 -right-5 z-100"
          onClick={() => handleClickArrow("next")}
        />
        <div className="mt-5 flex flex-col items-center w-full">
          <CustomPaginationBullets
            totalBullet={TRENDS_REPORT_CONTENT.length}
            currentIndex={currentIndex}
            onClickDot={(index) => swiperRef.current?.slideTo(index)}
          />
        </div>
      </div>
      {/* 모바일용 수평 스크롤 */}
      <div className="lg:hidden w-full overflow-x-auto custom-scrollbar">
        <div className="flex gap-4 pb-2 w-max mb-[30px]">
          {TRENDS_REPORT_CONTENT.map((report) => (
            <TrendsReportCard
              key={report.id}
              src={report.src}
              title={report.content}
              date={report.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
