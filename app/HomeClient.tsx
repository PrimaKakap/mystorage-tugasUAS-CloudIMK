"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import FolderGrid from "@/components/FolderGrid";
import FileTable from "@/components/FileTable";
import StorageCard from "@/components/StorageCard";
import CreateFolderModal from "@/components/CreateFolderModal";

export default function HomeClient({ folders }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar onNewFolder={() => setOpen(true)} />

      {/* Content */}
      <main className="flex-1 overflow-auto relative">

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

        {/* Modal */}
        <CreateFolderModal
          open={open}
          onClose={() => setOpen(false)}
        />

      </main>

      <StorageCard />

    </div>
  );
}