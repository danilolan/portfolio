import BigButton from "@/components/atoms/BigButton";
import Text from "@/components/atoms/Text";
import SplitScreen from "@/components/molecules/SplitScreen";
import Link from "next/link";

export default function Home() {
  return (
    <SplitScreen>
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
          <BigButton size="large">Work</BigButton>
        </Link>
        <Link href="/projects">
          <BigButton size="large">Projects</BigButton>
        </Link>
        <Link href="/about">
          <BigButton size="large">About</BigButton>
        </Link>
        <Link href="/contact">
          <BigButton size="large">Contact</BigButton>
        </Link>
      </div>
    </SplitScreen>
  );
}
