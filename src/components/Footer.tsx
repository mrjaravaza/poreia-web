import React from 'react';
import { Box, Typography, Container, TextField, Button, Link as MuiLink } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr', 
              md: 'repeat(3, 1fr)' 
            }, 
            gap: 6, 
            mb: 6 
          }}
        >
          {/* Brand Section */}
          <Box>
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: "'Playfair Display', serif", 
                mb: 3, 
                letterSpacing: '0.1em' 
              }}
            >
              POREIA
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                opacity: 0.8, 
                mb: 3, 
                maxWidth: 300 
              }}
            >
              Carrying African heritage with pride. Each piece tells a story of craftsmanship, community, and cultural preservation.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <InstagramIcon sx={{ cursor: 'pointer', opacity: 0.8, '&:hover': { opacity: 1 } }} />
              <PinterestIcon sx={{ cursor: 'pointer', opacity: 0.8, '&:hover': { opacity: 1 } }} />
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 500 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {['Collections', 'Our Story', 'Craftsmanship', 'Journal', 'Contact'].map((item) => (
                <MuiLink
                  key={item}
                  href="#"
                  sx={{
                    color: 'white',
                    opacity: 0.8,
                    textDecoration: 'none',
                    '&:hover': {
                      opacity: 1,
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {item}
                </MuiLink>
              ))}
            </Box>
          </Box>

          {/* Newsletter */}
          <Box>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 500 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              Subscribe for exclusive updates and early access to new collections.
            </Typography>
            <Box component="form" sx={{ display: 'flex', gap: 1 }}>
              <TextField
                placeholder="Your email"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { 
                      borderColor: 'rgba(255,255,255,0.3)' 
                    },
                    '&:hover fieldset': { 
                      borderColor: 'rgba(255,255,255,0.5)' 
                    },
                    '&.Mui-focused fieldset': { 
                      borderColor: 'rgba(255,255,255,0.7)' 
                    },
                  },
                  '& .MuiInputBase-input': { 
                    color: 'white',
                    '&::placeholder': {
                      color: 'rgba(255,255,255,0.6)',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'secondary.main',
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {currentYear} POREIA. All rights reserved. Carrying African pride, one bead at a time.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;