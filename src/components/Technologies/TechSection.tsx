import { use } from "react";
import type { ITechItem } from "../../types/techItem";
import TechBox from "./TechBox";

interface Props {
  techPromise: Promise<ITechItem[]>;
  stack: ITechItem[];
  onAdd: (item: ITechItem) => void;
}

const TechSection = ({ techPromise, stack, onAdd }: Props) => {
  const items = use(techPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item) => (
        <TechBox
          key={item.id}
          item={item}
          isAdded={!!stack.find((t) => t.id === item.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default TechSection;
