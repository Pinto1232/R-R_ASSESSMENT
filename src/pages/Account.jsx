import React, { useEffect } from 'react'
import Jumbotron from '../components/specific/Jumbotron'
import image from '../assets/images/banner.jpg'
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  
  // Check if user is authenticated and redirect to /unauthorized if not
  useEffect(() => {
    const authenticated = localStorage.getItem("authenticated");
    if (!authenticated) {
      navigate("/unauthorized");
    }
  }, [navigate]);


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
