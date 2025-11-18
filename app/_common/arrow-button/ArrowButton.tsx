export default function ArrowButton({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <div className="hidden lg:flex w-5 h-5 bg-white rounded-full items-center justify-center">
      {direction === "left" ? (
        <img src="/icons/gray_arrow_left.icon.svg" />
      ) : (
        <img src="/icons/gray_arrow_right.icon.svg" />
      )}
    </div>
  );
}
