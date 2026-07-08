import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function POST(req: Request) {
  const formData = await req.formData();

  const file = formData.get("file") as File;
  const folderId = Number(formData.get("folderId"));

  if (!file || !folderId) {
    return NextResponse.json(
      { error: "File atau folderId kosong" },
      { status: 400 }
    );
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public/uploads");

  await fs.mkdir(uploadDir, { recursive: true });

  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(uploadDir, fileName);

  await fs.writeFile(filePath, buffer);

  const saved = await prisma.files.create({
    data: {
      folder_id: folderId,
      owner_id: 1, // sementara hardcode dulu
      original_name: file.name,
      storage_name: fileName,
      file_size: file.size,
      storage_path: `/uploads/${fileName}`,
    },
  });

  return NextResponse.json(saved);
}