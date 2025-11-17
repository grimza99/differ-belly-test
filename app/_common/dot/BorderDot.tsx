import clsx from "clsx";

export default function BorderDot({ isActive }: { isActive: boolean }) {
  return (
    <div
      className={clsx(
        "w-2.5 h-2.5 border border-gray600 rounded-full ",
        isActive ? "bg-black" : "bg-white"
      )}
    />
  );
}
