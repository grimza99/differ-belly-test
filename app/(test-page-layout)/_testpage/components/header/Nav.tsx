import clsx from "clsx";
import Link from "next/link";

const desktopNavItems = [
  { name: "Research", path: "/research" },
  { name: "Datalab", path: "/datalab" },
  { name: "Indexes", path: "/indexes" },
  { name: "About", path: "/about" },
];
const nonDesktopNavItems = [
  { name: "HOME", path: "/" },
  { name: "RESEARCH", path: "/research" },
  { name: "INDEXES", path: "/indexes" },
  { name: "ABOUT", path: "/about" },
];
export default function Nav({ isSideHeader }: { isSideHeader?: boolean }) {
  return (
    <nav
      className={clsx(
        isSideHeader && "flex flex-col text-[28px] gap-10",
        !isSideHeader && "items-center w-full text-center flex"
      )}
    >
      {!isSideHeader
        ? desktopNavItems.map((item) => (
            <Link key={item.name} href={item.path} className="flex-1">
              {item.name}
            </Link>
          ))
        : nonDesktopNavItems.map((item) => (
            <Link key={item.name} href={item.path} className="flex-1">
              {item.name}
            </Link>
          ))}
    </nav>
  );
}
