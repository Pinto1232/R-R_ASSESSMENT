import React from 'react'
import Jumbotron from '../components/specific/Jumbotron'
import image from '../assets/images/banner.jpg';


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
    </div>
  )
}

export default Home
