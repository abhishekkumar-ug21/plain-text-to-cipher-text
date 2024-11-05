import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import './styles/navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        {/* Logo or Text on the left */}
        <Typography variant="h6" component="div" className="navbar-title">
          <Link 
            to="/greeting" 
            style={{ 
              textDecoration: 'none', 
              color: 'inherit' // Make sure the text color is inherited
            }}
          >
            GCT
          </Link>
          {/* Replace with a logo if you have one */}
        </Typography>

        {/* Buttons in the center */}
        <Box className="navbar-buttons">
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/generate-cipher">Generate Cipher</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
