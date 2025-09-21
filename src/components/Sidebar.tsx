import React from 'react';


interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  uploadedFiles: File[];
  selectedFiles: File[];
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpload: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen, uploadedFiles, selectedFiles, handleFileSelect, handleUpload }) => (
  <aside className={`bg-gradient-to-b from-slate-800 to-slate-700 text-white w-64 p-6 flex flex-col transition-transform duration-300 fixed h-full z-20 border-r border-slate-600 shadow-xl ${sidebarOpen ? 'left-0' : '-left-64'}`}>
    <div className="flex items-center gap-3 mb-6">
      <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar" className="">
        {/* Hamburger/close icon SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <span className="font-bold text-xl tracking-wide">Menu</span>
    </div>
    <div className="mb-6 bg-slate-700 rounded-lg p-4 border border-slate-600">
      <label className="block mb-2 font-medium text-slate-200">Upload File</label>
      <div className="flex flex-row gap-2 items-center mb-2 flex-wrap">
        <label htmlFor="sidebar-file-upload" className="inline-block cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors">
          Choose Files
        </label>
      </div>
      <input
        id="sidebar-file-upload"
        type="file"
        multiple
        onChange={handleFileSelect}
        className="hidden"
      />
      {selectedFiles.length > 0 && (
        <div className="mt-2">
          <h3 className="text-slate-300 text-sm mb-1">Selected Files:</h3>
          <ul className="list-disc pl-4 mb-2">
            {selectedFiles.map((file, idx) => (
              <li key={idx} className="text-xs text-slate-200 truncate">{file.name}</li>
            ))}
          </ul>
          <button
            type="button"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      )}
    </div>
    <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
      <h2 className="font-semibold mb-2 text-slate-100">Uploaded Files</h2>
      <ul className="list-disc pl-4">
        {uploadedFiles.length === 0 ? (
          <li className="text-sm text-slate-400">No files uploaded.</li>
        ) : (
          uploadedFiles.map((file, idx) => (
            <li key={idx} className="text-sm truncate text-slate-200">{file.name}</li>
          ))
        )}
      </ul>
    </div>
  </aside>
);

export default Sidebar;
