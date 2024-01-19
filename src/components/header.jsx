import * as React from 'react';
import { Button, Fade, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className='header'>
    <div className='header-name'>
      <Typography variant='h3' color='#5cb4bd'>Josh King Signs</Typography>
    </div>
  
    <Button 
      id='menu-button'
      aria-controls={open ? 'site-menu' : undefined}
      // aria-hashpopup='true'
      aria-expanded={open ? 'true' : undefined}
      onClick={handleMenuClick}
    >
      <MenuIcon sx={{
        color: '#5cb6bd', 
        fontSize:40, 
        padding:1,
      }}>menu</MenuIcon>
    </Button>
    
    <Menu
      id='site-menu'
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
      menulistprop={{
        'aria-labelledby': 'menu-button',
      }}
    >
      <MenuItem onClick={handleClose}>Home</MenuItem>
      <MenuItem onClick={handleClose}>About</MenuItem>
      <MenuItem onClick={handleClose}>Gallery</MenuItem>
      <MenuItem onClick={handleClose}>Shop</MenuItem>
    </Menu>
    </div>
  )
}

export default Header