// client/src/components/Footer.jsx

import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                px: 2,
                mt: 'auto',
                backgroundColor: 'background.paper',
                borderTop: '1px solid rgba(0, 0, 0, 0.12)'
            }}
        >
            <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                    Aavanzi
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="p">
                    Share More, Waste Less.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {'Copyright © '}
                    <Link color="inherit" href="#">
                        Aavanzi
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;