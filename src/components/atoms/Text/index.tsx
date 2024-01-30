import { cc } from "@/utils/cc";

enum SIZE {}

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "span";
  uppercase?: boolean;
  weight?: "thin" | "light" | "medium" | "bold" | "black";
};

export default function Text({
  children,
  className,
  size = "medium",
  as = "p",
  uppercase,
  weight = "medium",
}: Props) {
  let mainClasses = cc([
    className || "",
    "text-white",
    `font-${weight}`,
    size === "small" ? "text-sm/[17px] md:text-sm" : "",
    size === "medium" ? "text-md md:text-xl" : "",
    size === "large" ? "text-xl md:text-2xl" : "",
    uppercase ? "uppercase" : "",
  ]);

  const CustomTag = as;

  return <CustomTag className={mainClasses}>{children}</CustomTag>;
}
