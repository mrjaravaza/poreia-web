import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navItems = ['Collections', 'Story', 'Craftsmanship', 'Journal', 'Contact'];

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'none',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
            <Typography
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'primary.main',
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                letterSpacing: '0.2em',
                fontWeight: 500,
              }}
            >
              POREIA
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Typography
                    component={Link}
                    to={`/${item.toLowerCase()}`}
                    sx={{
                      textDecoration: 'none',
                      color: 'primary.main',
                      fontSize: '0.9rem',
                      letterSpacing: '0.1em',
                      fontWeight: 400,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: '1px',
                        bottom: '-4px',
                        left: '0',
                        backgroundColor: 'currentColor',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover:after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item}
                  </Typography>
                </motion.div>
              ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton
                color="inherit"
                aria-label="cart"
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                <Box component="span">🛒</Box>
              </IconButton>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
                sx={{ display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 300,
            backgroundColor: 'background.paper',
          },
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              fontFamily: "'Playfair Display', serif",
              letterSpacing: '0.2em',
            }}
          >
            POREIA
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item}
                component={Link}
                to={`/${item.toLowerCase()}`}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  textDecoration: 'none',
                  color: 'primary.main',
                  py: 2,
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontSize: '1.1rem',
                    letterSpacing: '0.1em',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;