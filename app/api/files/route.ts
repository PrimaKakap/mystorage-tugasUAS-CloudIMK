import { prisma } from "@/lib/prisma";
import { minio } from "@/lib/minio";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const folderId = Number(formData.get("folderId"));

    if (!file || !folderId) {
      return NextResponse.json(
        { error: "File atau Folder kosong" },
        { status: 400 }
      );
    }

    // Buffer file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Nama file unik
    const ext = path.extname(file.name);

    const fileName =
      Date.now() +
      "-" +
      Math.random().toString(36).substring(2, 8) +
      ext;

    // Lokasi object di MinIO
    const objectName = `folder/${folderId}/${fileName}`;

    // Upload ke MinIO
    await minio.putObject(
      "mystorage",
      objectName,
      buffer,
      file.size,
      {
        "Content-Type": file.type,
      }
    );

    // Simpan metadata ke MySQL
    const saved = await prisma.files.create({
      data: {
        folder_id: BigInt(folderId),
        owner_id: BigInt(1),

        original_name: file.name,
        storage_name: fileName,

        extension: ext.replace(".", ""),
        mime_type: file.type,

        file_size: BigInt(file.size),

        storage_path: objectName,
        bucket_name: "mystorage",

        is_starred: false,
        is_deleted: false,
      },
    });

    return NextResponse.json({
      success: true,
      file: saved,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: "Upload gagal",
      },
      {
        status: 500,
      }
    );
  }
}