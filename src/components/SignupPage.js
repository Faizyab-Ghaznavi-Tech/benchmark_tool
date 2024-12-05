import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
  };

  return (
    <Box sx={{ p: 4, maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Create Account
      </Typography>
      <form onSubmit={handleSignup}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Box sx={{ mt: 3 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SignupPage;
