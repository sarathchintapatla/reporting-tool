import React, { useState } from 'react';
import { Box, Meter } from 'grommet';

const ProgressButton = () => {
  const [progress, setProgress] = useState(null);
  const url = "https://mocki.io/v1/221c03e2-312b-4d66-9148-a0d21aa7f79c";

  const fetchProgress = () => {
    // Make API call here to fetch progress
    // Replace 'apiEndpoint' with your actual API endpoint
    fetch(url)
      .then(response => response.json())
      .then(data => setProgress(data.progress))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <button onClick={fetchProgress}>Show Progress</button>
      {progress !== null && <p>
        <Box align="center" pad="large">
      <Meter type="bar" value={progress} />
    </Box>
        
        </p>}
    </div>
  );
};

export default ProgressButton;
