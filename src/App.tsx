
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFiles(Array.from(files));
    }
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      setUploadedFiles((prev) => [...prev, ...selectedFiles]);
      setSelectedFiles([]);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        uploadedFiles={uploadedFiles}
        selectedFiles={selectedFiles}
        handleFileSelect={handleFileSelect}
        handleUpload={handleUpload}
      />

      {/* Hamburger menu for mobile */}
      <button
        className="absolute top-4 left-4 z-40 bg-slate-800 text-white p-2 rounded shadow"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {/* Hamburger icon SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="p-4 bg-white border-b border-slate-200 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-800 tracking-wide">Chat Application</h1>
        </header>
        <main className="flex-1 flex flex-col justify-end p-0">
          <div className="flex-1 flex items-stretch justify-center">
            <div className="w-full max-w-2xl flex flex-col h-full">
              <ChatWindow />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;