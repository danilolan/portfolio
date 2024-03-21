import getDictionary from "@/dictionary";

export default async function Page({
  params,
}: {
  params: { companyId: string };
}) {
  const { work } = await getDictionary("pt");
  const job = work.jobs.find(({ id }) => id === params.companyId);
  return <div>My Post: {params.companyId}</div>;
}
