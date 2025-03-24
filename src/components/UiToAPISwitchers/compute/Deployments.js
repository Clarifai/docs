import React, { useState } from 'react';

// Import markdown files as React components
import Content1 from '../../../../ui-to-api-switchers/compute/api-deployments.md';
import Content2 from '../../../../ui-to-api-switchers/compute/ui-deployments.md';

function ToggleDeploymentsPage() {
  // State to manage the selected content
  const [selectedContent, setSelectedContent] = useState('content1');

  // Function to handle button clicks
  const handleToggle = (content) => {
    setSelectedContent(content);
  };

  // Map content keys to their corresponding markdown components
  const contentMap = {
    content1: Content1,
    content2: Content2,
  };

  // Get the selected markdown component
  const SelectedContent = contentMap[selectedContent];

  return (
    <div>      
      {/* Toggle Buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => handleToggle('content1')}
          className={`toggle-button ${selectedContent === 'content1' ? 'active' : ''}`}
        >
          API
        </button>
        <button
          onClick={() => handleToggle('content2')}
          className={`toggle-button ${selectedContent === 'content2' ? 'active' : ''}`}
        >
          UI
        </button>
      </div>

      {/* Dynamically Loaded Markdown Content */}
      <div>      
          <SelectedContent />        
      </div>
    </div>
  );
}

export default ToggleDeploymentsPage;