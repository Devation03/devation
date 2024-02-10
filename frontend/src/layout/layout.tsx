import { ElementType } from "react";
import { LeftNav } from "./left-nav";

export const withLayout = (Component: ElementType) => {
  return function WithLayout(props: any) {
    return (
      <div className="h-screen flex w-screen justify-end">
        <LeftNav />
        <div className="w-[84.5%] p-3 h-full">
          <Component {...props} />
        </div>
      </div>
    );
  };
};
