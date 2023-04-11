import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
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
              <ListItem button key={link.text}>
                <Link to={link.path}>
                  <ListItemText primary={link.text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <div style={{ flexGrow: 1 }} />
        <div style={{ display: 'flex' }}>
          {menuLinks.map((link) => (
            <Link
              to={link.path}
              key={link.text}
              style={{ margin: '0px 10px' }}
            >
              <ListItemText primary={link.text} />
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;