import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "야놀자리서치",
  description:
    "야놀자리서치-과제용페이지/Next.js13+TailwindCSS by grimza99(유선향)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="w-full h-full flex items-center flex-col">
        {/* <div>헤더 영역</div> */}
        {children}
        {/* <footer>푸터 영역</footer> */}
      </body>
    </html>
  );
}
