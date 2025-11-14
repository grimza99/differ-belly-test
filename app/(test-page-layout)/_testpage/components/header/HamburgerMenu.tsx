"use client";

import { useState } from "react";
import Nav from "./Nav";
import LanguageSelector from "./LanguageSelector";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="lg:hidden ml-4 cursor-pointer"
      onClick={() => setIsOpen(true)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {isOpen && (
        <div className="fixed right-0 top-0 h-full w-[calc(70%)] bg-bg-black text-white">
          <div className="h-fit w-full flex justify-end">
            <button type="button" className="p-5 ">
              <img
                alt="close icon"
                src="/icons/x.icon.svg"
                className="w-[30px] h-[30px]"
                onClick={() => setIsOpen(false)}
              />
            </button>
          </div>
          <div className="pl-10 flex items-center h-full">
            <div>
              <Nav isSideHeader={true} />
              <LanguageSelector className="text-white text-[28px] mt-10" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
