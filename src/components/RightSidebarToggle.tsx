import React from 'react';

const RightSidebarToggle: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    className="absolute top-4 right-4 z-40 bg-slate-800 text-white p-2 rounded shadow"
    onClick={onClick}
    aria-label="Toggle right sidebar"
  >
    {/* Right sidebar icon (chevron left) */}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

export default RightSidebarToggle;
