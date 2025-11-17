import BorderDot from "@/app/_common/dot/BorderDot";

interface CustomPaginationProps {
  totalSlides: number;
  currentIndex: number;
  onClickDot: (index: number) => void;
  onClickArrow: (direction: "next" | "prev") => void;
  onToggleAutoPlay: (toggle: "play" | "pause") => void;
}
export default function CustomPagination({
  totalSlides,
  currentIndex,
  onClickDot,
  onToggleAutoPlay,
  onClickArrow,
}: CustomPaginationProps) {
  return (
    <div className="custom-pagination flex items-center">
      <button onClick={() => onClickArrow("prev")} className="mr-5.5">
        <img
          src="/icons/gray_arrow_left.icon.svg"
          alt="left arrow"
          className="w-3.5 h-3.5"
        />
      </button>
      <div className="flex gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button key={index} onClick={() => onClickDot(index)}>
            <BorderDot isActive={currentIndex === index} />
          </button>
        ))}
      </div>
      <button onClick={() => onToggleAutoPlay("play")} className="ml-5.5">
        <img
          src="/icons/play.icon.svg"
          alt="play icon"
          className="w-3.5 h-3.5"
        />
      </button>
      <button onClick={() => onToggleAutoPlay("pause")} className="ml-4">
        <img
          src="/icons/pause.icon.svg"
          alt="pause icon"
          className="w-3.5 h-3.5"
        />
      </button>
      <button onClick={() => onClickArrow("next")} className="ml-5.5">
        <img
          src="/icons/gray_arrow_right.icon.svg"
          alt="right arrow"
          className="w-3.5 h-3.5"
        />
      </button>
    </div>
  );
}
