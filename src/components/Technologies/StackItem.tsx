import type { ITechItem } from "../../types/techItem";
import { IoCloseOutline } from "react-icons/io5";

interface StackItemProps {
  item: ITechItem;
  onRemove: (item?: ITechItem) => void;
}

const StackItem = ({ item, onRemove }: StackItemProps) => (
  <div className="flex items-center p-3 border border-slate-200 rounded-xl bg-white shadow-sm justify-between">
    <div className="flex items-center gap-3">
      <img src={item.icon} alt={item.name} className="w-10 h-10 rounded-full" />
      <div className="flex flex-col">
        <span className="font-semibold text-sm">{item.name}</span>
        <span className="text-xs text-slate-500">{item.category}</span>
      </div>
    </div>
    <button
      className="text-slate-400 cursor-pointer"
      onClick={() => onRemove(item)}
    >
      <IoCloseOutline className="w-8 h-8" />
    </button>
  </div>
);

export default StackItem;
