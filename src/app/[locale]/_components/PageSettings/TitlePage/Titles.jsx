"use client";

import PageTitle from "./Title";
import SubTitle from "./SubTitle";

export default function Titles({ title, subTitle }) {
  return (
    <div className="mb-[2rem]">
      <div className="relative mb-2 pb-2 after:absolute after:bottom-0 after:left-0 after:content-[''] after:block after:w-full after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
        <PageTitle title={title} />
      </div>
      <SubTitle subTitle={subTitle} />
    </div>
  );
}
