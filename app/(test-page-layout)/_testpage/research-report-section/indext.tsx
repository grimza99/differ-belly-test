"use client";
import { useRef } from "react";
import ArrowButton from "@/app/_common/arrow-button/ArrowButton";
import ArrowContainer from "../components/arrow-container";
import { RESEARCH_REPORT_CONTENT } from "./swiper/research-report-content";
import ResearchReportCard from "./swiper/ResearchReportCard";

export default function ResearchReportSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pl-5 lg:pl-[15px] flex-1">
      <ArrowContainer title="인사이트 / 브리프">
        <div className="flex items-center relative lg:w-[606px]">
          <ArrowButton
            direction="left"
            className="absolute top-1/2 -left-5"
            onClick={handleScrollLeft}
          />
          <div
            ref={scrollContainerRef}
            className="overflow-x-scroll flex gap-4 pb-4 lg:pb-0 scrollbar-bg-gray300"
          >
            {RESEARCH_REPORT_CONTENT.map((content) => (
              <ResearchReportCard
                key={content.id}
                src={content.src}
                text={content.text}
                vol={content.vol}
                date={content.date}
              />
            ))}
          </div>
          <ArrowButton
            direction="right"
            className="absolute top-1/2 -right-5"
            onClick={handleScrollRight}
          />
        </div>
      </ArrowContainer>
    </section>
  );
}
