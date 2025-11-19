import type { Metadata } from "next";
import "./globals.css";
import Header from "./(test-page-layout)/_testpage/components/header";
import Footer from "./(test-page-layout)/_testpage/components/footer";
import FloatMenu from "./_common/float-menu";

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
        <Header />
        {children}
        <Footer />
        <FloatMenu />
      </body>
    </html>
  );
}
