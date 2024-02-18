'use client'

import Image from "next/image";
import {useState} from 'react';

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
        <div className="bg-gradient-to-r from-green-500 via-green-300 to-green-300 min-h-screen flex items-center justify-center">
          <div className ="bg-gray-200 p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl  mb-12">Discover your LEED TIEr</h1>
          </div>
          
          <div className="bg-gray-200 p-8 rounded-lg shadow-md w-96">
            <h1 className="text-2xl  mb-12">Upload Your Building Documents</h1>
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
    