import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import UploadFile from "@/components/UploadFile";
import FileCard from "@/components/FileCard";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function FolderDetailPage({ params }: Props) {
  const { id } = await params;
  const folderId = Number(id);

  if (!id || isNaN(folderId)) return notFound();

  const folder = await prisma.folders.findUnique({
    where: { id: folderId },
    include: { files: true },
  });

  if (!folder) return notFound();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">📁 {folder.folder_name}</h1>
          <p className="text-gray-500 mt-1">{folder.files.length} Files</p>
        </div>
        <UploadFile folderId={folder.id} />
      </div>

      {/* CONTENT */}
      <div className="space-y-8">
        {folder.files.length === 0 ? (
          <div className="bg-white border rounded-2xl p-10 text-center text-gray-400">
            Belum ada file di folder ini
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {folder.files.map((file) => (
              // Menggunakan komponen yang sudah dibuat
              <FileCard key={file.id.toString()} file={file} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}