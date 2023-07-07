import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Meter } from 'grommet';

const ProgressButton = () => {
  const [progress, setProgress] = useState(20);
//   const [pollCount, setPollCount] = useState(0);
    let pollCount = 2
    var pollInterval;
  const url = "https://mocki.io/v1/221c03e2-312b-4d66-9148-a0d21aa7f79c";

  const fetchProgress = () => {
    // Make API call to fetch initial progress
    // Replace 'apiEndpoint' with your actual API endpoint
    axios.get(url)
      .then(response => {
        setProgress(progress);

        // Start polling the status API every 5 seconds
        pollInterval = setInterval(pollStatus, 5000);
      })
      .catch(error => console.error('Error:', error));
  };

  const pollStatus = () => {
    // Make API call to fetch status
    // Replace 'statusEndpoint' with your actual status API endpoint
    alert(pollCount)
    if(pollCount < 5 ){
        pollCount = pollCount + 1;
           axios.get(url)
      .then(response => {
        setProgress(progress + pollCount * 10);
      })
      .catch(error => console.error('Error:', error));
    } else {
        alert("stopping api");
        clearInterval(pollInterval);
    }

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
