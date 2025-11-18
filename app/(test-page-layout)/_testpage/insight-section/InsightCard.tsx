import clsx from "clsx";

const CARD_BG_MAP = {
  1: "/background/bg_chart.svg",
  2: "/background/bg_glass.svg",
  3: "/background/datalab.svg",
};
export default function InsightCard({
  label,
  id,
}: {
  label: string;
  id: number;
}) {
  return (
    <div
      className={clsx(
        "w-full flex flex-col relative text-white p-3 rounded-2xl lg:p-6",
        id === 2 ? "bg-orange700" : "bg-primary"
      )}
    >
      <span className="text-[17.5px] lg:text-xl">{label}</span>
      <button className="flex">
        <span className="text-opacity70-white">바로가기</span>
        <img src="/icons/gray_arrow_right.icon.svg" />
      </button>
      <img
        src={CARD_BG_MAP[id as keyof typeof CARD_BG_MAP]}
        alt="card-image"
        className="absolute top-0 right-0 overflow-hidden rounded-2xl h-full"
      />
    </div>
  );
}
