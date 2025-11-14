"use client";

import { useState } from "react";

export default function FamilySiteSelector() {
  const [selectedSite, setSelectedSite] = useState("default");

  const githubUrl = "https://github.com/grimza99";
  const blogUrl = "https://velog.io/@grimza99/series";

  const handleSiteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSite(value);

    if (value === "github") {
      window.open(githubUrl, "_blank");
      setSelectedSite("default");
    }
    if (value === "blog") {
      window.open(blogUrl, "_blank");
      setSelectedSite("default");
    }
  };

  return (
    <div className="relative h-12 text-white bg-gray800 border rounded-[30px] border-none text-[14px] px-6 w-[230px] flex items-center">
      <select
        id="family-site-selector"
        className="appearance-none w-full focus:outline-none"
        value={selectedSite}
        onChange={handleSiteChange}
      >
        <option value="default"> Family site</option>
        <option value="github">grimza99 GitHub</option>
        <option value="blog">grimza99 blog</option>
      </select>
      <img
        src="/icons/plus.icon.svg"
        alt="arrow icon"
        className="w-2.5 h-2.5 absolute right-0 top-1/2 -translate-y-1/2 mr-6 "
      />
    </div>
  );
}
