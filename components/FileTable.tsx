"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFilePdf,
  faFileWord,
  faFileExcel,
  faFileImage,
} from "@fortawesome/free-solid-svg-icons";

interface FileTableProps {
  files: {
    id: bigint;
    original_name: string;
    extension: string | null;
    file_size: bigint;
    created_at: Date;
    owner_id: bigint;
    is_starred: boolean;
    storage_path: string;
  }[];
}

export default function FileTable({ files }: FileTableProps) {
  function getIcon(ext: string | null) {
    switch (ext?.toLowerCase()) {
      case "pdf":
        return (
          <FontAwesomeIcon
            icon={faFilePdf}
            className="text-red-500 text-2xl"
          />
        );

      case "doc":
      case "docx":
        return (
          <FontAwesomeIcon
            icon={faFileWord}
            className="text-blue-600 text-2xl"
          />
        );

      case "xls":
      case "xlsx":
        return (
          <FontAwesomeIcon
            icon={faFileExcel}
            className="text-green-600 text-2xl"
          />
        );

      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
      case "webp":
        return (
          <FontAwesomeIcon
            icon={faFileImage}
            className="text-purple-600 text-2xl"
          />
        );

      default:
        return (
          <FontAwesomeIcon
            icon={faFile}
            className="text-gray-500 text-2xl"
          />
        );
    }
  }

  function formatSize(size: bigint) {
    const bytes = Number(size);

    if (bytes < 1024) return bytes + " B";

    if (bytes < 1024 * 1024)
      return (bytes / 1024).toFixed(1) + " KB";

    if (bytes < 1024 * 1024 * 1024)
      return (bytes / 1024 / 1024).toFixed(2) + " MB";

    return (bytes / 1024 / 1024 / 1024).toFixed(2) + " GB";
  }

  function formatDate(date: Date) {
    return new Date(date).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Recent Files
        </h2>

        <span className="text-sm text-gray-500">
          {files.length} Files
        </span>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full">

          <thead className="bg-gray-50">
            <tr className="text-left text-gray-500 text-sm">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Owner</th>
              <th className="px-6 py-4">Modified</th>
              <th className="px-6 py-4">Size</th>
            </tr>
          </thead>

          <tbody>

            {files.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="py-12 text-center text-gray-400"
                >
                  Belum ada file
                </td>
              </tr>
            ) : (
              files.map((file) => (
                <tr
                  key={file.id.toString()}
                  className="border-t hover:bg-gray-50 transition"
                >
                  {/* Name */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      {getIcon(file.extension)}

                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {file.original_name}
                        </h4>

                        <p className="text-xs text-gray-500 uppercase">
                          {file.extension ?? "-"}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Owner */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                        A
                      </div>

                      <span className="text-gray-700">
                        Admin
                      </span>
                    </div>
                  </td>

                  {/* Modified */}
                  <td className="px-6 py-5 text-gray-600">
                    {formatDate(file.created_at)}
                  </td>

                  {/* Size */}
                  <td className="px-6 py-5 text-gray-600">
                    {formatSize(file.file_size)}
                  </td>
                </tr>
              ))
            )}

          </tbody>

        </table>
      </div>
    </section>
  );
}