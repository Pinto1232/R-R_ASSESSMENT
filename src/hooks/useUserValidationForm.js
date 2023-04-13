import { useState } from 'react';

const useUserValidationForm = () => {
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

    // Email validation
    if (!email || email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    // Password validation
    if (!password || password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    setEmailError,
    setPasswordError 
  };
};

export default useUserValidationForm;
