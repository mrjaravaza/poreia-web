import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CollectionsShowcase from '../components/CollectionsShowcase';

const HomePage: React.FC = () => {
  return (
    <Box>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ color: 'white', textAlign: 'center' }}>
            <Typography
              variant="h1"
              component={motion.h1}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              sx={{
                fontSize: { xs: '3rem', md: '4.5rem' },
                fontWeight: 400,
                letterSpacing: '0.1em',
                mb: 3,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              POREIA
            </Typography>
            
            <Typography
              variant="h4"
              component={motion.h4}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{
                fontSize: { xs: '1.5rem', md: '2.2rem' },
                fontWeight: 300,
                letterSpacing: '0.3em',
                mb: 4,
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              African Originality & Elegance Reimagined.
            </Typography>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  borderWidth: '2px',
                  '&:hover': {
                    borderColor: '#C19A6B',
                    backgroundColor: 'rgba(193, 154, 107, 0.1)',
                  },
                  px: 6,
                  py: 2,
                }}
              >
                Discover Collections
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Story Section */}
      <Box sx={{ py: 8, backgroundColor: 'rgba(193, 154, 107, 0.05)' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    mb: 4,
                  }}
                >
                  From Soil to Soul
                </Typography>
                
                <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Each bead in our handbags carries the story of Zimbabwean mothers who carefully craft them. 
                  These artisans pour generations of knowledge and cultural heritage into every stitch and weave.
                </Typography>
                
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
                  When you purchase a Poreia bag, you're not just acquiring a luxury accessory. You're directly contributing 
                  to the livelihoods of these remarkable women, enabling them to feed their families, educate their children, 
                  and preserve their cultural traditions for future generations.
                </Typography>
              </motion.div>
            </Box>
            
            <Box sx={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                  alt="Zimbabwean artisan"
                  sx={{
                    width: '100%',
                    height: 500,
                    objectFit: 'cover',
                    boxShadow: '20px 20px 0px rgba(193, 154, 107, 0.2)',
                  }}
                />
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Collections */}
      <CollectionsShowcase />

      <Footer />
    </Box>
  );
};

export default HomePage;