import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import AppBar from '@mui/material/AppBar';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

function NavBar() {
  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <LocationSearchingIcon />
              </IconButton>
            </Link>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              TaskTracker
            </Typography>
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <HomeIcon />
              </IconButton>
            </Link>
            <Link to="/create-task">
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <AddIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
