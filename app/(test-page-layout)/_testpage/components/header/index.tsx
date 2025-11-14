import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import HamburgerMenu from "./HamburgerMenu";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-full h-15 md:h-[97px] border-b flex items-center px-5 md:px-10 border-gray200 justify-between">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="헤더 로고이미지"
          width={162.5}
          height={100}
          className="lg:w-[179.95px]"
        />
      </Link>
      <div className="w-160 hidden lg:block">
        <Nav isSideHeader={false} />
      </div>
      <LanguageSelector className="text-lg hidden lg:block" />
      <HamburgerMenu />
    </header>
  );
}
