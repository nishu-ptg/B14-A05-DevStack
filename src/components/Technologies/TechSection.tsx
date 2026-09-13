import { use } from "react";
import type { ITechItem } from "../../types/techItem";
import TechBox from "./TechBox";

interface Props {
  techPromise: Promise<ITechItem[]>;
}

const TechSection = ({ techPromise }: Props) => {
  const items = use(techPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item) => (
        <TechBox key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TechSection;
