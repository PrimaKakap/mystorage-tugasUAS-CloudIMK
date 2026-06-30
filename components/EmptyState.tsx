"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowUp,
  faFolderOpen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

interface EmptyStateProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
}

export default function EmptyState({
  title = "No files found",
  description = "Start by creating a folder or uploading your first file to MyStorage.",
  buttonText = "Upload File",
  onClick,
}: EmptyStateProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-12 text-center">

      {/* Icon */}
      <div className="mx-auto w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">

        <FontAwesomeIcon
          icon={faFolderOpen}
          className="text-5xl text-blue-600"
        />

      </div>

      {/* Title */}
      <h2 className="mt-8 text-2xl font-bold text-gray-800">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-3 text-gray-500 max-w-md mx-auto leading-7">
        {description}
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-8">

        <button
          onClick={onClick}
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
            transition
            flex
            items-center
            gap-3
          "
        >
          <FontAwesomeIcon icon={faCloudArrowUp} />
          {buttonText}
        </button>

        <button
          className="
            border
            border-gray-300
            hover:bg-gray-100
            px-6
            py-3
            rounded-xl
            transition
            flex
            items-center
            gap-3
            font-semibold
          "
        >
          <FontAwesomeIcon icon={faPlus} />
          Create Folder
        </button>

      </div>

    </div>
  );
}