import React from 'react'
import Jumbotron from '../components/specific/Jumbotron'
import image from '../assets/images/banner.jpg'
import LoginForm from '../components/specific/LoginForm'

const Login = () => {
  return (
    <div>
      {/* <Jumbotron
        title="Login To Your Account"
        subtitle="Remote communication with R&R Tech System"
        buttonText="Learn More"
        buttonLink="/about"
        image={image}
  /> */}

      <LoginForm />
    </div>
  )
}

export default Login
