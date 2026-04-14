'use client';

import { useState } from 'react';

type Props = {
  onFileSelect: (file: File | null) => void;
};

const UploadZone = ({ onFileSelect }: Props) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (file: File) => {
    onFileSelect(file);

    if (!file.type.startsWith('image/')) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Файл слишком большой');
      return;
    }

    const url = URL.createObjectURL(file);

    setPreview((prev) => {
      if (prev) URL.revokeObjectURL(prev);

      return url;
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);

    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onFileSelect(null);
  };

  return (
    <div
      className={`border-2 border-dashed p-6 text-center cursor-pointer transition
        ${dragActive ? 'border-black bg-gray-100' : 'border-gray-300'}`}
      onDragEnter={(e) => {
        e.preventDefault();
        setDragActive(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setDragActive(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => document.getElementById('fileInput')?.click()}
    >
      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            handleFile(e.target.files[0]);
          }
        }}
      />

      {!preview ? (
        <p className="text-sm text-gray-500">
          Перетащите пример/чертеж сюда или нажмите для загрузки
        </p>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <img src={preview} alt="preview" className="max-h-40" />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleRemove();
            }}
            className="text-red-500 text-sm cursor-pointer"
          >
            Удалить
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadZone;
