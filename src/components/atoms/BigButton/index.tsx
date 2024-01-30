import { cc } from "@/utils/cc";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  mainClassName?: string;
  subtitle?: React.ReactNode;
  subtitleClassName?: string;
  size?: "small" | "medium" | "large";
}

export default function BigButton({
  children,
  subtitle,
  subtitleClassName,
  mainClassName,
  className,
  size = "medium",
  ...props
}: Props) {
  let buttonClasses = cc([
    className || "",
    "text-white hover:[&>*:nth-child(1)]:italic hover:[&>*:nth-child(1)]:translate-x-5",
  ]);

  let mainClasses = cc([
    mainClassName || "",
    "transition",
    size === "small" ? "text-xl md:text-3xl 2xl:text-5xl" : "",
    size === "medium" ? "text-3xl md:text-5xl 2xl:text-7xl" : "",
    size === "large" ? "text-5xl md:text-7xl 2xl:text-9xl" : "",
  ]);

  let subtitleClasses = cc([
    "mt-2 font-light",
    subtitleClassName || "",
    size === "small" ? "text-[12px] md:text-sm" : "",
    size === "medium" ? "text-sm md:text-base" : "",
    size === "large" ? "text-md md:text-xl mt-6" : "",
  ]);

  return (
    <button className={buttonClasses} {...props}>
      <div className={mainClasses}>{children}</div>
      {subtitle && <div className={subtitleClasses}>{subtitle}</div>}
    </button>
  );
}