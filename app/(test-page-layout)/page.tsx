import DataSection from "./_testpage/data-section";
import NewsSection from "./_testpage/news-section";
import SNSSection from "./_testpage/sns-section";

export default function Home() {
  return (
    <div className="w-full">
      <NewsSection />
      <DataSection />
      <SNSSection />
    </div>
  );
}
