"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

interface Folder {
  id: bigint;
  folder_name: string;
  files: {
    id: bigint;
  }[];
}

interface FolderGridProps {
  folders: Folder[];
}

export default function FolderGrid({ folders }: FolderGridProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-800">
          My Folders
        </h2>

        <button className="text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {folders.map((folder) => (
          <Link
            href={`/folder/${folder.id.toString()}`}
            key={folder.id.toString()}
            className="
              bg-white
              rounded-2xl
              border
              border-gray-200
              p-5
              hover:shadow-xl
              hover:-translate-y-1
              transition
              duration-300
              block
            "
          >
            <div className="flex justify-between items-center mb-6">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-yellow-100
                  flex
                  items-center
                  justify-center
                "
              >
                <FontAwesomeIcon
                  icon={faFolder}
                  className="text-3xl text-yellow-500"
                />
              </div>

              {/* Nanti bisa dijadikan menu dropdown */}
              <div className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition">
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="text-gray-500"
                />
              </div>

            </div>

            <h3 className="font-semibold text-lg text-gray-800 truncate">
              {folder.folder_name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {folder.files.length} Files
            </p>

            <div className="mt-6 flex justify-between">
              <span
                className="
                  text-xs
                  bg-blue-100
                  text-blue-600
                  px-3
                  py-1
                  rounded-full
                "
              >
                Active
              </span>

              <span className="text-xs text-gray-400">
                Folder
              </span>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}