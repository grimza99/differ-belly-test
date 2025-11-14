"use client";
import Button from "@/app/_common/button";

export default function SNSSection() {
  return (
    <section className="bg-orange200 w-full px-5 pt-17.5 pb-22.5 lg:px-[15px]">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col gap-6.5">
          <h2 className="text-[28px] overflow-wrap text-center">
            야놀자리서치의 더 많은 소식을 SNS로 만나보세요.
          </h2>
          <div>sns아이콘 영역</div>
        </div>
        <Button label="구독신청하기" variant="secondary" onClick={() => {}} />
      </div>
    </section>
  );
}
