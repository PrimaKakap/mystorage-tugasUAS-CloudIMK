import { prisma } from "@/lib/prisma";
import UploadFile from "./UploadFile";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function FolderDetailPage({ params }: Props) {
  const folderId = Number(params.id);

  if (!folderId) return notFound();

  const folder = await prisma.folders.findUnique({
    where: { id: folderId },
    include: { files: true },
  });

  if (!folder) return notFound();

  return (
    <div className="p-10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            📁 {folder.folder_name}
          </h1>

          <p className="text-gray-500 mt-1">
            {folder.files.length} file
          </p>
        </div>

        {/* UPLOAD COMPONENT */}
        <UploadFile folderId={folder.id} />
      </div>

      {/* FILE LIST */}
      <div className="bg-white border rounded-xl overflow-hidden">

        <table className="w-full text-left">

          <thead className="bg-gray-50 text-sm text-gray-500">
            <tr>
              <th className="p-4">Nama</th>
              <th className="p-4">Ukuran</th>
            </tr>
          </thead>

          <tbody>
            {folder.files.length === 0 ? (
              <tr>
                <td className="p-6 text-center text-gray-400" colSpan={2}>
                  Belum ada file
                </td>
              </tr>
            ) : (
              folder.files.map((file) => (
                <tr key={file.id.toString()} className="border-t">
                  <td className="p-4">📄 File #{file.id.toString()}</td>
                  <td className="p-4 text-gray-500">-</td>
                </tr>
              ))
            )}
          </tbody>

        </table>

      </div>
    </div>
  );
}