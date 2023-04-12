import React from 'react'
import Jumbotron from '../components/specific/Jumbotron'
import image from '../assets/images/banner.jpg'

const Account = () => {
  return (
    <div>
      <Jumbotron
        title="Always You Can Check Your Account For More To Come!"
        subtitle="Revolutionizing remote communication with R&R Tech project"
        buttonText="Learn More"
        buttonLink="/about"
        image={image}
      />
    </div>
  )
}

export default Account
