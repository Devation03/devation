export interface SVGIconProps {
  className?: string;
  strokeWidth?: number;
  color?: string;
  onClick?: () => void;
  size?:
    | "default"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "poster";
}

const getHeightWidthBySize = (
  size: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "poster"
) => {
  let dimensions = { height: 24, width: 24 };

  switch (size) {
    case "xs":
      dimensions = { height: 14, width: 14 };
      break;
    case "sm":
      dimensions = { height: 18, width: 18 };
      break;
    case "md":
      dimensions = { height: 22, width: 22 };
      break;
    case "lg":
      dimensions = { height: 26, width: 26 };
      break;
    case "xl":
      dimensions = { height: 30, width: 30 };
      break;
    case "2xl":
      dimensions = { height: 34, width: 34 };
      break;
    case "3xl":
      dimensions = { height: 38, width: 38 };
      break;
    case "poster":
      dimensions = { height: 70, width: 70 };
      break;
    case "default":
      dimensions = { height: 24, width: 24 };
      break;
  }

  return dimensions;
};

export const ScrollTextIcon = (props: SVGIconProps) => {
  const {
    strokeWidth = 2,
    color = "currentColor",
    className = "",
    onClick = () => {},
    size = "default",
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getHeightWidthBySize(size).width}
      height={getHeightWidthBySize(size).height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-scroll-text ${className}`}
      onClick={onClick}
    >
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M15 8h-5" />
      <path d="M15 12h-5" />
    </svg>
  );
};

export const FileCodeIcon = (props: SVGIconProps) => {
  const {
    strokeWidth = 2,
    color = "currentColor",
    className = "",
    onClick = () => {},
    size = "default",
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getHeightWidthBySize(size).width}
      height={getHeightWidthBySize(size).height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-file-code ${className}`}
      onClick={onClick}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  );
};

export const FilePlus2Icon = (props: SVGIconProps) => {
  const {
    strokeWidth = 2,
    color = "currentColor",
    className = "",
    onClick = () => {},
    size = "default",
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getHeightWidthBySize(size).width}
      height={getHeightWidthBySize(size).height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-file-plus-2 ${className}`}
      onClick={onClick}
    >
      <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M3 15h6" />
      <path d="M6 12v6" />
    </svg>
  );
};

export const BracesIcon = (props: SVGIconProps) => {
  const {
    strokeWidth = 2,
    color = "currentColor",
    className = "",
    onClick = () => {},
    size = "default",
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getHeightWidthBySize(size).width}
      height={getHeightWidthBySize(size).height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-braces ${className}`}
      onClick={onClick}
    >
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
      <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
    </svg>
  );
};

export const Loader2Icon = (props: SVGIconProps) => {
  const {
    strokeWidth = 2,
    color = "currentColor",
    className = "",
    onClick = () => {},
    size = "default",
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getHeightWidthBySize(size).width}
      height={getHeightWidthBySize(size).height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-loader-2 ${className}`}
      onClick={onClick}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};
