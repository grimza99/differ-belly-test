import Image from "next/image";

interface TrendsReportCardProps {
  src: string;
  title: string;
  date: string;
}
export default function TrendsReportCard({
  src,
  title,
  date,
}: TrendsReportCardProps) {
  return (
    <div>
      <div className="relative flex w-47.5 h-[267px] md:w-187 md:h-[1049px] lg:w-77 lg:h-108 rounded-2xl overflow-hidden">
        <Image
          src={src}
          alt={src}
          fill
          className="absolute inset-0 object-cover rounded-2xl -z-10"
        />
        <div className="w-full h-full absolute inset-0 bg-black/40 -z-5 flex flex-col justify-end-safe px-5 py-7.5">
          <p className="w-full text-white lg:text-xl">{title}</p>
          <span className="text-white text-xs lg:text-sm">{date}</span>
        </div>
      </div>
    </div>
  );
}
