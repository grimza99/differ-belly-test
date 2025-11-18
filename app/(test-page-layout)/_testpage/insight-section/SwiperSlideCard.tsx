"use client";
import Button from "@/app/_common/button";
import WhiteDot from "@/app/_common/dot/WhiteDot";
import Image from "next/image";

export default function SwiperSlideCard({
  src,
  vol,
  text,
}: {
  src: string;
  vol: number;
  text: string;
}) {
  const content = `Vol.${vol} ${text}`;
  return (
    <div className="relative flex w-full h-[350px] rounded-4xl overflow-hidden shadow-xl">
      <Image
        src={src}
        alt={src}
        fill
        className="absolute inset-0 object-cover rounded-4xl -z-10"
      />
      <div className="w-full h-full absolute inset-0 bg-black/30 -z-5 flex flex-col justify-between px-[30px] py-10">
        <h6 className="text-white flex items-center gap-1 text-lg">
          <WhiteDot />
          인사이트
        </h6>
        <p className="text-white mb-4 text-[28px] lg:text-[44px]">{content}</p>
        <Button label="자세히보기" onClick={() => {}} />
      </div>
    </div>
  );
}
