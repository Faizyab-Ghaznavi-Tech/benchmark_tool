import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const About = () => (
  <Box sx={{ p: 4 }}>
    <Paper elevation={3} sx={{ p: 3, textAlign: 'left' }}>
      <Typography variant="h4" gutterBottom>
        About Automated Benchmark Tool
      </Typography>
      <Typography variant="body1" gutterBottom>
        The Automated Benchmark Tool is designed to simplify algorithm analysis by automatically determining
        time complexity and providing insights for optimization. Our mission is to make performance analysis
        accessible, efficient, and user-friendly.
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        Team
      </Typography>
      <Typography variant="body1" gutterBottom>
        This project is developed by a dedicated team of students passionate about algorithm efficiency and
        software development:
      </Typography>
      <Typography variant="body2">
        - Abdul Salam <br />
        - Muhammad Faiyab Khan <br />
        - Mehak Rani
      </Typography>
    </Paper>
  </Box>
);

export default About;
