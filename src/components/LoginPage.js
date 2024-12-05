import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Box sx={{ p: 4, maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
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
            Login
          </Button>
        </Box>
      </form>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Don't have an account?{' '}
        <Link href="/signup" color="primary">
          Create New Account
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginPage;
