"use client";
import React, { useState } from "react";

function File_upload() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    if (files && files[0]) {
      const fileType = files[0].name.split(".").pop().toLowerCase();
      const allowedTypes = ["pdf", "txt", "csv", "xls", "xlsx", "json"];

      if (allowedTypes.includes(fileType)) {
        setFile(files[0]);
      } else {
        alert("Please upload only PDF, TXT, CSV, XLS, or JSON files");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#24303F] p-4">
      <div className="w-full max-w-md">
        <div className="mb-4 text-xl font-semibold text-white">
          Upload your file
        </div>

        <div
          className={`relative border-2 border-dashed rounded-lg p-8 ${
            dragActive
              ? "border-blue-600 bg-[#1a222c]"
              : "border-gray-700 bg-[#1a222c]"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleChange}
            accept=".pdf,.txt,.csv,.xls,.xlsx,.json"
          />

          <div className="text-center">
            <div className="mb-4">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-blue-500 mb-2">Click to upload</p>
            <p className="text-gray-200">or drag and drop</p>
            <p className="text-sm text-gray-400 mt-2">
              PDF, TXT, CSV, XLS, or JSON
            </p>
          </div>
        </div>

        {file && (
          <div className="mt-4 p-4 bg-[#1a222c] rounded-lg border border-gray-700">
            <p className="text-sm text-gray-200">Selected file: {file.name}</p>
          </div>
        )}

        <div className="mt-4 flex justify-end space-x-2">
          <button className="px-4 py-2 text-gray-200 bg-[#1a222c] rounded border border-gray-700 hover:bg-gray-800">
            Cancel
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default File_upload;
