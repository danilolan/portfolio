export default function SplitScreen({children}: {children: React.ReactNode}) {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none p-16 h-full">
      {children}
    </div>
  );
}
