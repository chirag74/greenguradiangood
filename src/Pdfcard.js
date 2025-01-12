import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';
import '@react-pdf-viewer/core/lib/styles/index.css'; 

const Pdfcard = ({ pdfFile, title }) => {
    const [showViewer, setShowViewer] = React.useState(false);
  
    const handleView = () => {
      setShowViewer(true);
    };
  
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = pdfFile;
      link.download = title;
      link.click();
    };
  return (
    <div className="pdf-card">
    <h3>{title}</h3>
    <div className="pdf-preview">
      {/* Button to open PDF in a new tab */}
      <a href={pdfFile} target="_blank" rel="noopener noreferrer">
        <button>View PDF</button>
      </a>

    </div>
  </div>
);
};



export default Pdfcard