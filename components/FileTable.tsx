"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faFileWord,
  faFileExcel,
  faFileImage,
  faEllipsisVertical,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function FileTable() {
  const files = [
    {
      id: 1,
      name: "Proposal PKM.pdf",
      owner: "I Komang Yoga",
      date: "20 Jun 2026",
      size: "2.5 MB",
      type: "pdf",
      starred: true,
    },
    {
      id: 2,
      name: "RAB Kegiatan.xlsx",
      owner: "I Komang Yoga",
      date: "18 Jun 2026",
      size: "1.1 MB",
      type: "excel",
      starred: false,
    },
    {
      id: 3,
      name: "Laporan.docx",
      owner: "I Komang Yoga",
      date: "16 Jun 2026",
      size: "850 KB",
      type: "word",
      starred: false,
    },
    {
      id: 4,
      name: "Dokumentasi.jpg",
      owner: "I Komang Yoga",
      date: "15 Jun 2026",
      size: "5.2 MB",
      type: "image",
      starred: true,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return (
          <FontAwesomeIcon
            icon={faFilePdf}
            className="text-red-500 text-xl"
          />
        );

      case "word":
        return (
          <FontAwesomeIcon
            icon={faFileWord}
            className="text-blue-600 text-xl"
          />
        );

      case "excel":
        return (
          <FontAwesomeIcon
            icon={faFileExcel}
            className="text-green-600 text-xl"
          />
        );

      case "image":
        return (
          <FontAwesomeIcon
            icon={faFileImage}
            className="text-purple-600 text-xl"
          />
        );

      default:
        return (
          <FontAwesomeIcon
            icon={faFilePdf}
            className="text-gray-500"
          />
        );
    }
  };

  return (
    <section className="mt-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">

        <h2 className="text-2xl font-bold text-gray-800">
          Recent Files
        </h2>

        <button className="text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr className="text-left text-gray-500 text-sm">

              <th className="px-6 py-4">Name</th>

              <th className="px-6 py-4">Owner</th>

              <th className="px-6 py-4">Modified</th>

              <th className="px-6 py-4">Size</th>

              <th className="px-6 py-4 text-center">
                Favorite
              </th>

              <th className="px-6 py-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {files.map((file) => (

              <tr
                key={file.id}
                className="border-t hover:bg-gray-50 transition"
              >

                {/* Name */}
                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    {getIcon(file.type)}

                    <div>

                      <h4 className="font-semibold text-gray-800">
                        {file.name}
                      </h4>

                      <p className="text-xs text-gray-500">
                        {file.type.toUpperCase()}
                      </p>

                    </div>

                  </div>

                </td>

                {/* Owner */}
                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      Y
                    </div>

                    <span className="text-gray-700">
                      {file.owner}
                    </span>

                  </div>

                </td>

                {/* Date */}
                <td className="px-6 py-5 text-gray-600">
                  {file.date}
                </td>

                {/* Size */}
                <td className="px-6 py-5 text-gray-600">
                  {file.size}
                </td>

                {/* Favorite */}
                <td className="px-6 py-5 text-center">

                  <FontAwesomeIcon
                    icon={faStar}
                    className={
                      file.starred
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />

                </td>

                {/* Action */}
                <td className="px-6 py-5 text-center">

                  <button className="w-10 h-10 rounded-full hover:bg-gray-100 transition">

                    <FontAwesomeIcon
                      icon={faEllipsisVertical}
                      className="text-gray-500"
                    />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}