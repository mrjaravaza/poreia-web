import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Divider,
  Chip,
  useTheme,
  SelectChangeEvent,
} from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import StarIcon from '@mui/icons-material/Star';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupsIcon from '@mui/icons-material/Groups';
import BadgeIcon from '@mui/icons-material/Badge';

const AffiliatePage: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    socialHandle: '',
    platform: '',
    interest: '',
    message: '',
  });

  const benefits = [
    {
      title: 'Generous Commissions',
      description: 'Earn up to 20% commission on every sale made through your unique referral code.',
      icon: <AttachMoneyIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
    },
    {
      title: 'Exclusive Access',
      description: 'Be the first to see new collections, attend exclusive events, and receive special training.',
      icon: <StarIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
    },
    {
      title: 'Brand Partnership',
      description: 'Official Poreia affiliate status with marketing materials and co-branded content opportunities.',
      icon: <BadgeIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
    },
    {
      title: 'Community Network',
      description: 'Join our network of influencers, models, and boutique owners across the globe.',
      icon: <GroupsIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
    },
  ];

  const platformOptions = ['Instagram', 'YouTube', 'TikTok', 'Facebook', 'Twitter', 'Blog', 'Boutique', 'Other'];
  const interestOptions = ['Influencer', 'Model', 'Boutique Owner', 'Content Creator', 'Stylist', 'Journalist'];

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      socialHandle: '',
      platform: '',
      interest: '',
      message: '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the data
    console.log('Affiliate Application:', formData);
    // Show success message
    alert('Thank you for your application! Our team will contact you within 48 hours.');
    handleClose();
  };

  // Handler for TextField changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler for Select changes (separate because Select has different event type)
  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name as string]: value,
    }));
  };

  return (
    <Box>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          height: '80vh',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1551836026-d5c2c727331f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
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
              Become a Poreia Affiliate
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
              Join our movement. Represent African luxury. Earn while you inspire.
            </Typography>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'white',
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                  },
                }}
                onClick={handleOpen}
              >
                Apply Now
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Why Join Section */}
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
            Why Join Our Affiliate Program
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
              mb: 6,
            }}
          >
            We're building more than an affiliate network—we're cultivating ambassadors for African luxury. 
            As a Poreia Affiliate, you become part of a movement that celebrates craftsmanship, empowers communities, and redefines global fashion standards.
          </Typography>
        </Box>

        {/* Benefits Grid - Replaced Grid with Box */}
        <Box sx={{ mb: 12 }}>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4,
            justifyContent: 'center'
          }}>
            {benefits.map((benefit, index) => (
              <Box 
                key={index}
                sx={{
                  width: {
                    xs: '100%',
                    sm: 'calc(50% - 16px)',
                    md: 'calc(25% - 24px)',
                  },
                  minWidth: 250,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ height: '100%' }}
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
                    <Box sx={{ mb: 3 }}>
                      {benefit.icon}
                    </Box>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        mb: 2,
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Commission Structure */}
        <Box sx={{ mb: 12, backgroundColor: 'rgba(193, 154, 107, 0.05)', p: 6, borderRadius: '4px' }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 6,
              textAlign: 'center',
            }}
          >
            Commission Structure
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: 4 
          }}>
            {[
              { tier: 'Starter', commission: '15%', requirement: '1-10 sales/month', color: '#C19A6B' },
              { tier: 'Influencer', commission: '18%', requirement: '11-50 sales/month', color: '#8B6914' },
              { tier: 'Ambassador', commission: '20%', requirement: '50+ sales/month', color: '#000000' },
            ].map((tier, index) => (
              <Box
                key={tier.tier}
                sx={{
                  width: {
                    xs: '100%',
                    sm: 'calc(50% - 16px)',
                    md: 'calc(33.333% - 32px)',
                  },
                  minWidth: 250,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  style={{ height: '100%' }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      borderTop: `4px solid ${tier.color}`,
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        mb: 2,
                        color: tier.color,
                      }}
                    >
                      {tier.tier}
                    </Typography>
                    
                    <Typography
                      variant="h1"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        mb: 2,
                        color: tier.color,
                      }}
                    >
                      {tier.commission}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                      }}
                    >
                      Commission Rate
                    </Typography>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        mb: 1,
                      }}
                    >
                      Requirement:
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary">
                      {tier.requirement}
                    </Typography>
                    
                    <Box sx={{ mt: 3 }}>
                      <Chip
                        label="Monthly Bonus Available"
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(193, 154, 107, 0.1)',
                          color: 'secondary.main',
                        }}
                      />
                    </Box>
                  </Paper>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Who We're Looking For */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 6,
              textAlign: 'center',
            }}
          >
            Who We're Looking For
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4, 
            justifyContent: 'center' 
          }}>
            {[
              {
                title: 'Influencers & Creators',
                description: 'Content creators with engaged audiences interested in luxury, fashion, and African culture.',
                icon: <InstagramIcon sx={{ fontSize: 30, color: theme.palette.secondary.main }} />,
              },
              {
                title: 'Models & Stylists',
                description: 'Fashion professionals who embody the Poreia aesthetic and can showcase our pieces authentically.',
                icon: <BadgeIcon sx={{ fontSize: 30, color: theme.palette.secondary.main }} />,
              },
              {
                title: 'Boutique Owners',
                description: 'Retail partners who want to carry Poreia collections in their physical or online stores.',
                icon: <AttachMoneyIcon sx={{ fontSize: 30, color: theme.palette.secondary.main }} />,
              },
              {
                title: 'Cultural Ambassadors',
                description: 'Individuals passionate about promoting African heritage and craftsmanship globally.',
                icon: <GroupsIcon sx={{ fontSize: 30, color: theme.palette.secondary.main }} />,
              },
            ].map((role, index) => (
              <Box
                key={role.title}
                sx={{
                  width: {
                    xs: '100%',
                    sm: 'calc(50% - 16px)',
                    md: 'calc(25% - 24px)',
                  },
                  minWidth: 250,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <Card
                    sx={{
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'grey.200',
                      '&:hover': {
                        borderColor: 'secondary.main',
                      },
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      {role.icon}
                    </Box>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        mb: 2,
                      }}
                    >
                      {role.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {role.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Final CTA */}
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 3,
            }}
          >
            Ready to Join the Movement?
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
            Apply now to become an official Poreia Affiliate. Let's build the future of African luxury together.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              onClick={handleOpen}
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
              Apply Now
            </Button>
            
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
              Download Program Guide
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Application Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 3 }}>
          <Typography variant="h4" sx={{ fontFamily: "'Playfair Display', serif" }}>
            Affiliate Application
          </Typography>
          
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <Divider />
        
        <Box component="form" onSubmit={handleSubmit}>
          <DialogContent sx={{ p: 4 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              Please fill out this form to apply for the Poreia Affiliate Program. Our team will review your application and contact you within 48 hours.
            </Typography>
            
            {/* Form Fields - Replaced Grid with Box */}
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 3 
            }}>
              <Box sx={{ 
                width: {
                  xs: '100%',
                  md: 'calc(50% - 12px)',
                } 
              }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Box>
              
              <Box sx={{ 
                width: {
                  xs: '100%',
                  md: 'calc(50% - 12px)',
                } 
              }}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Box>
              
              <Box sx={{ 
                width: {
                  xs: '100%',
                  md: 'calc(50% - 12px)',
                } 
              }}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Box>
              
              <Box sx={{ 
                width: {
                  xs: '100%',
                  md: 'calc(50% - 12px)',
                } 
              }}>
                <TextField
                  fullWidth
                  label="Location (City, Country)"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </Box>
              
              <Box sx={{ 
                width: {
                  xs: '100%',
                  md: 'calc(50% - 12px)',
                } 
              }}>
                <FormControl fullWidth required>
                  <InputLabel>Primary Platform</InputLabel>
                  <Select
                    name="platform"
                    value={formData.platform}
                    label="Primary Platform"
                    onChange={handleSelectChange}
                  >
                    {platformOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              
              <Box sx={{ 
                width: {
                  xs: '100%',
                  md: 'calc(50% - 12px)',
                } 
              }}>
                <FormControl fullWidth required>
                  <InputLabel>Interest/Role</InputLabel>
                  <Select
                    name="interest"
                    value={formData.interest}
                    label="Interest/Role"
                    onChange={handleSelectChange}
                  >
                    {interestOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              
              <Box sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  label="Social Media Handle/Website"
                  name="socialHandle"
                  value={formData.socialHandle}
                  onChange={handleInputChange}
                  required
                />
              </Box>
              
              <Box sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  label="Why do you want to join the Poreia Affiliate Program?"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  multiline
                  rows={4}
                  required
                />
              </Box>
            </Box>
          </DialogContent>
          
          <DialogActions sx={{ p: 3, pt: 0 }}>
            <Button onClick={handleClose} sx={{ color: 'text.secondary' }}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: 'secondary.main',
                color: 'white',
                px: 4,
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                },
              }}
            >
              Submit Application
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      <Footer />
    </Box>
  );
};

export default AffiliatePage;