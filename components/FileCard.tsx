"use client";

interface FileCardProps {
  file: {
    id: number;
    original_name: string;
    storage_path: string;
  };
}

export default function FileCard({ file }: FileCardProps) {
  return (
    <div className="bg-white border rounded-2xl p-5 hover:shadow-xl transition duration-300 flex flex-col justify-between">
      {/* ICON & NAMA */}
      <div onClick={() => window.open(file.storage_path, '_blank')} className="cursor-pointer">
        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 text-2xl">
          📄
        </div>
        <h3 className="font-semibold text-gray-800 truncate" title={file.original_name}>
          {file.original_name}
        </h3>
      </div>

      {/* ACTIONS */}
      <div className="mt-6 flex gap-2">
        <a 
          href={file.storage_path} 
          download={file.original_name}
          className="flex-1 text-center text-xs bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Download
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.origin + file.storage_path);
            alert("Link berhasil disalin!");
          }}
          className="text-xs bg-gray-100 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Share
        </button>
      </div>
    </div>
  );
}