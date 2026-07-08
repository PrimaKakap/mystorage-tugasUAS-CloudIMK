"use client";

import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreateFolderModal({
  open,
  onClose,
}: Props) {
  const [folderName, setFolderName] = useState("");

  if (!open) return null;

  async function createFolder() {
    await fetch("/api/folders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        folder_name: folderName,
      }),
    });

    onClose();

    location.reload();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white rounded-xl w-[400px] p-6">

        <h2 className="text-xl font-bold mb-5">
          Create Folder
        </h2>

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Folder Name"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
        />

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border"
          >
            Cancel
          </button>

          <button
            onClick={createFolder}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white"
          >
            Create
          </button>

        </div>

      </div>

    </div>
  );
}