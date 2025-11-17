"use client";
import Button from "@/app/_common/button";
import WhiteDot from "@/app/_common/dot/WhiteDot";
import Image from "next/image";

export default function SwiperSlideCard({
  src,
  text,
}: {
  src: string;
  text?: string;
}) {
  return (
    <div className="relative flex justify-center items-center px-[30px] py-10 overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={src}
        fill
        className="absolute inset-0 object-cover rounded-2xl -z-10"
      />
      <div className="w-full h-full absolute inset-0 bg-black/30 -z-5 flex flex-col">
        <h6 className="text-white flex items-center gap-1 text-lg ">
          <WhiteDot /> 인사이트
        </h6>
        <p className="text-white mb-4">{text}</p>
        <Button label="자세히보기" onClick={() => {}} />
      </div>
    </div>
  );
}
