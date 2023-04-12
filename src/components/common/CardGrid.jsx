import React from 'react';
import { Grid, Card, CardMedia, CardContent, Button, Typography } from '@mui/material';

const CardGrid = ({ image, title, description, buttonText }) => {
  return (
    <Grid  item xs={12} sm={6} md={4} sx={{ margin: 0 }} >
      <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
        style={{
          minWidth: "400px",
          height: "400px",
          padding: "10px"
        }}
      >
        <CardMedia
          component="img"
          image={image}
          sx={{
            height: 0,
            paddingTop: '56.25%'
          }}
          style={{ width: "100%"}}
          alt='Images'
        />
        <CardContent
          sx={{ flexGrow: 1 }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>
        <Button
          variant="contained"
        >
          {buttonText}
        </Button>
      </Card>
    </Grid>
  );
};

export default CardGrid;
