import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">
                <Link to={'/'} style={{color:'white'}}>LOGIN</Link>
              </Button>
              <Button color="inherit">
                <Link to={'/r'} style={{color:'white'}}>REGISTRATION</Link>
              </Button>
              <Button color="inherit">
                <Link to={'/t'} style={{color:'white'}}>TABLE</Link>
              </Button>
              <Button color="inherit">
                <Link to={'/s'} style={{color:'white'}}>STATE</Link>
              </Button>
              <Button color="inherit">
                <Link to={'/c'} style={{color:'white'}}>COUNTER</Link>
              </Button>
              <Button color="inherit">
                <Link to={'/ts'} style={{color:'white'}}>TASK</Link>
              </Button>
              {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            </Toolbar>
          </AppBar>
        </Box>
        </div>
      );
}

export default Navbar
