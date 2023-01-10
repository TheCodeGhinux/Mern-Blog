import React from 'react'
import './App.css'

import { Container, Grid, AppBar, Typography, Grow } from '@mui/material';

// import Posts from './components/Posts/Posts';
import Form from './components/Form/Form.js';

import memories from '../images/memories.png'


const App = () => {
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Memories</Typography>
        <img src={memories} alt='memorires' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing='3' >
            <Grid item xs={12} sm={4} >
              {/* <Posts /> */}
            </Grid>
            <Grid item xs={12} sm={4} >
              {/* <Form />  */}
            </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  )
}

export default App;