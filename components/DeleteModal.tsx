"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  fileName: string;
}

export default function DeleteModal({ isOpen, onClose, onConfirm, fileName }: DeleteModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl animate-in zoom-in-95 duration-200 z-10">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Hapus File?</h3>
        <p className="text-gray-600 text-sm mb-6">
          Apakah kamu yakin ingin menghapus <span className="font-semibold text-gray-800">{fileName}</span>? Tindakan ini tidak dapat dibatalkan.
        </p>

        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-xl hover:bg-red-700 transition"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}