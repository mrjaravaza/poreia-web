import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  Chip,
  TextField,
  IconButton,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SendIcon from '@mui/icons-material/Send';

const JournalPage: React.FC = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');

  const featuredArticle = {
    title: 'The African Renaissance: How Luxury is Redefining Cultural Narratives',
    excerpt: 'Poreia leads the movement where African luxury ceases to be an exception and becomes the expectation in global fashion capitals.',
    author: 'Dr. Amina Bello',
    date: 'February 2024',
    readTime: '12 min read',
    category: 'Cultural Commentary',
    image: '/images/journal-featured.webp',
  };

  const articles = [
    {
      id: 1,
      title: 'Beads That Speak: The Language of Zimbabwean Craftsmanship',
      excerpt: 'Decoding the hidden meanings behind traditional bead patterns and their modern interpretations in Poreia collections.',
      author: 'Sarah Chen',
      date: 'January 2024',
      category: 'Craftsmanship',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'From Milan to Harare: The Global Impact of African Luxury',
      excerpt: 'How Poreia is changing perceptions of African fashion in European luxury markets.',
      author: 'Marco Rossi',
      date: 'December 2023',
      category: 'Industry Insights',
      image: 'https://images.unsplash.com/photo-1558769132-cb1ceed978bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'The Artisan Diaries: A Day with Our Zimbabwean Mothers',
      excerpt: 'An intimate look at the daily lives and stories of the women who create Poreia masterpieces.',
      author: 'Lisa Johnson',
      date: 'November 2023',
      category: 'Behind the Scenes',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Sustainable Luxury: How Poreia is Redefining Fashion Ethics',
      excerpt: 'Exploring our commitment to environmental responsibility and ethical production practices.',
      author: 'David Green',
      date: 'October 2023',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1558769132-cb1ceed978bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'The Poreia Collector: Stories from Our Community',
      excerpt: 'Meet the individuals building collections and sharing their Poreia experiences across the globe.',
      author: 'Poreia Editorial',
      date: 'September 2023',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Color Theory: The Meaning Behind Our Palettes',
      excerpt: 'How traditional African color symbolism influences our seasonal collections.',
      author: 'Kwame Nkrumah',
      date: 'August 2023',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const categories = ['All', 'Craftsmanship', 'Industry Insights', 'Behind the Scenes', 'Sustainability', 'Community', 'Design', 'Cultural Commentary'];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the email
    console.log('Subscribed email:', email);
    setEmail('');
    // Show success message (could be enhanced with a snackbar)
    alert('Thank you for subscribing to The Poreia Mag!');
  };

  return (
    <Box>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          height: '70vh',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
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
              The Poreia Mag
            </Typography>
            
            <Typography
              variant="h4"
              component={motion.h4}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              sx={{
                fontSize: { xs: '1.5rem', md: '2.2rem' },
                fontWeight: 300,
                letterSpacing: '0.1em',
                mb: 4,
                fontFamily: "'Cormorant Garamond', serif",
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.4,
              }}
            >
              Where Fashion Meets Philosophy, and Every Purchase Becomes a Story
            </Typography>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
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
                Read Our Latest
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Featured Article */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 2,
              color: theme.palette.secondary.main,
              letterSpacing: '0.1em',
            }}
          >
            FEATURED STORY
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 6,
              alignItems: 'center',
              backgroundColor: 'rgba(193, 154, 107, 0.05)',
              p: 4,
              borderRadius: '4px',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Chip
                label={featuredArticle.category}
                size="small"
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'white',
                  mb: 3,
                }}
              />
              
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                }}
              >
                {featuredArticle.title}
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  mb: 4,
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                {featuredArticle.excerpt}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {featuredArticle.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {featuredArticle.date} • {featuredArticle.readTime}
                  </Typography>
                </Box>
                
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Read Article
                </Button>
              </Box>
            </Box>
            
            <Box sx={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Box
                  component="img"
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
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
        </Box>

        {/* Journal Introduction */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 4,
            }}
          >
            More Than a Magazine
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
              mb: 4,
            }}
          >
            The Poreia Mag is our manifesto—a platform where fashion transcends aesthetics to become philosophy. 
            Here, we explore the intersection of African heritage, luxury craftsmanship, and cultural renaissance. 
            Each article is a chapter in our collective story, written not just by us, but by every customer, artisan, and visionary who believes in our movement.
          </Typography>
          
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'secondary.main',
              mb: 6,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            "We are not just selling fashion. We are building a cultural archive."
          </Typography>
        </Box>

        {/* Articles Grid */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Latest Stories
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <TextField
                placeholder="Search articles..."
                size="small"
                sx={{ width: 200 }}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />,
                }}
              />
              
              <Box sx={{ display: 'flex', gap: 1 }}>
                {categories.map((category) => (
                  <Chip
                    key={category}
                    label={category}
                    size="small"
                    sx={{
                      borderColor: 'grey.300',
                      backgroundColor: category === 'All' ? 'primary.main' : 'transparent',
                      color: category === 'All' ? 'white' : 'text.primary',
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {articles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                style={{ flex: '1 1 300px', maxWidth: 'calc(33.333% - 32px)' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      borderColor: 'primary.light',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      component="img"
                      src={article.image}
                      alt={article.title}
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                      }}
                    />
                    
                    <Chip
                      label={article.category}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        backgroundColor: 'secondary.main',
                        color: 'white',
                      }}
                    />
                    
                    <Box sx={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: 1 }}>
                      <IconButton size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
                        <BookmarkBorderIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        mb: 2,
                        lineHeight: 1.3,
                      }}
                    >
                      {article.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        flexGrow: 1,
                      }}
                    >
                      {article.excerpt}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {article.author}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {article.date}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton size="small">
                          <ShareIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small">
                          <FavoriteBorderIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Newsletter Subscription */}
        <Box
          sx={{
            backgroundColor: 'rgba(193, 154, 107, 0.05)',
            p: 6,
            borderRadius: '4px',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 2,
            }}
          >
            Join The Movement
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 4,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Subscribe to The Poreia Mag and receive our latest stories, exclusive interviews, and cultural insights directly in your inbox.
          </Typography>
          
          <Box component="form" onSubmit={handleSubscribe} sx={{ maxWidth: 500, mx: 'auto' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                fullWidth
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'grey.300' },
                    '&:hover fieldset': { borderColor: 'primary.main' },
                  },
                }}
              />
              
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  px: 4,
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
            
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              By subscribing, you agree to our Privacy Policy and consent to receive updates from The Poreia Mag.
            </Typography>
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
            Become a Contributor
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
            Are you a writer, photographer, or cultural commentator with a story to tell about African luxury, craftsmanship, or heritage? We want to hear from you.
          </Typography>
          
          <Button
            variant="outlined"
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              px: 6,
              py: 1.5,
              '&:hover': {
                borderColor: 'primary.dark',
                backgroundColor: 'rgba(0,0,0,0.02)',
              },
            }}
          >
            Submit Your Pitch
          </Button>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default JournalPage;