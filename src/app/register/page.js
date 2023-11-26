'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';


export default function Page() {



  /*
  This function does the actual work
  calling the fetch to get things from the database.
  */ 
  async function runDBCallAsync(url) {


    const res = await fetch(url);
    const data = await res.json();

 
    if(data.data== "valid"){
      console.log("Registration Successfull!")

      
    } else {

      console.log("Erro registration unsuccessful  ")
    }
  }


  /*

  When the button is clicked, this is the event that is fired.
  The first thing we need to do is prevent the default refresh of the page.
  */
	const handleSubmit = (event) => {
		
		console.log("handling submit");


    event.preventDefault();
  
		const data = new FormData(event.currentTarget);


    let email = data.get('email')
	  let pass = data.get('pass')
    let repeatPass = data.get('repeatPass')
    let username = data.get('username')
	  let address = data.get('address')
    let dob = data.get('dob')

    console.log("Sent email:" + email)
    console.log("Sent pass:" + pass)
    console.log("Sent Repeat Pass:" + repeatPass)
    console.log("Sent username:" + username)
    console.log("Sent address:" + address)
  
    console.log("Sent dob:" + dob)


    runDBCallAsync(`api/register?email=${email}&pass=${pass}&repeatPass=${repeatPass}&username=${username}&address=${address}}&dob=${dob}`)



  }; // end handler




  
  const theme = createTheme({
    palette: {
     
      secondary: {
        main: green[500],
      },
    },
  });
  

  
  return (
    <ThemeProvider theme={theme}>
    <Container component="main"  maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

        <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            label="User Name"
            type="text"
            id="username"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="pass"
            label="Pass"
            type="pass"
            id="pass"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="pass"
            label="Reapeat Pass"
            type="pass"
            id="repeatPass"
          />
            <TextField
              margin="normal"
              required
              fullWidth
              name="dob"
              label="dob"
              type="text"
              id="dob"
              autoComplete=""
            />
         <TextField
            margin="normal"
            required
            fullWidth
            name="address"
            label="Address"
            type="text"
            id="address"
          />    
         <FormControlLabel
control={<Checkbox value="remember" color="primary" />}
label="Remember me"
/>
<Button
type="submit"
fullWidth
variant="contained"
sx={{ mt: 3, mb: 2 }}
>
Register
</Button>      

          
          <Grid container>
           
            <Grid item>
              <Link href="#" variant="body2">
                {"Already have an account? Log in!"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>

    </ThemeProvider>

  );
}