import { prisma } from "@/lib/prisma";
import HomeClient from "./HomeClient";

export default async function Home() {
  const folders = await prisma.folders.findMany({
    include: {
      files: true,
    },
  });

  const recentFiles = await prisma.files.findMany({
    orderBy: {
      created_at: "desc",
    },
    take: 10,
  });

  // realtime storage
  const totalFolders = await prisma.folders.count();

  const totalFiles = await prisma.files.count();

  const size = await prisma.files.aggregate({
    _sum: {
      file_size: true,
    },
  });

  const usedStorage =
    Number(size._sum.file_size ?? 0) / 1024 / 1024 / 1024;

  return (
    <HomeClient
      folders={folders}
      recentFiles={recentFiles}
      storage={{
        totalFolders,
        totalFiles,
        usedStorage,
      }}
    />
  );
}