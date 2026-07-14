"use client";

import { useMemo, useState } from "react";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import FolderGrid from "@/components/FolderGrid";
import FileTable from "@/components/FileTable";
import StorageCard from "@/components/StorageCard";
import CreateFolderModal from "@/components/CreateFolderModal";

interface HomeClientProps {
  folders: any[];
  recentFiles: any[];
  storage: {
    usedStorage: number;
    totalStorage: number;
    totalFolders: number;
    totalFiles: number;
  };
}

export default function HomeClient({
  folders,
  recentFiles,
  storage,
}: HomeClientProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredFolders = useMemo(() => {
    if (!search) return folders;

    return folders.filter((folder) =>
      folder.folder_name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [folders, search]);

  const filteredFiles = useMemo(() => {
    if (!search) return recentFiles;

    return recentFiles.filter((file) =>
      file.original_name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [recentFiles, search]);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar onNewFolder={() => setOpen(true)} />

      {/* Main */}
      <main className="flex-1 overflow-auto relative">

        <Header
          search={search}
          onSearchChange={setSearch}
        />

        <div className="p-8">

          <FolderGrid folders={filteredFolders} />

          <div className="mt-8">
            <FileTable files={filteredFiles} />
          </div>

        </div>

        <CreateFolderModal
          open={open}
          onClose={() => setOpen(false)}
        />

      </main>

      <StorageCard storage={storage} />

    </div>
  );
}