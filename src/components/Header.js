import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';

const Header = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Automated Benchmark Tool
      </Typography>
      <Tabs textColor="inherit" indicatorColor="secondary">
        <Tab label="Home" component={Link} to="/" />
        <Tab label="About" component={Link} to="/about" />
        <Tab label="Contact" component={Link} to="/contact" />
        <Tab label="Login" component={Link} to="/login" /> 
      </Tabs>
    </Toolbar>
  </AppBar>
);

export default Header;
