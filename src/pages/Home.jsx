import React from 'react'
import Jumbotron from '../components/specific/Jumbotron'
import image from '../assets/images/banner.jpg';

const Home = () => {
  return (
    <div>
      <Jumbotron
        title="Revolutionizing the Future: A Cutting-Edge Solution for R&R Tech"
        subtitle="Revolutionize your social media presence with our new AI-powered platform"
        buttonText="Learn More"
        buttonLink="/about"
        image={image}
      />
    </div>
  )
}

export default Home
