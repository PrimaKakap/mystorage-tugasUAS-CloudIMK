"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faDownload,
  faTrash,
  faPen,
  faShareNodes,
  faEllipsisVertical,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

interface FileCardProps {
  file: {
    id: number;
    original_name: string;
    storage_path: string;
  };
}

export default function FileCard({ file }: FileCardProps) {
  const [open, setOpen] = useState(false);

  async function deleteFile() {
    if (!confirm("Hapus file ini?")) return;

    const res = await fetch(`/api/files/${file.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      location.reload();
    } else {
      alert("Gagal menghapus file");
    }
  }

  async function renameFile() {
    const name = prompt("Nama file baru", file.original_name);

    if (!name) return;

    const res = await fetch(`/api/files/${file.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        original_name: name,
      }),
    });

    if (res.ok) {
      location.reload();
    } else {
      alert("Rename gagal");
    }
  }

  function shareFile() {
    navigator.clipboard.writeText(
      window.location.origin + "/" + file.storage_path
    );

    alert("Link berhasil disalin");
  }

  return (
    <div className="relative bg-white rounded-2xl border border-gray-600 p-5 hover:shadow-xl transition">

      {/* MENU */}
      <div className="absolute top-4 right-4">

        <button
          onClick={() => setOpen(!open)}
          className="w-8 h-8 rounded-full hover:bg-gray-100"
        >
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-44 bg-gray-600 rounded-xl shadow-xl border overflow-hidden z-20">

            <button
              onClick={() => window.open(file.storage_path)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 w-full text-left"
            >
              <FontAwesomeIcon icon={faEye} />
              Preview
            </button>

            <a
              href={file.storage_path}
              download={file.original_name}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download
            </a>

            <button
              onClick={renameFile}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 w-full text-left"
            >
              <FontAwesomeIcon icon={faPen} />
              Rename
            </button>

            <button
              onClick={shareFile}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 w-full text-left"
            >
              <FontAwesomeIcon icon={faShareNodes} />
              Share
            </button>

            <button
              onClick={deleteFile}
              className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 w-full text-left"
            >
              <FontAwesomeIcon icon={faTrash} />
              Delete
            </button>

          </div>
        )}

      </div>

      {/* FILE */}
      <div
        onClick={() => window.open(file.storage_path)}
        className="cursor-pointer"
      >

        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">

          <FontAwesomeIcon
            icon={faFile}
            className="text-3xl text-blue-600"
          />

        </div>

        <h3
          className="font-semibold text-gray-800 truncate"
          title={file.original_name}
        >
          {file.original_name}
        </h3>

      </div>

    </div>
  );
}