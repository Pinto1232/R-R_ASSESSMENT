import React from 'react'
import Jumbotron from '../components/specific/Jumbotron'
import image from '../assets/images/banner.jpg';

const Home = () => {
  return (
    <div>
      <Jumbotron
        title="Welcome to my website"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        buttonText="Learn More"
        buttonLink="/about"
        image={image}
      />
    </div>
  )
}

export default Home
