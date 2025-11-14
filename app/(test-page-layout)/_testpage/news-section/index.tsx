"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";
import clsx from "clsx";
const NEWS = [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }];

export type TContentType = "언론보도" | "보도자료";
export default function NewsSection() {
  const [contentType, setContentType] = useState<TContentType>("언론보도");

  return (
    <section className="w-full flex flex-col gap-[30px] flex-2 px-5 lg:px-0">
      <div className="flex justify-between items-center">
        <div className="text-2xl lg:text-[28px] flex flex-col md:flex-row gap-4 items-center">
          <button
            onClick={() => setContentType("언론보도")}
            className={clsx(contentType !== "언론보도" && "text-gray600")}
          >
            언론보도
          </button>
          <div className="hidden md:block h-6 w-px bg-gray200" />
          <button
            onClick={() => setContentType("보도자료")}
            className={clsx(contentType !== "보도자료" && "text-gray600")}
          >
            보도자료
          </button>
        </div>
        <div className="flex items-center text-sm lg:text-[16px] cursor-pointer">
          더보기
          <img
            src="/icons/black_arrow_right.icon.svg"
            alt="black_arrow_right.svg"
            className="w-3 h-3"
          />
        </div>
      </div>
      <ul className="flex flex-col w-full gap-6">
        {NEWS.map((news) => (
          <NewsCard key={news.key} contentType={contentType} />
        ))}
      </ul>
    </section>
  );
}
