import classNames from "classnames";

interface TypographyProps {
  text: string | number;
  variant?: "light" | "normal" | "medium" | "semibold" | "bold" | "monotype";
  spacing?: "tight" | "normal" | "wide";
  color?: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  className?: string;
  onClick?: () => void;
}

const textVariant = (variant: string) => {
  const font = classNames({
    "font-light": variant === "light",
    "font-normal": variant === "normal",
    "font-medium": variant === "medium",
    "font-semibold": variant === "semibold",
    "font-bold": variant === "bold",
    "font-mono": variant === "monotype",
  });
  return font;
};

const textSpacing = (spacing: string) => {
  const font = classNames({
    "tracking-tight": spacing === "tight",
    "tracking-normal": spacing === "normal",
    "tracking-wide": spacing === "wide",
  });
  return font;
};

const textSize = (size: string) => {
  const font = classNames({
    "text-xs": size === "xs",
    "text-sm": size === "sm",
    "text-base": size === "base",
    "text-lg": size === "lg",
    "text-xl": size === "xl",
    "text-2xl": size === "2xl",
  });
  return font;
};

export const Blockquote = (props: TypographyProps) => {
  const { text, color = "" } = props;
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${color}`}>
      {text}
    </blockquote>
  );
};

export const H1 = (props: TypographyProps) => {
  const { text, variant = "semibold", spacing = "normal", color = "" } = props;

  return (
    <h1
      className={`scroll-m-20 text-4xl lg:text-5xl ${textVariant(
        variant
      )} ${textSpacing(spacing)} ${color}`}
    >
      {text}
    </h1>
  );
};

export const H2 = (props: TypographyProps) => {
  const { text, variant = "semibold", spacing = "normal", color = "" } = props;

  return (
    <h2
      className={`scroll-m-20 pb-2 text-3xl transition-colors first:mt-0 ${textVariant(
        variant
      )} ${textSpacing(spacing)} ${color}`}
    >
      {text}
    </h2>
  );
};

export const H3 = (props: TypographyProps) => {
  const {
    text,
    variant = "semibold",
    spacing = "normal",
    color = "text-hero",
  } = props;

  return (
    <h3
      className={`scroll-m-20 text-2xl ${textVariant(variant)} ${textSpacing(
        spacing
      )} ${color}`}
    >
      {text}
    </h3>
  );
};

export const H4 = (props: TypographyProps) => {
  const { text, variant = "semibold", spacing = "normal", color = "" } = props;

  return (
    <h4
      className={`scroll-m-20 text-xl ${textVariant(variant)} ${textSpacing(
        spacing
      )} ${color}`}
    >
      {text}
    </h4>
  );
};

export const InlineCode = (props: TypographyProps) => {
  const {
    text,
    variant = "semibold",
    spacing = "normal",
    color = "",
    size = "base",
  } = props;
  return (
    <code
      className={`relative rounded bg-faint px-[0.3rem] py-[0.2rem] font-mono ${textVariant(
        variant
      )} ${textSpacing(spacing)} ${textSize(
        size
      )} ${color} whitespace-pre-line`}
    >
      {text}
    </code>
  );
};

export const MutedText = (props: TypographyProps) => {
  const { text, color = "" } = props;
  return <p className={`text-sm text-muted-foreground ${color}`}>{text}</p>;
};

export const ParagraphText = (props: TypographyProps) => {
  const { text, variant = "normal", spacing = "normal", color = "" } = props;

  return (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-6 ${textVariant(
        variant
      )} ${textSpacing(spacing)} ${color}`}
    >
      {text}
    </p>
  );
};

export const LeadText = (props: TypographyProps) => {
  const { text, variant = "normal", spacing = "normal", color = "" } = props;

  return (
    <p
      className={`text-xl text-muted-foreground ${textVariant(
        variant
      )} ${textSpacing(spacing)} ${color}`}
    >
      {text}
    </p>
  );
};

export const Text = (props: TypographyProps) => {
  const {
    text,
    variant = "normal",
    spacing = "normal",
    color = "",
    size = "base",
    className = "",
    onClick = () => {},
  } = props;

  return (
    <div
      className={`
      ${textVariant(variant)}
      ${textSpacing(spacing)}
      ${textSize(size)}
      ${color}
      ${className}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
