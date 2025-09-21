
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFiles((prev) => [...prev, ...Array.from(files)]);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Sidebar */}
      <aside className={`bg-gradient-to-b from-slate-800 to-slate-700 text-white w-64 p-6 flex flex-col transition-transform duration-300 fixed h-full z-20 border-r border-slate-600 shadow-xl ${sidebarOpen ? 'left-0' : '-left-64'} md:static md:left-0 md:block`}>
        <div className="flex items-center justify-between mb-6">
          <span className="font-bold text-xl tracking-wide">Menu</span>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
            {/* Close icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium text-slate-300">Upload File</label>
          <input type="file" multiple onChange={handleFileUpload} className="block w-full text-slate-900 bg-slate-100 rounded p-2" />
        </div>
        <div>
          <h2 className="font-semibold mb-2 text-slate-200">Uploaded Files</h2>
          <ul className="list-disc pl-4">
            {uploadedFiles.map((file, idx) => (
              <li key={idx} className="text-sm truncate text-slate-300">{file.name}</li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Hamburger menu for mobile */}
      <button
        className={`absolute top-4 left-4 z-30 md:hidden bg-slate-800 text-white p-2 rounded shadow transition-opacity ${sidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
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