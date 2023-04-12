import React, { useEffect } from 'react'
import Jumbotron from '../components/specific/Jumbotron'
import image from '../assets/images/account_banner.jpg'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid, Paper, Typography } from '@mui/material';


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

      <Grid item xs={12} sm={6} md={4}
        sx={{
          display: 'flex',
          justifyContent: 'start',

        }}
      >
        <Paper elevation={5} sx={{
          width: '100%',
          padding: '10px',
          margin: '40px',
          textAlign: 'center'
        }}>
          <Typography variant="h5" 
          style={{ marginBottom: '10px' }}>
            Account Details:
          </Typography>
          <Grid container spacing={2}
            style={{
              display: "flex",
              flexDirection: 'column',
              alignItems: 'center'
            }}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                Email: {user.email}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">
                Password: {user.password}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

    </div>
  )
}

export default Account
