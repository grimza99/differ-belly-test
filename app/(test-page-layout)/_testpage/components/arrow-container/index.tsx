interface ArrowContainerProps {
  title: string;
  children: React.ReactNode;
}
export default function ArrowContainer({
  title,
  children,
}: ArrowContainerProps) {
  return (
    <>
      <button className="flex items-center gap-2 mb-8 lg:mb-[18px] text-[24.5px] lg:text-[28px]">
        <h2>{title}</h2>
        <img src="/icons/black_arrow_right.icon.svg" />
      </button>
      {children}
    </>
  );
}
