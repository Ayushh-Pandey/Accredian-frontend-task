import React, { useState } from 'react'
import { Alert, Box, Button, Grid, Paper, TextField, Typography, styled } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import validation from '../validation/LoginValidation';
import Image from './login.jpg';

const Wrapper = styled(Box)`
  padding:10px 150px;
  display:flex;
  align-items:'center',
  justify-content:'center',
  flex:1;
  flex-direction:column;
  padding-top:150px;
  &> div,&>button,&>p{
      margin-top:20px
  }
`;

const LoginBUtton = styled(Button)`
    text-transform:none;
    background:#000000;
    color:#fff;
    font-weight:BOLD;
    font-size:16px;
    height: 40px;
    border-radius:2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
    color:#878787;
    font-size: 16px;
    display:flex;
    justify-content:center;
    align-items:center
`;

const initialValues = {
  username_or_email: '',
  password: ''
}

const Login = () => {
  const API_URL = 'http://localhost:5000/user/login';

  const [credentials, setCredentials] = useState(initialValues);
  const [validateCredentials, setValidateCredetials] = useState({});

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();

  const handleLogin = async () => {
    const validationError = validation(credentials);
    setValidateCredetials(validationError);
    if (validationError.username_or_email === "" && validationError.password === "") {
      try {
        const response = await axios.post(`${API_URL}`, credentials);
        if (response.status === 200) {
          navigate('/home')
        }
      } catch (err) {
        setError(err?.response?.data?.message);
      }
    }
  }

  return (

    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <Wrapper px={{ xs: 1, sm: 5, md: 20 }}>
          <Typography style={{ fontWeight: 'BOLD', fontSize: 25, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Sign in</Typography>

          <TextField
            name='username_or_email'
            label='Username or Email'
            placeholder='Username or Email'
            variant="outlined"
            required
            onChange={(e) => handleChange(e)} />
          {validateCredentials.username_or_email &&
            <span style={{ color: '#ff6161', fontWeight: 600 }} > {validateCredentials.username_or_email} </span>}

          <TextField
            name='password'
            label='password'
            placeholder='password'
            variant="outlined"
            required
            onChange={(e) => handleChange(e)} />
          {validateCredentials.password &&
            <span style={{ color: '#ff6161', fontWeight: 600 }} > {validateCredentials.password} </span>}

          {error ? <Alert severity="error" color="error">
            {error}
          </Alert> : ""}

          <LoginBUtton variant='contained' onClick={() => handleLogin()}>Login</LoginBUtton>
          <Text>OR</Text>
          <Link to='/signup'
            style={{
              textDecoration: 'none',
              color: 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 16,
              fontWeight: 'BOLD',
              marginTop: '20px'
            }}>Don't have an account? Sign Up here</Link>

        </Wrapper>
      </Grid>

      <Grid item display={{ xs: "none", lg: "block" }} md={6}>
        <Paper
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            overflow: 'hidden'
          }}>

          <img
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit:'cover'
            }} src={Image} alt='Login'/>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Login;