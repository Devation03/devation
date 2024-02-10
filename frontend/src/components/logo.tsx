import { BracesIcon } from "../icons/lucide-react";
import { Text } from "./ui/typography";

export const Logo = () => {
  return (
    <div className="flex items-center justify-start p-3 gap-3">
      <BracesIcon size="lg" className="text-gray-500" />
      <div className="flex items-end">
        <Text
          text="Devation"
          size="2xl"
          className="text-gray-500 tracking-widest"
        />
      </div>
    </div>
  );
};
