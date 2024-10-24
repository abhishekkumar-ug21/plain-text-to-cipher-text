import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';

const NavBar1 = () => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(true);

  // Toggle function
//   const handleThemeChange = () => {
//     setDarkMode(!darkMode);
//   };

  // Creating a theme with Material UI
//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//     },
//   });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          {/* Logo or Text on the left */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GCT {/* Replace with a logo if you have one */}
          </Typography>

          {/* Buttons in the center */}
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 2 }}>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Generate Cipher</Button>
          </Box>

          {/* Dark Mode Toggle Button on the right */}
          {/* <Switch checked={darkMode} /> */}
          {/* <Switch checked={darkMode} onChange={handleThemeChange} />/ */}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar1;
