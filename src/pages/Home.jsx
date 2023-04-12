import React, { useEffect } from "react";
import Jumbotron from '../components/specific/Jumbotron';
import image from '../assets/images/banner.jpg';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user || {});


  console.log("Home User", user);

  // Check if user is authenticated and redirect to /unauthorized if not
  useEffect(() => {
    if (!user || !user.email || !user.password) {
      navigate("/unauthorized");
    }
  }, [navigate, user]);
  

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

export default Home;
