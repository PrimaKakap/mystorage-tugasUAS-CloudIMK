import { prisma } from "@/lib/prisma";
import UploadFile from "@/components/UploadFile";
import FileCard from "@/components/FileCard";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function FolderDetailPage({ params }: Props) {
  const { id } = await params;

  const folder = await prisma.folders.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      files: true,
    },
  });

  if (!folder) return notFound();

  return (
    <div className="p-8">

      {/* HEADER */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-8">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-5">

            <div className="w-20 h-20 rounded-3xl bg-yellow-100 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faFolderOpen}
                className="text-5xl text-yellow-500"
              />
            </div>

            <div>

              <h1 className="text-3xl font-bold text-gray-800">
                {folder.folder_name}
              </h1>

              <p className="text-gray-500 mt-1">
                {folder.files.length} File
              </p>

            </div>

          </div>

          <UploadFile folderId={Number(folder.id)} />

        </div>

      </div>

      {/* FILE GRID */}

      {folder.files.length === 0 ? (

        <div className="bg-white rounded-2xl border border-gray-200 py-24 text-center">

          <div className="text-7xl mb-4">📂</div>

          <h2 className="text-xl font-semibold text-gray-700">
            Folder masih kosong
          </h2>

          <p className="text-gray-400 mt-2">
            Upload file pertama ke folder ini.
          </p>

        </div>

      ) : (

        <>
          <div className="flex items-center justify-between mb-5">

            <h2 className="text-2xl font-bold text-gray-800">
              Files
            </h2>

            <span className="text-gray-400">
              {folder.files.length} Items
            </span>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {folder.files.map((file) => (
              <FileCard
                key={Number(file.id)}
                file={{
                  id: Number(file.id),
                  original_name: file.original_name,
                  storage_path: file.storage_path,
                }}
              />
            ))}

          </div>

        </>

      )}

    </div>
  );
}