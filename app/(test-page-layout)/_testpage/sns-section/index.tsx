"use client";
import Button from "@/app/_common/button";

export default function SNSSection() {
  return (
    <section className="bg-orange200 w-full px-5 pt-17.5 pb-22.5 lg:px-[15px] flex justify-center">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between items-center w-full max-w-[1290px]">
        <div className="flex flex-col gap-6.5">
          <h2 className="text-[28px] overflow-wrap text-center">
            야놀자리서치의 더 많은 소식을 SNS로 만나보세요.
          </h2>
          <div className="w-full flex justify-around">
            {SNS_ICONS.map((icon) => (
              <img
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                className="w-6.5 h-6.5"
              />
            ))}
          </div>
        </div>
        <Button label="구독신청하기" variant="secondary" onClick={() => {}} />
      </div>
    </section>
  );
}

const SNS_ICONS = [
  { src: "/sns-icons/youtube.svg", alt: "youtube icon" },
  { src: "/sns-icons/instagram.svg", alt: "instagram icon" },
  { src: "/sns-icons/facebook.svg", alt: "facebook icon" },
  { src: "/sns-icons/linkedin.svg", alt: "linkedIn icon" },
  { src: "/sns-icons/twitter.svg", alt: "x icon" },
  { src: "/sns-icons/threads.svg", alt: "threads icon" },
  { src: "/sns-icons/blogger.svg", alt: "blogger icon" },
  { src: "/sns-icons/naverblog.svg", alt: "naverblog icon" },
  { src: "/sns-icons/weibo.svg", alt: "Weibo icon" },
  { src: "/sns-icons/tiktok.svg", alt: "tiktok icon" },
];
