import type { ITechItem } from "../../types/techItem";
import StackItem from "./StackItem";

interface StackSidebarProps {
  stack: ITechItem[];
}

const StackSidebar = ({ stack }: StackSidebarProps) => {
  const count = stack.length;

  return (
    <aside className="w-full md:w-1/4 ">
      <div className="border-slate-100 rounded-xl shadow-md p-5">
        <h3 className="font-bold text-lg mb-3 text-slate-900">Your Stack</h3>

        <p className="text-sm font-medium mb-6 text-slate-400">
          {count === 0
            ? "No technologies selected yet."
            : `${count} ${count === 1 ? "Technology" : "Technologies"} Selected`}
        </p>

        {count === 0 ? (
          <div className="py-8 border-2 font-medium border-dashed border-slate-200 rounded-2xl text-center text-sm text-slate-400 ">
            Your stack is empty.
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {stack.map((item) => (
              <StackItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default StackSidebar;
