"use client";

import { useState } from "react";

export default function UploadFile({ folderId }: { folderId: number }) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function upload() {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("folderId", String(folderId));

    await fetch("/api/files", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    location.reload();
  }

  return (
    <div className="flex items-center gap-3">

      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="border p-2 rounded"
      />

      <button
        onClick={upload}
        disabled={!file || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

    </div>
  );
}