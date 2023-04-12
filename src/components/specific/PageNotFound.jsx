import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import backgroundImage from '../../assets/images/page-not-found.jpg';

const PageWrapper = styled("div")(({ theme }) => ({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const PageNotFound = ({ title, label }) => {
  return (
    <PageWrapper>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="h1" style={{color: "#fff"}} component="h2" sx={{ fontSize: { xs: "48px", sm: "80px" }, mb: 4 }}>
            Page Not Found
          </Typography>
          <Typography variant="body1" style={{color: "#fff"}} sx={{ fontSize: { xs: "16px", sm: "24px" }, mb: 4 }}>
            Sorry, the page you are looking for does not exist.
          </Typography>
          <Button variant="contained" color="primary" href="/">
            Back to Home
          </Button>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default PageNotFound;
