import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Collections: React.FC = () => {
  const collections = [
    {
      title: 'The Heritage Collection',
      description: 'Hand-beaded masterpieces inspired by traditional patterns',
      image: '/images/heritagecollection.webp'
    },
    {
      title: 'Modern Safari',
      description: 'Contemporary designs with African wildlife motifs',
      image: '/images/modernsafari.webp'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontFamily: "'Playfair Display', serif", 
            mb: 2 
          }}
        >
          Collections
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'text.secondary', 
            maxWidth: 600, 
            mx: 'auto' 
          }}
        >
          Discover our curated collections, each telling a unique story of African heritage and craftsmanship.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6 }}>
        {collections.map((collection, index) => (
          <motion.div
            key={collection.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{ flex: 1 }}
          >
            <Box sx={{ position: 'relative', height: 400, overflow: 'hidden' }}>
              <Box
                component="img"
                src={collection.image}
                alt={collection.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 4,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white',
                }}
              >
                <Typography variant="h4" sx={{ fontFamily: "'Playfair Display', serif", mb: 1 }}>
                  {collection.title}
                </Typography>
                <Typography variant="body2">
                  {collection.description}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="outlined"
          href="/#/collections"
          sx={{
            borderColor: 'primary.main',
            color: 'primary.main',
            px: 6,
            '&:hover': {
              borderColor: 'primary.dark',
              backgroundColor: 'rgba(0,0,0,0.02)',
            },
          }}
        >
          View All Collections
        </Button>
      </Box>
    </Container>
  );
};

export default Collections;