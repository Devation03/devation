import { ReactNode } from "react";
import { LeftNav } from "./left-nav";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex w-screen justify-end">
      <LeftNav />
      <div className="w-[84.5%] p-3 h-full">{children}</div>
    </div>
  );
};
