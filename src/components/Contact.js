import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Add logic to handle form submission (e.g., API call)
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Your Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Box sx={{ textAlign: 'right', mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;
