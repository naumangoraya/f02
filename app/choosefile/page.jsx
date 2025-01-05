import React from "react";

function Page() {
  return (
    <>
      <div className="border-2 border-gray-600 shadow-lg dark:border-gray-600 dark:bg-gray-800">
        <div className="border-b-2 border-gray-600 py-4 px-6 dark:border-gray-600">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            File upload
          </h3>
        </div>
        <div className="flex flex-col gap-5 p-6">
          <div>
            <label className="mb-3 block text-gray-700 dark:text-gray-300">
              Attach file
            </label>
            <input
              type="file"
              className="w-full cursor-pointer border-2 border-gray-600 bg-transparent outline-none transition duration-300 ease-in-out file:mr-4 file:border-2 file:border-gray-600 file:bg-gray-200 file:text-gray-800 file:py-2 file:px-4 file:hover:bg-blue-600 file:hover:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300 active:border-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:file:bg-gray-600 dark:file:text-white dark:focus:border-blue-500"
            />
          </div>

          <button className="mt-1 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-blue-500">
            Upload
          </button>
        </div>
      </div>
    </>
  );
}

export default Page;
