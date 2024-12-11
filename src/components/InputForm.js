import React, { useState } from 'react';
import OutputResults from './OutputResults';
import { Box, TextField, Button, Typography } from '@mui/material';

const InputForm = () => {
  const [algorithmCode, setAlgorithmCode] = useState('');
  const [analysisData, setAnalysisData] = useState(null); // Store analysis result
  const [uploadedFile, setUploadedFile] = useState(null);

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
    if (algorithmCode.trim() || uploadedFile) {
      handleAnalyze(); // Call the local analysis logic
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAlgorithmCode(event.target.result);
        setUploadedFile(file.name);
      };
      reader.readAsText(file);
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
          required={!uploadedFile} // Require text input only if no file is uploaded
        />
        <Box sx={{ mt: 2 }}>
          <input
            type="file"
            accept=".cpp,.java"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
            id="upload-button"
          />
          <label htmlFor="upload-button">
            <Button variant="outlined" component="span" sx={{ mr: 2 }}>
              Upload File
            </Button>
          </label>
          {uploadedFile && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Uploaded File: {uploadedFile}
            </Typography>
          )}
        </Box>
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
