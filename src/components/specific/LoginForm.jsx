import { useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const PageWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const FormWrapper = styled(Paper)(({ theme }) => ({
  width: '500px',
  padding: theme.spacing(4),
}));


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!validEmail) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!validPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (validEmail && validPassword) {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <PageWrapper elevation={3}>
      <FormWrapper
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection:
            'column',
          alignItems: 'center'
        }}
      >
        <TextField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? 'Please enter a valid email' : ''}
          variant="outlined"
          required
          fullWidth
          sx={{ marginBottom: '12px' }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
          helperText={
            passwordError
              ? 'Please enter a password with at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character'
              : ''
          }
          variant="outlined"
          required
          fullWidth
          sx={{ marginBottom: '12px' }}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Login
        </Button>
      </FormWrapper>
    </PageWrapper>
  );
};

export default LoginForm;
