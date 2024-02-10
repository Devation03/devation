import { Link, useLocation } from "react-router-dom";
import { SVGIconProps } from "../../icons/lucide-react";

interface NavTabProps {
  text: string;
  link: string;
  Icon?: (props: SVGIconProps) => JSX.Element;
}

export const NavTab = (props: NavTabProps) => {
  const { text, link, Icon } = props;
  const location = useLocation();
  const { pathname } = location;

  return (
    <Link
      className={`flex items-center gap-3 h-10 px-3 hover:bg-stone-200 cursor-pointer ${
        pathname === link && "bg-stone-200"
      }`}
      to={link}
    >
      {Icon && <Icon size="sm" />}
      {text}
    </Link>
  );
};
