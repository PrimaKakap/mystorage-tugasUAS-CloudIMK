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

  // URL file di MinIO
  const fileUrl = `${process.env.NEXT_PUBLIC_MINIO_URL}/${process.env.NEXT_PUBLIC_MINIO_BUCKET}/${file.storage_path}`;

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

  function previewFile() {
    window.open(fileUrl, "_blank");
  }

  function shareFile() {
    navigator.clipboard.writeText(fileUrl);
    alert("Link berhasil disalin");
  }

  return (
    <div className="relative bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-xl transition">

      {/* MENU */}
      <div className="absolute top-4 right-4">

        <button
          onClick={() => setOpen(!open)}
          className="w-8 h-8 rounded-full hover:bg-gray-100 transition"
        >
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border overflow-hidden z-20">

            <button
              onClick={previewFile}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 w-full text-left"
            >
              <FontAwesomeIcon icon={faEye} />
              Preview
            </button>

            <a
              href={fileUrl}
              download={file.original_name}
              target="_blank"
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
        onClick={previewFile}
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