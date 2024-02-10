import { NavTab } from "../components/layout/nav-tab";
import { Logo } from "../components/logo";
import { FileCodeIcon, FilePlus2Icon } from "../icons/lucide-react";

export const LeftNav = () => {
  return (
    <div className="flex flex-col gap-1 h-full w-56 fixed left-0 bg-stone-100">
      <Logo />
      <div>
        <NavTab Icon={FileCodeIcon} text="Documents" link="/documents" />
        <NavTab
          Icon={FilePlus2Icon}
          text="Create Document"
          link="/create-document"
        />
      </div>
    </div>
  );
};
