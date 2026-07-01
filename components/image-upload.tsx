'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageUploadProps {
  onImageChange: (image: string | null) => void;
  uploadedImage: string | null;
}

export default function ImageUpload({ onImageChange, uploadedImage }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageChange(event.target.result as string);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageChange(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleClear = () => {
    onImageChange(null);
  };

  return (
    <div>
      {uploadedImage ? (
        <div className="space-y-3">
          <div className="relative w-full h-40 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
            <img
              src={uploadedImage}
              alt="Uploaded satellite image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2">
            <label className="flex-1 px-3 py-2 border border-zinc-700 text-zinc-300 text-sm font-medium rounded hover:bg-zinc-900 transition cursor-pointer">
              Replace
              <input
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />
            </label>
            <button
              onClick={handleClear}
              className="px-3 py-2 border border-zinc-700 text-zinc-400 text-sm font-medium rounded hover:bg-zinc-900 transition"
            >
              Clear
            </button>
          </div>
        </div>
      ) : (
        <label
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`block p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-all ${
            isDragging
              ? 'border-white bg-zinc-900'
              : 'border-zinc-700 bg-zinc-900/50 hover:border-zinc-600'
          }`}
        >
          <div className="space-y-2">
            <p className="text-white font-medium">Drop image or click to browse</p>
            <p className="text-zinc-400 text-sm">Optical, SAR, or Multispectral images</p>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
}
