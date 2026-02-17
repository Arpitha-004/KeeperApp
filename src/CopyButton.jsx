import React, { useState } from 'react';

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy} 
      className="copy-btn"
      style={{ 
        backgroundColor: copied ? '#4CAF50' : '#008CBA',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'background-color 0.3s ease'
      }}
    >
      {copied ? '✓ Copied!' : 'Copy Note'}
    </button>
  );
}

export default CopyButton;