import ArrowContainer from "../components/arrow-container";
import TrendsReportSwiper from "./TrendsReportSwiper";

export default function TrendsReportSection() {
  return (
    <section className="px-5 flex flex-col gap-5 lg:px-[15px]">
      <ArrowContainer title="동향보고서">
        <TrendsReportSwiper />
      </ArrowContainer>
    </section>
  );
}
