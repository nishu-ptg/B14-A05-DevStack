import type { ITechItem } from "../../types/techItem";
import { TiStarFullOutline } from "react-icons/ti";

interface TechBoxProps {
  item: ITechItem;
  isAdded: boolean;
  onAdd: (item: ITechItem) => void;
  badgeClass: string;
}

const TechBox = ({ item, isAdded, onAdd, badgeClass }: TechBoxProps) => {
  return (
    <div className="card border border-slate-100 rounded-xl shadow-md">
      <div className="card-body">
        <div className="flex items-center justify-between mb-3">
          <img src={item.icon} alt={item.name} className="w-10 h-10" />

          {/* <span className="badge badge-outline bg-slate-50 text-slate-600 border-slate-200 rounded-full font-semibold text-xs"> */}
          <span
            className={`badge badge-outline rounded-full font-semibold text-xs ${badgeClass}`}
          >
            {item.badge}
          </span>
        </div>
        <h2 className="card-title text-lg">{item.name}</h2>

        <p className="text-xs text-slate-600 pb-4 border-b border-slate-100">
          {item.description}
        </p>

        <div className="flex justify-between items-center mt-2 text-slate-500 text-xs">
          <div className="badge badge-soft badge-accent text-xs">
            {item.category}
          </div>
          <div>{item.difficulty}</div>
          <div className="flex items-center gap-1">
            <TiStarFullOutline className="text-yellow-500 w-4 h-4" />
            {item.rating}
          </div>
        </div>

        <div className="card-actions justify-end mt-3">
          <button
            className={`btn btn-block rounded-xl cursor-pointer ${
              isAdded ? "" : "btn-neutral"
            }`}
            onClick={() => onAdd(item)}
          >
            {isAdded ? "Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechBox;
