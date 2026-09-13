import { use } from "react";
import type { ITechItem } from "../../types/techItem";
import TechBox from "./TechBox";

interface Props {
  techPromise: Promise<ITechItem[]>;
  stack: ITechItem[];
  onAdd: (item: ITechItem) => void;
}

const badgePalette = [
  "slate",
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const makeBadgeClass = (color: string): string =>
  `bg-${color}-50 text-${color}-600 border-${color}-200`;

const TechSection = ({ techPromise, stack, onAdd }: Props) => {
  const items = use(techPromise);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const color = badgePalette[i % badgePalette.length];
          const badgeClass = makeBadgeClass(color);

          return (
            <TechBox
              key={item.id}
              item={item}
              isAdded={!!stack.find((t) => t.id === item.id)}
              onAdd={onAdd}
              badgeClass={badgeClass}
            />
          );
        })}
      </div>

      {/* hidden list hack to pre-genearate all tailwind classes for badge colors */}
      <div className="hidden">
        bg-slate-50 text-slate-600 border-slate-200 bg-gray-50 text-gray-600
        border-gray-200 bg-red-50 text-red-600 border-red-200 bg-orange-50
        text-orange-600 border-orange-200 bg-yellow-50 text-yellow-600
        border-yellow-200 bg-green-50 text-green-600 border-green-200
        bg-emerald-50 text-emerald-600 border-emerald-200 bg-teal-50
        text-teal-600 border-teal-200 bg-cyan-50 text-cyan-600 border-cyan-200
        bg-sky-50 text-sky-600 border-sky-200 bg-blue-50 text-blue-600
        border-blue-200 bg-indigo-50 text-indigo-600 border-indigo-200
        bg-violet-50 text-violet-600 border-violet-200 bg-purple-50
        text-purple-600 border-purple-200 bg-fuchsia-50 text-fuchsia-600
        border-fuchsia-200 bg-pink-50 text-pink-600 border-pink-200 bg-rose-50
        text-rose-600 border-rose-200
      </div>
    </>
  );
};

export default TechSection;
