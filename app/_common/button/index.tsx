import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}
/**@param-variant
 * primary: black background, white text , responsive padding
 * secondary: orange background, white text
 */
export default function Button({
  label,
  onClick,
  variant,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-fit",
        variant === "primary" &&
          "px-5 py-3 lg:px-[50px] lg:py-5 bg-black text-white rounded-[50px]",
        variant === "secondary" &&
          "px-[50px] py-5 bg-primary text-white rounded-[50px]",
        className
      )}
      aria-label={label}
      {...props}
    >
      {label}
    </button>
  );
}
