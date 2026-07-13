import { prisma } from "@/lib/prisma";
import { minio } from "@/lib/minio";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

// ========================
// RENAME FILE
// ========================
export async function PUT(
  req: NextRequest,
  { params }: Props
) {
  try {
    const { id } = await params;

    const body = await req.json();

    const file = await prisma.files.findUnique({
      where: {
        id: BigInt(id),
      },
    });

    if (!file) {
      return NextResponse.json(
        { error: "File tidak ditemukan" },
        { status: 404 }
      );
    }

    await prisma.files.update({
      where: {
        id: BigInt(id),
      },
      data: {
        original_name: body.original_name,
      },
    });

    return NextResponse.json({
      success: true,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Rename gagal" },
      { status: 500 }
    );
  }
}

// ========================
// DELETE FILE
// ========================
export async function DELETE(
  req: NextRequest,
  { params }: Props
) {
  try {
    const { id } = await params;

    const file = await prisma.files.findUnique({
      where: {
        id: BigInt(id),
      },
    });

    if (!file) {
      return NextResponse.json(
        { error: "File tidak ditemukan" },
        { status: 404 }
      );
    }

    // Hapus object di MinIO
    if (file.bucket_name && file.storage_path) {
      await minio.removeObject(
        file.bucket_name,
        file.storage_path
      );
    }

    // Hapus database
    await prisma.files.delete({
      where: {
        id: BigInt(id),
      },
    });

    return NextResponse.json({
      success: true,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Delete gagal" },
      { status: 500 }
    );
  }
}