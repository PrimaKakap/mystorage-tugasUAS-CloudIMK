import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import FolderGrid from "@/components/FolderGrid";
import FileTable from "@/components/FileTable";
import StorageCard from "@/components/StorageCard";

import { prisma } from "@/lib/prisma";

export default async function Home() {

  const folders = await prisma.folders.findMany({
    include: {
      files: true,
    },
  });

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <main className="flex-1 overflow-auto">

        <Header />

        <div className="p-8">

          <Stats />

          <div className="mt-8">
            <FolderGrid folders={folders} />
          </div>

          <div className="mt-8">
            <FileTable />
          </div>

        </div>

      </main>

      <StorageCard />

    </div>
  );
}