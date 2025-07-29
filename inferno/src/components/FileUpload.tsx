import React from "react";

type FileUpload = {
  onFileSelect: (file: File) => void;
};

const FileUpload = ({ onFileSelect }: FileUpload) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <label className="text-white cursor-pointer px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition-all">
      🎵 Upload Audio
      <input
        type="file"
        accept="audio/*"
        onChange={handleChange}
        className="hidden"
      />
    </label>
  );
};

export default FileUpload;
