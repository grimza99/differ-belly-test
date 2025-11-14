export default function TestPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="px-[15px]">{children}</main>;
}
