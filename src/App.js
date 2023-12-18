import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/account/login/Login';
import Signup from './component/account/signup/Signup';
import Home from './component/pages/Home';
import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{width:"100%"}}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
