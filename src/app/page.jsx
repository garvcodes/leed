'use client'
import { useState } from 'react';

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle file upload here, e.g., send it to a server or process it locally
    console.log('Selected file:', selectedFile);
  };

  return (
    <div className="bg-gradient-to-r from-teal-100 to-lime-100 min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
 
        <h1 className="text-7xl mb-4 font-bold text-violet-500">LEEDsistant</h1>
        <h2 className="text-2xl mb-12 font-bold text-violet-400">Your personal LEED certifiability predictor and building development assistant</h2>


      {/* Main Content */}
      <div className="bg-blue-00 p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl mb-12">Upload Your Building Documents</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="file" className="block text-sm font-medium text-gray-700">
              Choose a file
            </label>
            <input
              type="file"
              id="file"
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileSelect}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
