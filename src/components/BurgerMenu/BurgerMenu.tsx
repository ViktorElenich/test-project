import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.scss';

const BurgerMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { burgerMenu } = styles;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={burgerMenu}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
      ><MenuIcon fontSize="large" /></Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><NavLink to="/about">About</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/services">Services</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/pricing">Pricing</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="Blog">Blog</NavLink></MenuItem>
      </Menu>
    </div>
  )
}

export default BurgerMenu;