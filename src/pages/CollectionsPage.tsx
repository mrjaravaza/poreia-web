import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  Drawer,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const CollectionsPage: React.FC = () => {
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const collections = [
    {
      id: 1,
      name: 'The Heritage Tote',
      description: 'Hand-beaded with authentic Zimbabwean beads, this tote tells a story of tradition meeting modern luxury.',
      price: '$1,850',
      originalPrice: '$2,200',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      category: 'totes',
      tags: ['Bestseller', 'Limited Edition'],
    },
    {
      id: 2,
      name: 'Ndebele Clutch',
      description: 'Inspired by traditional Ndebele patterns, a statement piece for evening elegance.',
      price: '$950',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      category: 'clutches',
      tags: ['New'],
    },
    {
      id: 3,
      name: 'Safari Bucket Bag',
      description: 'Crafted with sustainable African leather, perfect for the modern explorer.',
      price: '$1,250',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      category: 'bucket-bags',
      tags: ['Sustainable'],
    },
    {
      id: 4,
      name: 'Zambezi Crossbody',
      description: 'Lightweight and versatile, featuring intricate beadwork inspired by river patterns.',
      price: '$890',
      originalPrice: '$1,100',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      category: 'crossbody',
      tags: ['Sale', 'Popular'],
    },
    {
      id: 5,
      name: 'Baobab Satchel',
      description: 'Structured elegance with beadwork depicting the ancient baobab tree.',
      price: '$1,450',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      category: 'satchels',
      tags: [],
    },
    {
      id: 6,
      name: 'Kente Shoulder Bag',
      description: 'Vibrant colors and patterns inspired by traditional Ghanaian kente cloth.',
      price: '$1,150',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      category: 'shoulder-bags',
      tags: ['New'],
    },
    {
      id: 7,
      name: 'Savannah Evening Bag',
      description: 'A minimalist clutch with subtle bead accents for sophisticated evenings.',
      price: '$750',
      originalPrice: '$900',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      category: 'clutches',
      tags: ['Sale'],
    },
    {
      id: 8,
      name: 'Masai Weekender',
      description: 'Spacious travel companion with bold Masai-inspired beadwork.',
      price: '$1,650',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
      category: 'totes',
      tags: ['Travel'],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'totes', name: 'Totes' },
    { id: 'clutches', name: 'Clutches' },
    { id: 'bucket-bags', name: 'Bucket Bags' },
    { id: 'crossbody', name: 'Crossbody' },
    { id: 'satchels', name: 'Satchels' },
    { id: 'shoulder-bags', name: 'Shoulder Bags' },
    { id: 'limited', name: 'Limited Edition' },
  ];

  const filteredCollections = selectedCategory === 'all' 
    ? collections 
    : collections.filter(item => item.category === selectedCategory);

  return (
    <Box>
      <Navbar />
      
      {/* Hero Banner */}
      <Box
        sx={{
          height: '60vh',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1558769132-cb1ceed978bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
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
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 400,
                letterSpacing: '0.1em',
                mb: 2,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Collections
            </Typography>
            
            <Typography
              variant="h5"
              component={motion.h5}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              sx={{
                fontWeight: 300,
                letterSpacing: '0.2em',
                mb: 4,
                fontFamily: "'Cormorant Garamond', serif",
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Handcrafted luxury bags that carry African heritage and support artisan communities
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Collections Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Filters and Search */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', width: { xs: '100%', md: 'auto' } }}>
              <IconButton
                onClick={() => setFilterDrawerOpen(true)}
                sx={{ display: { md: 'none' } }}
              >
                <FilterListIcon />
              </IconButton>
              
              <TextField
                placeholder="Search collections..."
                size="small"
                sx={{ width: { xs: '100%', md: 300 } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', width: { xs: '100%', md: 'auto' } }}>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Sort by</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort by"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <MenuItem value="newest">Newest</MenuItem>
                  <MenuItem value="price-low">Price: Low to High</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                  <MenuItem value="popular">Most Popular</MenuItem>
                </Select>
              </FormControl>

              <Button
                variant="outlined"
                onClick={() => setFilterDrawerOpen(true)}
                startIcon={<FilterListIcon />}
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                Filters
              </Button>
            </Box>
          </Box>

          {/* Category Chips */}
          <Box sx={{ mt: 4, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <Chip
                key={category.id}
                label={category.name}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? 'filled' : 'outlined'}
                sx={{
                  borderColor: selectedCategory === category.id ? 'primary.main' : 'grey.300',
                  backgroundColor: selectedCategory === category.id ? 'primary.main' : 'transparent',
                  color: selectedCategory === category.id ? 'white' : 'text.primary',
                  '&:hover': {
                    backgroundColor: selectedCategory === category.id ? 'primary.dark' : 'grey.100',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Products Grid */}
<Box sx={{ 
  display: 'grid', // Using CSS Grid instead of MUI Grid
  gridTemplateColumns: {
    xs: '1fr',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
    lg: 'repeat(4, 1fr)',
  },
  gap: 4,
}}>
  {filteredCollections.map((product, index) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid',
          borderColor: 'grey.200',
          borderRadius: 0,
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            borderColor: 'primary.light',
          },
        }}
      >
        {/* Rest of the card content remains the same */}
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            sx={{ 
              width: '100%',
              height: 300,
              objectFit: 'cover' 
            }}
            image={product.image}
            alt={product.name}
          />
          
          {/* Tags */}
          {product.tags.length > 0 && (
            <Box sx={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {product.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: tag === 'Sale' ? 'error.main' : 'primary.main',
                    color: 'white',
                    fontSize: '0.7rem',
                    height: 24,
                  }}
                />
              ))}
            </Box>
          )}
          
          {/* Quick View Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            <Button
              variant="contained"
              startIcon={<LocalMallIcon />}
              sx={{
                backgroundColor: 'secondary.main',
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                },
              }}
            >
              Quick View
            </Button>
          </Box>
        </Box>
        
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 1,
              fontWeight: 500,
            }}
          >
            {product.name}
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mb: 2,
              fontSize: '0.875rem',
              lineHeight: 1.4,
            }}
          >
            {product.description}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
              }}
            >
              {product.price}
            </Typography>
            
            {product.originalPrice && (
              <Typography
                variant="body2"
                sx={{
                  color: 'text.disabled',
                  textDecoration: 'line-through',
                }}
              >
                {product.originalPrice}
              </Typography>
            )}
          </Box>
        </CardContent>
        
        <CardActions sx={{ p: 3, pt: 0 }}>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.dark',
                backgroundColor: 'rgba(0,0,0,0.02)',
              },
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  ))}
</Box>

        {/* Load More Button */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            variant="outlined"
            sx={{
              px: 6,
              py: 1.5,
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.dark',
                backgroundColor: 'rgba(0,0,0,0.02)',
              },
            }}
          >
            Load More
          </Button>
        </Box>
      </Container>

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
                  The Artisan Impact
                </Typography>
                
                <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Each Poreia bag represents 40 hours of meticulous craftsmanship by Zimbabwean mothers. 
                  Your purchase directly supports their families, providing education, healthcare, and sustainable livelihoods.
                </Typography>
                
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
                  We work with cooperatives in rural Zimbabwe, ensuring fair wages and preserving traditional 
                  beading techniques that date back centuries. Every bead tells a story of resilience and beauty.
                </Typography>
                
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
                  Learn Our Story
                </Button>
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

      {/* Filter Drawer */}
      <Drawer
        anchor="left"
        open={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
        PaperProps={{
          sx: { width: 300, p: 3 },
        }}
      >
        <Typography variant="h6" sx={{ mb: 3 }}>
          Filters
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={selectedCategory}
              label="Category"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <Button
            variant="contained"
            onClick={() => setFilterDrawerOpen(false)}
            sx={{ mt: 2 }}
          >
            Apply Filters
          </Button>
        </Box>
      </Drawer>

      <Footer />
    </Box>
  );
};

export default CollectionsPage;