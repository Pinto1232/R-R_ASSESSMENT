import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const JumbotronContainer = styled(Box)(({ theme, image }) => ({
  background: `url(${image}) no-repeat center center`,
  backgroundSize: 'cover',
  height: '300px',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    height: '400px',
  },
}));

const Overlay = styled(Box)({
  backgroundColor: 'rgba(0,0,0,0.5)',
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});




const Jumbotron = ({ title, subtitle, buttonText, buttonLink, image }) => {
  return (
    <JumbotronContainer image={image}>
      <Overlay>
        <Typography
          variant="h3"
          color="white"
          gutterBottom
          sx={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            '@media (max-width: 600px)': {
              fontSize: '2rem',
              maxWidth: '80%',
            },
          }}
          textAlign="center"
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="white"
          gutterBottom
          sx={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            '@media (max-width: 600px)': {
              fontSize: "20px",
              maxWidth: '80%',
            },
          }}
          textAlign="center"
        >
          {subtitle}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "black", width: "230px", padding: "10px" }}
          href={buttonLink}
        >
          {buttonText}
        </Button>
      </Overlay>
    </JumbotronContainer>
  );
};

export default Jumbotron;
