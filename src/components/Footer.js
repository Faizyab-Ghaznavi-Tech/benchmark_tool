import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ mt: 4, textAlign: 'center', py: 2, bgcolor: 'background.paper' }}>
    <Typography variant="body2" color="textSecondary">
      © 2024 Automated Benchmark Tool | Developed by Your FYP Team
    </Typography>
  </Box>
);

export default Footer;
