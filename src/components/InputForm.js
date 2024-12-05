import React, { useState } from 'react';
import OutputResults from './OutputResults';
import { Box, TextField, Button, Typography } from '@mui/material';

const InputForm = () => {
  const [algorithmCode, setAlgorithmCode] = useState('');
  const [analysisData, setAnalysisData] = useState(null); // Store analysis result

  const handleAnalyze = () => {
    // Perform analysis logic here (dummy data example)
    const result = {
      timeComplexity: 'O(n²)',
      description: 'This algorithm uses nested loops, which increase time complexity.',
      recommendations: 'Consider optimizing inner loop logic to reduce iterations.',
    };
    setAnalysisData(result); // Store the analysis result
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (algorithmCode.trim()) {
      handleAnalyze(); // Call the local analysis logic
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Enter Your Algorithm
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Paste Algorithm Code"
          multiline
          rows={8}
          fullWidth
          variant="outlined"
          value={algorithmCode}
          onChange={(e) => setAlgorithmCode(e.target.value)}
          required
        />
        <Box sx={{ mt: 2, textAlign: 'right' }}>
          <Button type="submit" variant="contained" color="primary">
            Analyze
          </Button>
        </Box>
      </form>

      {/* Display analysis results */}
      {analysisData && <OutputResults data={analysisData} />}
    </Box>
  );
};

export default InputForm;
