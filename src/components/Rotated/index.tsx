import { cc } from "@/utils/cc";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Rotated({ children, className }: Props) {
  let mainClasses = cc([className || "", "rotate-180"]);

  return (
    <div className={mainClasses} style={{ writingMode: "vertical-rl" }}>
      {children}
    </div>
  );
}
