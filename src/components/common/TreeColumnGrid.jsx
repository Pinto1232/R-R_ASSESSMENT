import React from 'react';
import { Grid, Paper, useMediaQuery, ThemeProvider, createTheme } from '@mui/material';
import CardGrid from './CardGrid';
import imageCard from '../../assets/images/logo.png'
import SubScripData from '../../Data/FooterData'

const theme = createTheme();

console.log("Not loading", imageCard);
const TreeColumnsGrid = ({ children }) => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    console.log("Subscrion Data", SubScripData);


    return (
        <ThemeProvider theme={theme} >
            <Grid container justifyContent="center" spacing={0} sx={{ padding: isSmallScreen ? '0 10px' : '0 50px', paddingTop: '40px' }}>
                <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Paper sx={{ height: '100%', boxShadow: 'none', width: '100%' }}>
                        <CardGrid
                            image={imageCard}
                            title="Subscribe now"
                            description="Subscribe now and get access to our exclusive content!"
                            buttonText="Subscribe"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Paper sx={{ height: '100%', boxShadow: 'none' }}>
                        <CardGrid
                            image={imageCard}
                            title="Subscribe now"
                            description="Subscribe now and get access to our exclusive content!"
                            buttonText="Subscribe"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Paper sx={{ height: '100%', boxShadow: 'none' }}>
                        <CardGrid
                            image={imageCard}
                            title="Subscribe now"
                            description="Subscribe now and get access to our exclusive content!"
                            buttonText="Subscribe"
                        />
                    </Paper>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default TreeColumnsGrid;
