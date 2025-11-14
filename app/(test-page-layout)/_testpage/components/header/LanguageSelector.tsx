export default function LanguageSelector({
  className,
}: {
  className?: string;
}) {
  return (
    <select
      className={className}
      id="language-selector"
      name="language-selector"
    >
      <option>KR</option>
      <option>EN</option>
    </select>
  );
}
