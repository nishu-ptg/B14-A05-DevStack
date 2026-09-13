import { Suspense, useState } from "react";
import TechSection from "./TechSection";
import type { ITechItem } from "../../types/techItem";
import { toast } from "react-toastify";
import StackSidebar from "./StackSidebar";

const techFetch = async (): Promise<ITechItem[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const Technologies = () => {
  const [techPromise] = useState(() => techFetch());

  const [stack, setStack] = useState<ITechItem[]>([]);

  const handleAddToStack = (item: ITechItem) => {
    if (stack.some((t) => t.id === item.id)) {
      console.log("Already in stack:", stack);
      toast.error(`${item.name} is already in your stack!`);
      return;
    }
    setStack([...stack, item]);
    console.log("Updated stack:", [...stack, item]);
    toast.success(`${item.name} added successfully!`);
  };

  const handleRemoveFromStack = (item?: ITechItem) => {
    if (item) {
      if (window.confirm(`Remove ${item.name} from stack?`)) {
        const newStack = stack.filter((t) => t.id !== item.id);
        setStack(newStack);
        console.log("Removed:", item.name, "Updated stack:", newStack);
        toast.warn(`${item.name} removed from stack`);
      }
    } else {
      if (window.confirm("Are you sure you want to clear the entire stack?")) {
        setStack([]);
        console.log("Cleared stack", stack);
        toast.info("All technologies removed from stack");
      }
    }
  };

  return (
    <div className="container mx-auto px-5">
      <div className="flex-1 flex flex-col justify-center items-center md:items-start">
        <h2 className="font-inter font-extrabold text-2xl md:text-4xl tracking-tight">
          Explore the &nbsp;
          <span className="bg-(image:--gradient-pink-violet) bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-sm md:text-lg leading-5.5 md:leading-8 text-slate-600 mb-5 md:mb-10">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 pb-14 border-b border-slate-100">
        <section className="w-full lg:w-3/4">
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center py-16">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500"></div>
                <p className="mt-4 text-sm text-slate-500">
                  Loading technologies...
                </p>
              </div>
            }
          >
            <TechSection
              techPromise={techPromise}
              stack={stack}
              onAdd={handleAddToStack}
            />
          </Suspense>
        </section>

        <aside className="w-full lg:w-1/4">
          <StackSidebar stack={stack} onRemove={handleRemoveFromStack} />
        </aside>
      </div>
    </div>
  );
};

export default Technologies;
