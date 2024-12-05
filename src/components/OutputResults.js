import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const OutputResults = ({ data }) => (
  <Box sx={{ p: 4 }}>
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6">Analysis Results</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        <strong>Time Complexity:</strong> {data.timeComplexity}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        <strong>Description:</strong> {data.description}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        <strong>Recommendations:</strong> {data.recommendations}
      </Typography>
    </Paper>
  </Box>
);

export default OutputResults;
