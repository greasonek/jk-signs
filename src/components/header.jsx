import * as React from 'react';
import { Button, Fade, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/imgs/JK-logo.png'

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
      <Button>
        <Link href={'/'} underline='none' color={'#5cb6bd'}>
          <img src= {logo} alt='logo' width={200} display='flex'/> 
        </Link>
      </Button>
    </div>
  
    <div className='menu'>
      <Button 
        style={{display: 'flex', justifyContent:'flex-end'}}
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
        <MenuItem onClick={handleClose}>
          <Link href={'/'} underline='none' color={'#5cb6bd'}>Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={'/about'} underline='none' color={'#5cb6bd'}>About</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={'/gallery'} underline='none' color={'#5cb6bd'}>Gallery</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={'/shop'} underline='none' color={'#5cb6bd'}>Shop</Link>
        </MenuItem>
      </Menu>
    </div>
    </div>
  )
}

export default Header