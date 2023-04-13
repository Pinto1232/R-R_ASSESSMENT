import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/styles/global.css';
import menuLinks from '../../Data/NavLinks'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Logo from '../../assets/images/logo.png'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (location.pathname === '/') {
    return null; // Don't show Navbar on root URL
  }

  return (
    <AppBar position="static" style={{ backgroundColor: '#000' }}>
      <Toolbar>
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ width: "30%" }} />
        </Link>
        <StyledIconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerOpen}
        >
        <Menu />
        </StyledIconButton>
        <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
          <List>
            {menuLinks.map((link) => (
              <ListItem key={link.text}>
                <Link to={link.path}>
                  <ListItemText primary={link.text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <div style={{ flexGrow: 1 }} />
        <div style={{ display: 'flex',  whiteSpace: 'nowrap' }}>
          {menuLinks.map((link) => (
            <Link
              to={link.path}
              key={link.text}
              style={{
                margin: '0px 10px',
                textDecoration: 'none',
                color: '#fff'
              }}
            >
              <ListItemText
                sx={{
                  textDecoration: 'none',
                  fontSize: '25px'
                }}
                primary={link.text}
              />
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;