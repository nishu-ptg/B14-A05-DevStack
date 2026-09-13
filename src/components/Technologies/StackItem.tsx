import type { ITechItem } from "../../types/techItem";

const StackItem = ({ item }: { item: ITechItem }) => (
  <div className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl bg-white shadow-sm">
    <img src={item.icon} alt={item.name} className="w-10 h-10 rounded-full" />
    <div className="flex flex-col">
      <span className="font-semibold text-sm">{item.name}</span>
      <span className="text-xs text-slate-500">{item.category}</span>
    </div>
  </div>
);

export default StackItem;
