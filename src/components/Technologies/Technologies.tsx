import { Suspense, useState } from "react";
import TechSection from "./TechSection";
import type { ITechItem } from "../../types/techItem";

const techFetch = async (): Promise<ITechItem[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const Technologies = () => {
  const [techPromise] = useState(() => techFetch());

  return (
    <div className="container mx-auto px-5">
      <div className="flex-1 flex flex-col justify-center items-center md:items-start">
        <h2 className="font-inter font-extrabold text-2xl md:text-4xl tracking-tight">
          Explore the &nbsp;
          <span className="bg-(image:--gradient-bg) bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-sm md:text-lg leading-5.5 md:leading-8 text-slate-600 mb-5 md:mb-10">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 pb-14 border-b border-slate-100">
        <section className="w-full md:w-3/4">
          <Suspense fallback={<div>Loading technologies...</div>}>
            <TechSection techPromise={techPromise} />
          </Suspense>
        </section>

        <aside className="w-full md:w-1/4 bg-red-50">
          "Your Stack" section will be here
        </aside>
      </div>
    </div>
  );
};

export default Technologies;
