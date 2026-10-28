// client/src/pages/HomePage.jsx
import React from 'react';
import { Box, Button, Typography, Container, Card, CardMedia, CardContent, List, ListItem, Grid, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';
import Leaderboard from '../components/Leaderboard';

// Section wrapper for animations
const Section = ({ children, sx = {}, id }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <Box id={id} sx={sx}>{children}</Box>
    </Motion.div>
  );
};

// Animated stats component
const StatCounter = ({ value, suffix, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <Box
      ref={ref}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h3" component="div" color="primary" fontWeight="700" sx={{ lineHeight: 1 }}>
        {inView && <CountUp end={value} duration={2.2} />}
        {suffix}
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
        {label}
      </Typography>
    </Box>
  );
};

const HomePage = () => {
  const steps = [
    {
      title: 'Hotels List Surplus',
      text: 'Hotels and restaurants upload their available surplus food in under a minute.',
      image: '/assets/section2o1.jpg.webp',
    },
    {
      title: 'NGOs Claim Food',
      text: 'Verified NGOs instantly receive alerts and claim what they need.',
      image: '/assets/section2o2.jpg',
    },
    {
      title: 'Volunteers Deliver',
      text: 'Volunteer drivers swiftly pick up and deliver the meals to communities.',
      image: '/assets/section2o3.jpeg',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Section sx={{ py: { xs: 7, md: 10 }, overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 0.9fr' },
              alignItems: 'center',
              gap: { xs: 5, md: 8 },
            }}
          >
             <Box sx={{ maxWidth: 590 }}>
            {/*  <Typography
                component="p"
                variant="overline"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  mb: 2,
                  px: 1.5,
                  py: 0.6,
                  borderRadius: 10,
                  color: 'primary.main',
                  bgcolor: 'rgba(46, 125, 50, 0.08)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                }}
              >
                GOOD FOOD, GIVEN ANOTHER PURPOSE
              </Typography> */}
              <Typography
                variant="h2"
                component="h1"
                fontWeight={700}
                sx={{
                  mb: 2.5,
                  fontSize: { xs: '2.7rem', sm: '3.5rem', md: '4.25rem' },
                  lineHeight: 1.08,
                  letterSpacing: '-0.045em',
                }}
              >
                Share more.
                <Box component="span" sx={{ display: 'block', color: 'primary.main' }}>
                  Waste less.
                </Box>
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 3.5, maxWidth: 520, fontWeight: 400, lineHeight: 1.65 }}
              >
                Good food should reach people, not a landfill. avanzi brings kitchens, community groups, and local
                volunteers together to make that happen.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to="/register"
                  sx={{ px: 3, py: 1.25 }}
                >
                  Get Started
                </Button>
                <Button
                  variant="text"
                  color="inherit"
                  href="#how-it-works"
                  sx={{ px: 2, py: 1.25, color: 'text.secondary' }}
                >
                  See how it works
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: { xs: 1.5, sm: 3 },
                  mt: 4,
                  pt: 2.5,
                  borderTop: '1px solid',
                  borderColor: 'rgba(46, 125, 50, 0.16)',
                }}
              >
                {['Local kitchens', 'Community groups', 'Volunteer drivers'].map((role) => (
                  <Typography
                    key={role}
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600 }}
                  >
                    <Box component="span" sx={{ color: 'primary.main', fontSize: '1.1rem', lineHeight: 1 }}>
                      ●
                    </Box>
                    {role}
                  </Typography>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                position: 'relative',
                mx: { xs: 1, md: 0 },
                mb: { xs: 2, md: 0 },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: { xs: '8% -4% -5% 12%', md: '7% -7% -6% 14%' },
                  borderRadius: '48% 48% 16px 16px',
                  bgcolor: 'rgba(46, 125, 50, 0.1)',
                  transform: 'rotate(3deg)',
                },
              }}
            >
              <Box
                component="img"
                src="/assets/veg_food.jpg"
                alt="A freshly prepared meal ready to be shared"
                sx={{
                  position: 'relative',
                  display: 'block',
                  width: '100%',
                  height: { xs: 300, sm: 390, md: 450 },
                  objectFit: 'cover',
                  borderRadius: '48% 48% 18px 18px',
                  boxShadow: '0 22px 55px rgba(37, 65, 38, 0.18)',
                }}
              />
              <Paper
                elevation={3}
                sx={{
                  position: 'absolute',
                  left: { xs: -8, sm: -24 },
                  bottom: 20,
                  maxWidth: 250,
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  border: '1px solid rgba(46, 125, 50, 0.12)',
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    flexShrink: 0,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: '50%',
                    bgcolor: 'rgba(46, 125, 50, 0.1)',
                    color: 'primary.main',
                    fontSize: '1.3rem',
                  }}
                  aria-hidden="true"
                >
                  ♻
                </Box>
                <Box>
                  <Typography variant="subtitle2" fontWeight={700}>
                    A little less waste
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A lot more shared.
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Section>

      {/* Why This Is Needed */}
      <Section
        sx={{
          py: { xs: 10, md: 14 },
          position: 'relative',
          textAlign: 'center',
          color: 'white',
          backgroundImage: `url('/assets/section1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            bgcolor: 'rgba(0,0,0,0.65)',
            zIndex: 1,
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h3" fontWeight="700" gutterBottom>
            Millions of meals are wasted while millions go hungry.
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', mt: 3, fontSize: '1.2rem' }}>
            avanzi bridges this painful gap by redirecting surplus food to hungry hands. Donations become effortless,
            tracking is transparent, and impact is immediate — ensuring meals feed people, not landfills.
          </Typography>
        </Container>
      </Section>
      {/* --- ADD THIS NEW LEADERBOARD SECTION --- */}
        <Section sx={{ py: { xs: 7, md: 10 } }}>
            <Container maxWidth="md">
                <Typography variant="overline" color="primary" fontWeight={700} align="center" display="block">
                  COMMUNITY IN ACTION
                </Typography>
                <Typography variant="h4" fontWeight="700" align="center" sx={{ mb: 1 }}>
                  The people making it possible
                </Typography>
                <Typography color="text.secondary" align="center" sx={{ mb: 4 }}>
                  Every contribution helps good food find its way to someone who needs it.
                </Typography>
                <Leaderboard />
            </Container>
        </Section>

      {/* How It Works */}
      <Section id="how-it-works" sx={{ py: { xs: 7, md: 10 }, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="overline" color="primary" fontWeight={700} letterSpacing="0.1em">
            FROM KITCHEN TO COMMUNITY
          </Typography>
          <Typography variant="h4" fontWeight="700" gutterBottom>
            A simple chain of care
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 590, mx: 'auto' }}>
            Three familiar steps turn extra meals into something meaningful.
          </Typography>
          <Grid container spacing={4} sx={{ mt: 3 }} justifyContent="center">
            {steps.map((step, index) => (
              <Grid item key={step.title} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  elevation={2}
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '1px solid rgba(46, 125, 50, 0.1)',
                    transition: 'transform 180ms ease, box-shadow 180ms ease',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
                  }}
                >
                  <CardMedia component="img" image={step.image} alt={step.title} sx={{ height: 220, objectFit: 'cover' }} />
                  <CardContent sx={{ textAlign: 'left', px: 3, py: 2.5 }}>
                    <Typography
                      variant="overline"
                      color="primary"
                      fontWeight={700}
                      letterSpacing="0.08em"
                    >
                      STEP {String(index + 1).padStart(2, '0')}
                    </Typography>
                    <Typography variant="h6" fontWeight="700" gutterBottom>
                      {step.title}
                    </Typography>
                    <Typography color="text.secondary">{step.text}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Impact Section */}
      <Section sx={{ py: { xs: 7, md: 10 }, bgcolor: 'background.paper', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" color="primary" fontWeight={700} letterSpacing="0.1em">
            SMALL ACTIONS ADD UP
          </Typography>
          <Typography variant="h4" fontWeight="700" gutterBottom>
            A better use for good food
          </Typography>
          <Grid container spacing={4} sx={{ mt: 3 }} justifyContent="center">
            <Grid item xs={12} sm={4}><StatCounter value={125000} suffix="+" label="Meals Saved" /></Grid>
            <Grid item xs={12} sm={4}><StatCounter value={300} suffix="+" label="NGOs Connected" /></Grid>
            <Grid item xs={12} sm={4}><StatCounter value={500} suffix="+" label="Volunteers Engaged" /></Grid>
          </Grid>
        </Container>
      </Section>

{/* Tech Stack Section */}
<Element name="tech-stack">
  <Section id="techstack" sx={{ py: 12, bgcolor: '#f9fafb' }}>
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        fontWeight="700"
        align="center"
        gutterBottom
      >
        Our Tech Stack
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ mb: 6, maxWidth: 700, mx: 'auto', color: 'text.secondary' }}
      >
        Powering avanzi with a modern, scalable, and efficient technology stack to ensure seamless performance and reliability.
      </Typography>

      {/* Centered Grid */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch" // ensures both cards stretch equally
      >
        {/* Frontend Card */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              p: 4,
              borderRadius: '20px',
              boxShadow: 4,
              textAlign: 'left',
              height: '100%', // equal height
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h5" fontWeight="700" gutterBottom align="center">
              Frontend
            </Typography>
            <List sx={{ flexGrow: 1 }}>
              <ListItem><strong>Core Framework:</strong> React.js</ListItem>
              <ListItem><strong>UI Component Library:</strong> Material-UI (MUI)</ListItem>
              <ListItem><strong>Routing:</strong> React Router DOM</ListItem>
              <ListItem><strong>API Communication:</strong> Axios</ListItem>
              <ListItem><strong>Animation:</strong> Framer Motion & React-tsparticles</ListItem>
              <ListItem><strong>Mapping:</strong> Leaflet & React-Leaflet</ListItem>
              <ListItem><strong>Scrolling:</strong> React Scroll</ListItem>
              <ListItem><strong>Build Tool:</strong> Vite</ListItem>
            </List>
          </Card>
        </Grid>

        {/* Backend Card */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              p: 4,
              borderRadius: '20px',
              boxShadow: 4,
              textAlign: 'left',
              height: '100%', // equal height
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h5" fontWeight="700" gutterBottom align="center">
              Backend
            </Typography>
            <List sx={{ flexGrow: 1 }}>
              <ListItem><strong>Runtime Environment:</strong> Node.js</ListItem>
              <ListItem><strong>Web Framework:</strong> Express.js</ListItem>
              <ListItem><strong>Database:</strong> MongoDB (Mongoose ODM)</ListItem>
              <ListItem><strong>Authentication:</strong> JWT & bcrypt.js</ListItem>
              <ListItem><strong>Geolocation:</strong> Node Geocoder</ListItem>
              <ListItem><strong>Development Utility:</strong> Nodemon</ListItem>
              <ListItem><strong>Environment Variables:</strong> Dotenv</ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Section>
</Element>


      {/* About Us */}
      <Section sx={{ py: 10, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="700" gutterBottom>
                Who We Are
              </Typography>
              <Typography variant="body1" color="text.secondary">
                avanzi was born from a simple belief — food should feed people, not landfills. We’re a small team with a
                big mission: stop edible food from being wasted and connect it to communities in need.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/assets/section3.png"
                alt="Our mission"
                sx={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 3, boxShadow: 3 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
};

export default HomePage;
