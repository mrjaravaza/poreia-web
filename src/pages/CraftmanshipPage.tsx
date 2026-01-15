import React from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const CraftsmanshipPage: React.FC = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Material Sourcing',
      description: 'We journey across Africa to source the finest materials—from ethically harvested leather to handcrafted beads from Zimbabwean villages.',
      image: '/images/material.webp',
      details: [
        'Sustainable leather from East Africa',
        'Authentic beads from Zimbabwean cooperatives',
        'Natural dyes from indigenous plants',
        'Brass fittings from Ghanaian artisans',
      ],
    },
    {
      step: 2,
      title: 'Design & Pattern Making',
      description: 'Our designers blend traditional African motifs with contemporary luxury silhouettes, creating patterns that tell cultural stories.',
      image: '/images/design.webp',
      details: [
        'Cultural motif research',
        'Modern silhouette development',
        'Pattern precision cutting',
        'Prototype development',
      ],
    },
    {
      step: 3,
      title: 'Artisan Handwork',
      description: 'Skilled Zimbabwean mothers, using techniques passed through generations, meticulously hand-bead each piece with stories of hope.',
      image: '/images/artisan.webp',
      details: [
        '40+ hours per handbag',
        'Traditional beading techniques',
        'Quality inspection at each stage',
        'Personal artisan signature',
      ],
    },
    {
      step: 4,
      title: 'Assembly & Finishing',
      description: 'Master craftsmen assemble each piece, ensuring structural integrity while maintaining the delicate beauty of handcrafted elements.',
      image: '/images/assembly.webp',
      details: [
        'Leather stitching by master craftsmen',
        'Hardware attachment',
        'Lining installation',
        'Final quality assurance',
      ],
    },
  ];

  const materials = [
    {
      name: 'African Beads',
      description: 'Handmade by Zimbabwean mothers using traditional techniques',
      properties: ['Colorfast', 'Durable', 'Unique variations'],
      icon: '🔴',
    },
    {
      name: 'Ethical Leather',
      description: 'Sustainably sourced from East African tanneries',
      properties: ['Full-grain', 'Vegetable-tanned', 'Ages beautifully'],
      icon: '🐂',
    },
    {
      name: 'Natural Dyes',
      description: 'Extracted from indigenous plants and minerals',
      properties: ['Eco-friendly', 'Rich colors', 'Cultural significance'],
      icon: '🌿',
    },
    {
      name: 'Brass Hardware',
      description: 'Hand-forged by Ghanaian metal artisans',
      properties: ['Anti-tarnish coating', 'Hand-polished', 'Custom designs'],
      icon: '⭐',
    },
  ];

  return (
    <Box>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          height: '80vh',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
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
              Craftsmanship
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
              Where Art, Culture, Heritage, and Emotion converge into timeless luxury
            </Typography>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
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
                Explore Our Process
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Philosophy Section */}
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
                backgroundColor: '#C19A6B',
              },
            }}
          >
            The Poreia Philosophy
          </Typography>
          
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'secondary.main',
              mb: 4,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            "We don't manufacture products—we birth heirlooms. Each stitch is a prayer, each bead a story, each bag a legacy."
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            Poreia represents the synergy between ancestral wisdom and contemporary excellence. 
            Our craftsmanship is a dialogue between generations—where traditional techniques meet 
            modern luxury standards to create pieces that transcend time.
          </Typography>
        </Box>

        {/* Process Steps */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 6,
              textAlign: 'center',
            }}
          >
            The Making of Poreia
          </Typography>
          
          <Box>
            {processSteps.map((step, index) => (
              <Box
                key={step.step}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  gap: 6,
                  alignItems: 'center',
                  mb: 10,
                  position: 'relative',
                }}
              >
                {/* Step Number */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: -20, md: '50%' },
                    left: { xs: 20, md: index % 2 === 0 ? 'calc(50% - 30px)' : 'calc(50% - 30px)' },
                    transform: { md: 'translateY(-50%)' },
                    width: 60,
                    height: 60,
                    backgroundColor: 'secondary.main',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    zIndex: 1,
                  }}
                >
                  {step.step}
                </Box>
                
                {/* Image */}
                <Box sx={{ flex: 1, position: 'relative' }}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <Box
                      component="img"
                      src={step.image}
                      alt={step.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
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
                
                {/* Content */}
                <Box sx={{ flex: 1 }}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        mb: 3,
                        color: 'primary.main',
                        fontSize: { xs: '2rem', md: '2.5rem' },
                      }}
                    >
                      {step.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: 'text.secondary',
                        mb: 3,
                      }}
                    >
                      {step.description}
                    </Typography>
                    
                    <List>
                      {step.details.map((detail, idx) => (
                        <ListItem key={idx} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <FiberManualRecordIcon sx={{ fontSize: 10, color: 'secondary.main' }} />
                          </ListItemIcon>
                          <ListItemText primary={detail} />
                        </ListItem>
                      ))}
                    </List>
                  </motion.div>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Materials Showcase */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 6,
              textAlign: 'center',
            }}
          >
            Our Materials
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {materials.map((material) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{ flex: '1 1 250px', maxWidth: 300 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 4,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      borderColor: 'secondary.main',
                    },
                  }}
                >
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
                    <Typography
                      variant="h1"
                      sx={{
                        mb: 3,
                        fontSize: '3rem',
                      }}
                    >
                      {material.icon}
                    </Typography>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        mb: 2,
                      }}
                    >
                      {material.name}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        flexGrow: 1,
                      }}
                    >
                      {material.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {material.properties.map((prop) => (
                        <Box
                          key={prop}
                          component="span"
                          sx={{
                            backgroundColor: 'rgba(193, 154, 107, 0.1)',
                            color: 'secondary.main',
                            fontSize: '0.75rem',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: '12px',
                          }}
                        >
                          {prop}
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 6,
              textAlign: 'center',
            }}
          >
            Craftsmanship Details
          </Typography>
          
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {[
              {
                question: 'How long does it take to make one Poreia handbag?',
                answer: 'Each handbag requires 40-60 hours of meticulous handwork. Our artisans work in stages, ensuring each bead is perfectly placed and each stitch meets our rigorous standards.',
              },
              {
                question: 'Are your materials sustainable and ethical?',
                answer: 'Absolutely. We work directly with cooperatives to ensure fair wages, sustainable harvesting, and minimal environmental impact. Every material tells an ethical story.',
              },
              {
                question: 'How do you preserve traditional techniques?',
                answer: 'We work with master artisans who teach younger generations, creating a living archive of African craftsmanship. Each piece carries techniques that date back centuries.',
              },
              {
                question: 'What makes Poreia different from other luxury brands?',
                answer: 'We fuse ancestral African techniques with contemporary luxury aesthetics while maintaining complete transparency in our supply chain. Every bag comes with the story of its maker.',
              },
            ].map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  boxShadow: 'none',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

        {/* Final Call to Action */}
        <Box sx={{ textAlign: 'center', py: 8, backgroundColor: 'rgba(193, 154, 107, 0.05)', borderRadius: '8px' }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 3,
            }}
          >
            Own a Piece of Artistry
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
            When you choose Poreia, you're not just buying a bag—you're investing in centuries of craftsmanship, supporting artisan families, and carrying a masterpiece.
          </Typography>
          
          <Button
            variant="contained"
            startIcon={<LocalMallIcon />}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              px: 6,
              py: 1.5,
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Explore Collections
          </Button>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default CraftsmanshipPage;