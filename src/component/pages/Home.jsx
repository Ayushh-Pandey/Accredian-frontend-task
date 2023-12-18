import React from 'react'
import { Box, Typography } from '@mui/material';


const Home = () => {
  return (
    <Box>
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'blue',
          fontWeight: 'BOLD',
          fontSize: 100,
          margin: '150px 250px 0px 250px'
        }}>
        Accredian

      </Typography>
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'gray',
          fontSize: 40,
        }}>credentials that matter</Typography>

      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
          fontWeight:50,
          fontSize: 60,
          margin: '100px'
        }}>Successfully Logged In 'Welcome Home' !!</Typography>

    </Box>
  )
}

export default Home;