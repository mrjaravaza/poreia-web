import React from 'react';
import { Box, Typography, Container, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const StorySection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 12, backgroundColor: 'rgba(193, 154, 107, 0.05)' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  mb: 4,
                  position: 'relative',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    width: '40px',
                    height: '2px',
                    backgroundColor: theme.palette.secondary.main,
                    left: 0,
                    top: -20,
                  },
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
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    px: 6,
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Read Our Story
                </Button>
              </motion.div>
            </motion.div>
          </Box>
          
          <Box sx={{ flex: 1, position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
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
              
              <Box
                component={motion.div}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                sx={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 100,
                  height: 100,
                  border: `2px dashed ${theme.palette.secondary.main}`,
                  borderRadius: '50%',
                  opacity: 0.3,
                }}
              />
            </motion.div>
          </Box>
        </Box>
        
        {/* Stats */}
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 8, flexWrap: 'wrap', gap: 4 }}>
          {[
            { value: '250+', label: 'Families Supported' },
            { value: '5,000+', label: 'Beads per Bag' },
            { value: '48hrs', label: 'Craftsmanship Time' },
            { value: '100%', label: 'Ethically Sourced' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ color: theme.palette.secondary.main, mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {stat.label}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StorySection;