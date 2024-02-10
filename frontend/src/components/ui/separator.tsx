interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
}

export const Separator = (props: SeparatorProps) => {
  const { orientation = "horizontal" } = props;
  return (
    <div
      className={`border-b border-thin border-default ${
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"
      }`}
    ></div>
  );
};
