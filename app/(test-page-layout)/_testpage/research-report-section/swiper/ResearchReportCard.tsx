import Image from "next/image";

interface ResearchReportCardProps {
  src: string;
  date: string;
}
export default function ResearchReportCard({
  src,
  date,
}: ResearchReportCardProps) {
  return (
    <div className="flex flex-col w-47.5 md:w-[205px] lg:w-47.5 gap-4 shrink-0">
      <Image
        src={src}
        alt={src}
        width={190}
        height={266}
        className="w-47.5 md:w-[205px] lg:w-47.5 object-contain"
      />
      <span className="text-gray600 mb-9 text-xs lg:text-sm lg:mb-12.5">
        {date}
      </span>
    </div>
  );
}
