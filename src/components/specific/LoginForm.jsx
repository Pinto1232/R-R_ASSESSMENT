import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const PageWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const FormWrapper = styled(Box)(({ theme }) => ({
  width: "400px",
  padding: theme.spacing(3),
  boxShadow: "0px 10px 50px rgba(34, 60, 80, 0.2)",
  borderRadius: "20px",
}));

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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
      console.log("Login successful");
      // Add your login logic here
    }
  };

  return (
    <PageWrapper>
      <FormWrapper component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={
              emailError ? "Please enter a valid email address." : ""
            }
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            helperText={
              passwordError
                ? "Please enter a valid password (Minimum 8 characters length, at least 1 Capital letter, at least 1 number, at least 1 special character)."
                : ""
            }
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
        </Stack>
      </FormWrapper>
    </PageWrapper>
  );
};

export default LoginForm;
