import React from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Paper,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StoryPage: React.FC = () => {
  const theme = useTheme();

  const storySections = [
    {
      title: 'The Awakening',
      content: `Poreia was born from a profound realization: Africa's untapped creative genius was waiting to be showcased on the world's most prestigious stages. We saw beyond the continent's rich materials and ancient techniques—we saw a sleeping giant of cultural expression ready to awaken.`,
      image: '/images/awakening.jpg',
      reverse: false,
    },
    {
      title: 'The Vision',
      content: `We envisioned more than a fashion brand. We imagined a movement—a bridge connecting African villages to global luxury markets. A platform where each piece becomes a canvas for storytelling, where every bead and pattern represents a mother's dream, a child's education, and a family's sustainable future.`,
      image: '/images/vision.jpg',
      reverse: true,
    },
    {
      title: 'The Manifesto',
      content: `Poreia is not merely about wearing luxury; it's about carrying conviction. It's a statement that African craftsmanship deserves the same reverence as European ateliers. That tradition can dance with innovation. That economic empowerment can be beautiful.`,
      image: '/images/manifesto.jpg',
      reverse: false,
    },
  ];

  const milestones = [
    { year: '2023', event: 'Vision conceived in Zimbabwe', detail: 'First sketches with local artisans' },
    { year: '2024', event: 'Prototype Development', detail: 'First 50 Poreia style bags crafted' },
    { year: '2025', event: 'Global Recognition', detail: 'First International Order (Idaho, USA)' },
    { year: '2026', event: 'Expansion', detail: 'Added other product lines and designs' }
  ];

  return (
    <Box>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          height: '80vh',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/storyhero1.jpg)',
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
              sx={{
                fontSize: { xs: '3rem', md: '5rem' },
                fontWeight: 400,
                letterSpacing: '0.1em',
                mb: 2,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Our Story
            </Typography>
            
            <Typography
              variant="h4"
              component={motion.h4}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              sx={{
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                fontWeight: 300,
                letterSpacing: '0.1em',
                mb: 4,
                fontFamily: "'Cormorant Garamond', serif",
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.4,
              }}
            >
              From African soil to global soul—a journey of heritage, hope, and haute couture
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Vision Statement */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 4,
              position: 'relative',
              display: 'inline-block',
              '&:after': {
                content: '""',
                position: 'absolute',
                width: '100px',
                height: '2px',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: theme.palette.secondary.main,
              },
            }}
          >
            The Poreia Vision
          </Typography>
          
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              color: theme.palette.secondary.main,
              mb: 4,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            "We don't just create fashion—we curate legacies. Each Poreia piece is a bridge between ancestral wisdom and contemporary luxury, between artisan hands and discerning hearts."
          </Typography>
        </Box>

        {/* Story Sections */}
        {storySections.map((section, index) => (
          <Box
            key={section.title}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: section.reverse ? 'row-reverse' : 'row' },
              gap: 6,
              alignItems: 'center',
              mb: 12,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    mb: 3,
                    color: theme.palette.primary.main,
                  }}
                >
                  {section.title}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.2rem',
                    lineHeight: 1.8,
                    color: 'text.secondary',
                    mb: 4,
                  }}
                >
                  {section.content}
                </Typography>
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
                  src={section.image}
                  alt={section.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1558769132-cb1ceed978bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
                  }}
                  sx={{
                    width: '100%',
                    height: 400,
                    objectFit: 'cover',
                    borderRadius: '4px',
                    boxShadow: '20px 20px 0px rgba(193, 154, 107, 0.2)',
                  }}
                />
              </motion.div>
            </Box>
          </Box>
        ))}

        {/* Mission Statement */}
        <Paper
          elevation={0}
          sx={{
            p: 6,
            backgroundColor: 'rgba(193, 154, 107, 0.05)',
            borderLeft: `4px solid ${theme.palette.secondary.main}`,
            mb: 8,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 3,
              color: theme.palette.primary.main,
            }}
          >
            Our Mission
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              mb: 2,
            }}
          >
            To create a global luxury brand that celebrates African heritage while providing sustainable livelihoods for artisan communities. We're building more than a fashion house—we're cultivating an ecosystem where every purchase creates ripples of positive change.
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: 'text.secondary',
            }}
          >
            When you wear Poreia, you're not just making a fashion statement. You're declaring that African creativity deserves center stage. You're investing in dreams. You're carrying a revolution.
          </Typography>
        </Paper>

        {/* Timeline */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 6,
              textAlign: 'center',
            }}
          >
            Our Journey
          </Typography>
          
          <Box sx={{ position: 'relative' }}>
            {/* Vertical line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '20px', md: '50%' },
                top: 0,
                bottom: 0,
                width: '2px',
                backgroundColor: theme.palette.secondary.main,
              }}
            />
            
            {milestones.map((milestone, index) => (
              <Box
                key={milestone.year}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  alignItems: 'center',
                  mb: 4,
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: { xs: '40px', md: '50%' },
                    textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' },
                    pr: { xs: 2, md: index % 2 === 0 ? 4 : 0 },
                    pl: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {milestone.year}
                  </Typography>
                </Box>
                
                {/* Circle on timeline */}
                <Box
                  sx={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.secondary.main,
                    border: `4px solid ${theme.palette.background.paper}`,
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
                
                <Box
                  sx={{
                    width: { xs: 'calc(100% - 60px)', md: '50%' },
                    pl: { xs: 2, md: index % 2 === 0 ? 4 : 0 },
                    pr: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      backgroundColor: 'white',
                      borderRadius: '4px',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        mb: 1,
                      }}
                    >
                      {milestone.event}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {milestone.detail}
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 3,
            }}
          >
            Be Part of Our Story
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              color: 'text.secondary',
              mb: 4,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Every Poreia piece you own is a chapter in our shared story. Join us in rewriting the narrative of African luxury.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              href="/#/collections"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                px: 6,
                py: 1.5,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Shop Collections
            </Button>
          </Box>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default StoryPage;