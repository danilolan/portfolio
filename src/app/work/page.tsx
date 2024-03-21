import BigButton from "@/components/atoms/BigButton";
import Text from "@/components/atoms/Text";
import SplitScreen from "@/components/molecules/SplitScreen";
import getDictionary from "@/dictionary";
import { nameToPath } from "@/utils/str";
import Link from "next/link";

export default async function Work() {
  const { work } = await getDictionary("pt");
  return (
    <SplitScreen reverse>
      <div className="flex flex-col md:mr-auto h-full justify-between md:text-left text-center gap-2">
        {work.jobs.map((job) => (
          <Link href={`work/${job.id}`}>
            <BigButton
              size="medium"
              subtitle={job.role}
              mainClassName="md:text-left text-center"
              subtitleClassName="md:text-left text-center"
              flag={job.isCurrent ? "CURRENT" : undefined}
            >
              {job.company}
            </BigButton>
          </Link>
        ))}
      </div>
      <div className="flex flex-col mt-12">
        <Text className="md:mt-auto tracking-widest" size="large">
          Work
        </Text>
        <Text weight="light" className="mt-6" size="medium">
          These are the places I worked using React, NextJs, Nest, Prisma and
          other technologies
        </Text>
        <Text weight="light" className="mt-4" size="medium">
          The world of IT is constantly evolving and so has my role over the
          last 3 years. I keep studying and acquiring new knowledge.
        </Text>
      </div>
    </SplitScreen>
  );
}
