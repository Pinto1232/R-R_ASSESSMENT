

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../../assets/images/banner.jpg';
import { useDispatch } from "react-redux";
import useUserValidationForm from "../../hooks/useUserValidationForm";
import logoImage from "../../assets/images/logo2.png";





const PageWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const FormWrapper = styled(Box)(({ theme }) => ({
  width: "400px",
  padding: theme.spacing(4),
  boxShadow: "0px 10px 50px rgba(34, 60, 80, 0.2)",
  borderRadius: "10px",
  backgroundColor: "#fff"
}));

const LogoWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "32px",
});

const LogoImage = styled("img")({
  width: "100px",
  height: "98px",
  borderRadius: "55px",
  backgroundSize: "cover",
  backgroundPosition: "center"
});

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    email,
    password,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
    setEmailError,
    setPasswordError
  } = useUserValidationForm();



  // Function that setup the hardcode email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);

    // Email validation
    if (!email || !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      setEmailError(true);
    }

    // Password validation
    if (
      !password ||
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(
        password
      )
    ) {
      setPasswordError(true);
    }

    // If both fields are valid, proceed with login
    if (!emailError && !passwordError) {
      setIsLoading(true);
      setTimeout(() => {
        if (email === "darryn@randrtechsa.com" && password === "P@55w0rd@1") {
          console.log("Login successful");
          dispatch({
            type: "LOGIN",
            payload: {
              email: email,
              password: password,
            },
          });
          navigate("/home");
        } else {
          setIsLoading(false);
          alert("Username or Password Invalid, please try again!");
        }
      }, 2000);
    }
  };


  return (
      <PageWrapper>
        <FormWrapper component="form" onSubmit={handleSubmit}>
        <LogoWrapper>
        <LogoImage src={logoImage} alt="Logo" />
      </LogoWrapper>
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              required
              helperText={
                emailError ? "Please enter a valid email address." : ""
              }
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              required
              error={passwordError}
              helperText={
                passwordError
                  ? "Please enter a valid password (Minimum 8 characters length, at least 1 Capital letter, at least 1 number, at least 1 special character)."
                  : ""
              }
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={24} /> : "Login"}
            </Button>
          </Stack>
        </FormWrapper>
      </PageWrapper>
  );
};

export default LoginForm;