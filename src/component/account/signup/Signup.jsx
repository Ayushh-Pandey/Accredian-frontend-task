import { Box, Button, TextField, Typography, styled, Grid, Paper } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Image from './signup.jpg'
import validation from '../validation/SignupValidation';
import Alert from '@mui/material/Alert';

const Wrapper = styled(Box)`
  display:flex;
  align-items:'center',
  justify-content:'center',
  flex:1;
  flex-direction:column;
  padding-top:20px;
  &> div,&>button,&>p{
    margin-top:20px;
  }
`;

const SignupButton = styled(Button)`
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
    username: '',
    email: '',
    password: '',
    confirm_password: '',
}

const Signup = () => {
    const API_URL = 'http://localhost:5000/user/signup';

    const [credentials, setCredentials] = useState(initialValues);
    const [validateCredentials, setValidateCredetials] = useState({});
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const navigate = useNavigate();

    const handleSignup = async () => {
        const validationError = validation(credentials)
        setValidateCredetials(validationError);
        
        if (validationError.username === "" && validationError.email === "" &&  validationError.password === "" &&  validationError.confirm_password === "") {
            try {
                const response = await axios.post(`${API_URL}`, credentials)
                if (response.status === 200) {
                    navigate('/');
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
                    <Typography style={{ fontWeight: 'BOLD', fontSize: 25, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Sign up</Typography>

                    <TextField
                        name='username'
                        label='Username'
                        placeholder='Username'
                        variant="outlined"
                        required
                        onChange={(e) => handleChange(e)} />
                    {validateCredentials.username &&
                        <span style={{ color: '#ff6161', fontWeight: 600 }} > {validateCredentials.username} </span>}

                    <TextField
                        name='email'
                        label='Email'
                        placeholder='Email'
                        variant="outlined"
                        required
                        onChange={(e) => handleChange(e)} />
                    {validateCredentials.email &&
                        <span style={{ color: '#ff6161', fontWeight: 600 }}>{validateCredentials.email}</span>}

                    <TextField
                        name='password'
                        label='password'
                        placeholder='password'
                        variant="outlined"
                        required
                        onChange={(e) => handleChange(e)} />
                    {validateCredentials.password &&
                        <span style={{ color: '#ff6161', fontWeight: 600 }}>{validateCredentials.password}</span>}

                    <TextField
                        name='confirm_password'
                        label='confirm password'
                        placeholder='Confirm password'
                        variant="outlined"
                        required
                        onChange={(e) => handleChange(e)} />
                    {validateCredentials.confirm_password &&
                        <span style={{ color: '#ff6161', fontWeight: 600 }}>{validateCredentials.confirm_password}</span>}

                    {error ? <Alert severity="error" color="error">
                        {error}
                    </Alert> : ""}
                    <SignupButton variant='contained' onClick={() => handleSignup()} >Continue</SignupButton>
                    <Text>OR</Text>
                    <Link to='/'
                        style={{
                            textDecoration: 'none',
                            color: 'black',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: 16,
                            fontWeight: 'BOLD',
                            marginTop: '20px'
                        }}>Already have an account?</Link>

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
                        }} src={Image} alt='Sign up'/>
                </Paper>
            </Grid>

        </Grid>
    )
}

export default Signup;