import Image from "next/image";

interface ResearchReportCardProps {
  src: string;
  vol: number;
  text: string;
  date: string;
}
export default function BriefReportCard({
  src,
  vol,
  text,
  date,
}: ResearchReportCardProps) {
  const content = `Vol.${vol} ${text}`;
  return (
    <div className="flex flex-col w-[231px] md:w-108 lg:w-42 h-full gap-[18px] md:gap-5 lg:gap-[18px]">
      <Image
        src={src}
        alt={src}
        width={230}
        height={155}
        className="w-full rounded-4xl object-contain"
      />
      <div className="w-full h-full flex flex-col">
        <h6 className="text-primary text-xs mb-1">브리프</h6>
        <p className="w-full text-black text-lg lg:text-sm mb-2 truncate">
          {content}
        </p>
        <span className="text-gray600 mb-4 text-xs">{date}</span>
      </div>
    </div>
  );
}
