import React, { useEffect } from 'react'
import Jumbotron from '../components/specific/Jumbotron'
import image from '../assets/images/banner.jpg'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Account = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user || {});

  console.log("Account User", user);


  // Check if user is authenticated and redirect to /unauthorized if not
  useEffect(() => {
    if (!user || !user.email || !user.password) {
      navigate("/unauthorized");
    }
  }, [navigate, user]);


  return (
    <div>
      <Jumbotron
        title="Welcome Always Check Your Account for more!"
        subtitle="Revolutionizing remote communication with R&R Tech project"
        buttonText="Learn More"
        buttonLink="/about"
        image={image}
      />
    </div>
  )
}

export default Account
