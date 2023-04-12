import React from 'react'
import Jumbotron from '../components/specific/Jumbotron'
import image from '../assets/images/banner.jpg';
import TreeColumnsGrid from '../components/common/TreeColumnGrid';
import { Grid } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Jumbotron
        title="Revolutionizing the Future: A Cutting-Edge Solution for R&R Tech"
        subtitle="Revolutionizing remote communication with R&R Tech Systems"
        buttonText="Learn More"
        buttonLink="/about"
        image={image}
      />

      <TreeColumnsGrid>
        <Grid>Column 1 content</Grid>
        <Grid>Column 2 content</Grid>
        <Grid>Column 3 content</Grid>
      </TreeColumnsGrid>
    </div>
  )
}

export default Home
