import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-15 md:h-[97px] border-b flex items-center px-5 border-gray200">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="헤더 로고이미지"
          width={162.5}
          height={100}
          className="lg:w-[179.95px]"
        />
      </Link>
      <div className="flex items-center w-full text-center">
        <Link href="/" className="flex-1">
          Research
        </Link>
        <Link href="/" className="flex-1">
          Datalab
        </Link>
        <Link href="/" className="flex-1">
          Indexes
        </Link>
        <Link href="/" className="flex-1">
          About
        </Link>
      </div>
      <div>KR</div>
    </header>
  );
}
