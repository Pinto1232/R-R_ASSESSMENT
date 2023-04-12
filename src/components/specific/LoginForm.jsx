import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../../assets/images/banner.jpg';



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

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  // Use the useEffect hook to redirect to "/unauthorized" if the user tries to access another page while in the / root
  

  

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
            required
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