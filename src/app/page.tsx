import BigButton from "@/components/BigButton";
import Text from "@/components/Text";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none p-16 h-full">
      <div className="flex flex-col">
        <Text className="md:mt-auto tracking-widest" size="large">
          DANILO HERC
        </Text>
        <div className="my-8">
          <Text weight="light">Fullstack Developer</Text>
          <Text weight="light">React | NextJs | Nest | Prisma | Rust</Text>
        </div>
        <Text weight="light">
          Currently working at{" "}
          <Link className="underline" href="/work/move-your-digital">
            Move Your Digital
          </Link>
        </Text>
      </div>
      <div className="flex flex-col md:ml-auto h-full justify-between">
        <Link href="/work">
          <BigButton>Work</BigButton>
        </Link>
        <Link href="/projects">
          <BigButton>Projects</BigButton>
        </Link>
        <Link href="/about">
          <BigButton>About</BigButton>
        </Link>
        <Link href="/contact">
          <BigButton>Contact</BigButton>
        </Link>
      </div>
    </div>
  );
}
