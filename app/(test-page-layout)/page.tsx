import BriefReportSection from "./_testpage/brief-report-section";
import DataSection from "./_testpage/data-section";
import InsightSection from "./_testpage/insight-section";
import NewsSection from "./_testpage/news-section";
import SNSSection from "./_testpage/sns-section";
import TrendsReportSection from "./_testpage/trends-report-section";

export default function Home() {
  return (
    <div className="w-full flex flex-col ">
      <InsightSection />
      <div className="flex flex-col lg:flex-row">
        <BriefReportSection />
        <TrendsReportSection />
      </div>
      <div className="flex flex-col gap-14 lg:flex-row lg:gap-20 lg:px-[15px] max-w-5xl w-full m-auto">
        <NewsSection />
        <DataSection />
      </div>
      <SNSSection />
    </div>
  );
}
