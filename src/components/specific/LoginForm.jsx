import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useUserValidationForm from "../../hooks/useUserValidationForm";
import logoImage from "../../assets/images/logo2.png";
import GlobalStyles from "../../assets/styles/GlobalStyle"




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


  // Import the Styles
  const {
    PageWrapper,
    FormWrapper,
    LogoWrapper,
    LogoImage,
  } = GlobalStyles();



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