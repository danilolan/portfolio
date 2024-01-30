import { cc } from "@/utils/cc";

type Props = {
  children: React.ReactNode,
  reverse?: boolean
}

export default function SplitScreen({children, reverse}: Props) {
  const classes = cc(
    [
      "grid grid-rows-2 md:grid-rows-none p-16 h-full", 
      !reverse ? "md:grid-cols-[30%,70%]" : "md:grid-cols-[70%,30%]" 
    ]
  )
  return (
    <div className={classes}>
      {children}
    </div>
  );
}
