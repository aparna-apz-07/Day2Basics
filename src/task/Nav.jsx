import React from 'react'

const Nav = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">
                <Link to={'/'} style={{color:'white'}}>Login</Link>
              </Button>
              <Button color="inherit">
                <Link to={'/r'} style={{color:'white'}}>Registeration</Link>
              </Button>
              <Button color="inherit">
                <Link to={'/t'} style={{color:'white'}}>Details</Link>
              </Button>
              <Button color="inherit">
                <Link to={'/c'} style={{color:'white'}}>more...</Link>
              </Button>
              <Button color="inherit">
                <Link to={'/b'} style={{color:'white'}}>state</Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
    </div>
  )
}

export default Nav
