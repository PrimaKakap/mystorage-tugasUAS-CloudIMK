import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { minioClient } from "@/lib/minio";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const folder = await prisma.folders.create({
      data: {
        owner_id: 1,
        folder_name: body.folder_name,
        color: "#FFD54F",
      },
    });

    // Membuat folder di MinIO
    await minioClient.putObject(
      "mystorage",
      `folder/${folder.id}/.keep`,
      Buffer.from("")
    );

    return NextResponse.json(folder);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Gagal membuat folder" },
      { status: 500 }
    );
  }
}