import clsx from "clsx";

export default function ArrowButton({
  direction,
  className,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;

  className?: string;
}) {
  return (
    <button
      className={clsx(
        "hidden lg:flex bg-white rounded-full items-center justify-center p-[8.5px] w-[37px] h-[37px] ",
        className
      )}
      onClick={onClick}
    >
      {direction === "left" ? (
        <img src="/icons/gray_arrow_left.icon.svg" />
      ) : (
        <img src="/icons/gray_arrow_right.icon.svg" />
      )}
    </button>
  );
}
