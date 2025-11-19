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
    <section className="pl-5 lg:pl-[15px] py-14 flex-1 bg-orange200">
      <ArrowContainer title="연구보고서">
        <div className="flex items-center relative">
          <ArrowButton
            direction="left"
            className="absolute top-1/2 -left-5"
            onClick={handleScrollLeft}
          />
          <div
            ref={scrollContainerRef}
            className="flex gap-4 lg:gap-10 md:gap-5 scrollbar-bg-gray300 overflow-x-scroll custom-scrollbar"
          >
            {RESEARCH_REPORT_CONTENT.map((content) => (
              <ResearchReportCard
                key={content.id}
                src={content.src}
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
