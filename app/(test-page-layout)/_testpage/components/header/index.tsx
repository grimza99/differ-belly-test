import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";

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
      <nav className="items-center w-160 text-center hidden md:flex">
        <Link href="/" className="flex-1">
          Research
        </Link>
        <Link href="/datalab" className="flex-1">
          Datalab
        </Link>
        <Link href="/indexes" className="flex-1">
          Indexes
        </Link>
        <Link href="/about" className="flex-1">
          About
        </Link>
      </nav>
      <LanguageSelector />
      <div></div>
    </header>
  );
}
