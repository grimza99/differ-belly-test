import InsightCard from "./InsightCard";
import InsightSwiper from "./swiper/InsightSwiper";

const INSIGHTS = [
  { key: 1, label: "야놀자 매력도 지수" },
  { key: 2, label: "야놀자 브랜드자산 지수" },
  { key: 3, label: "데이터랩" },
];
export default function InsightSection() {
  return (
    <section className="px-5 flex flex-col gap-5 lg:gap-10 lg:px-[15px]">
      <InsightSwiper />
      <div className="flex flex-col gap-4 md:flex-row lg:mt-5">
        {INSIGHTS.map((insight) => (
          <InsightCard
            key={insight.key}
            label={insight.label}
            id={insight.key}
          />
        ))}
      </div>
    </section>
  );
}
