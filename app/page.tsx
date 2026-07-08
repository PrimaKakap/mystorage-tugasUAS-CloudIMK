import { prisma } from "@/lib/prisma";
import HomeClient from "./HomeClient";

export default async function Home() {

  const folders = await prisma.folders.findMany({
    include: {
      files: true,
    },
  });

  return (
    <HomeClient folders={folders} />
  );
}