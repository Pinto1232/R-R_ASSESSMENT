

import React, { useState } from "react";
/* import { styled } from "@mui/material/styles"; */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import GlobalStyles from '../../assets/styles/GlobalStyle';
import logoImage from '../../assets/images/logo2.png';
import useUserValidationData from '../../hooks/useUserValidationForm'


// Import the Styles
const {
  PageWrapper,
  FormWrapper,
  LogoWrapper,
  LogoImage,
} = GlobalStyles();

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //
  const {
    email,
    emailError,
    handleEmailChange,
    handlePasswordChange,
    password,
    passwordError,
    setEmailError,
    setPasswordError

  } = useUserValidationData();


  // HandleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!password || !passwordRegex.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
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
        <Stack spacing={2}>
          <LogoWrapper>
            <LogoImage src={logoImage} alt="Logo" />
          </LogoWrapper>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="standard"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={
              emailError ? "Please enter a valid email address." : ""
            }
            required
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            required
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