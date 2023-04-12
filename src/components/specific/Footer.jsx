import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const showFooter = location.pathname === '/home' || location.pathname === '/account';

    if (!showFooter) {
        return null;
    }

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                backgroundColor: '#000',
                padding: '1px', color: "#fff",
                marginTop: "0.2px",
                paddingBottom: '20%'
            }}
            spacing={4}
        >
            <Grid
                alignItems="center"
                item xs={12} md={3}
                sx={{
                    textAlign: 'center'
                }}
            >
                <Typography variant="h6" gutterBottom>
                    About Us
                </Typography>
                <Link variant="body1" color="#fff" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                    Lorem ipsum dolor sit
                </Link>
            </Grid>
            <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                    Policy
                </Typography>
                <Link variant="body1" color="#fff" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                    Lorem ipsum dolor sit
                </Link>
            </Grid>
            <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                    Account
                </Typography>
                <Link variant="body1" color="#fff" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                    Lorem ipsum dolor sit
                </Link>
            </Grid>
            <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                    Login
                </Typography>
                <Link variant="body1" color="#fff" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                    Lorem ipsum dolor sit
                </Link>
            </Grid>
        </Grid>
    );
};

export default Footer;
