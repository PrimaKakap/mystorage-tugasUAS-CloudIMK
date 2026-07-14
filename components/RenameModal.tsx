import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // 1. Import createPortal

interface RenameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRename: (newName: string) => void;
  currentName: string;
}

export default function RenameModal({ isOpen, onClose, onRename, currentName }: RenameModalProps) {
  const [fileName, setFileName] = useState(currentName);
  const [mounted, setMounted] = useState(false); // 2. State untuk mencegah error SSR di Next.js

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      setFileName(currentName);
    }
  }, [isOpen, currentName]);

  if (!isOpen || !mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fileName.trim()) {
      onRename(fileName);
      onClose();
    }
  };

  // 3. Bungkus return dengan createPortal ke document.body
  return createPortal(
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-xl w-[400px] p-6 text-gray-900 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <h2 className="text-xl font-bold mb-5">Rename File</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="New File Name"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            autoFocus
          />

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body // Target render ke root document
  );
}