import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button,Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Register from './Register';

function UserRegister() {
  const navigate = useNavigate()
  
    const theme = createTheme();
  return (
    <div>
       <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-end',pb:4, bgcolor:"#1976d2"}}>
        <Button variant="contained" color='secondary' onClick={()=>{navigate('/')}} sx={{ mt: 3, mr: 5 }}>{'Go To Details Page'}</Button>
    </Box>

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>

        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Register
          </Typography>
          <Register/>
        </Paper>
      </Container>
    </ThemeProvider>
    </div>
  )
}

export default UserRegister
