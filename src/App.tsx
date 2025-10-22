
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import RightSidebarToggle from './components/RightSidebarToggle';
import { useUploader } from './hooks/useUploader';

const App: React.FC = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const { selectedFiles, uploadedFiles, busy, error, handleFileSelect, handleUpload } = useUploader();


  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-200 relative">
      {/* Sidebar - 20% */}
      <div className="h-full" style={{ width: '20%' }}>
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          uploadedFiles={uploadedFiles}
          selectedFiles={selectedFiles}
          busy={busy}
          error={error}
          handleFileSelect={handleFileSelect}
          handleUpload={handleUpload}
        />
      </div>

      {/* Hamburger menu for mobile */}
      <button
        className="absolute top-4 left-4 z-40 bg-slate-800 text-white p-2 rounded shadow"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {/* Hamburger icon SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>

      {/* Right Sidebar Toggle */}
      {!rightSidebarOpen && (
        <RightSidebarToggle onClick={() => setRightSidebarOpen(true)} />
      )}

      {/* Main content - 50% */}
      <div className="flex flex-col h-full bg-white" style={{ width: '50%' }}>
        <header className="p-4 border-b border-slate-200 text-center shadow-sm bg-white">
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

      {/* Right Sidebar - 30% */}
      {rightSidebarOpen && (
        <div className="h-full" style={{ width: '30%' }}>
          <RightSidebar />
          <button
            className="absolute top-4 right-[2%] z-40 bg-slate-800 text-white p-2 rounded shadow"
            onClick={() => setRightSidebarOpen(false)}
            aria-label="Close right sidebar"
          >
            {/* Close icon (chevron right) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;