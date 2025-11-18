import BorderDot from "@/app/_common/dot/BorderDot";

interface CustomPaginationBulletsProps {
  totalBullet: number;
  currentIndex: number;
  onClickDot: (index: number) => void;
}
export default function CustomPaginationBullets({
  totalBullet,
  currentIndex,
  onClickDot,
}: CustomPaginationBulletsProps) {
  return (
    <div className="custom-pagination flex items-center">
      <div className="flex gap-3">
        {Array.from({ length: totalBullet }).map((_, index) => (
          <button key={index} onClick={() => onClickDot(index)}>
            <BorderDot isActive={currentIndex === index} />
          </button>
        ))}
      </div>
    </div>
  );
}
