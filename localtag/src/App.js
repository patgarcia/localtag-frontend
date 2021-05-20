import React, { useState, useContext } from 'react'
import { DataContext } from './components/DataContext' 
import { Grid } from '@material-ui/core';
import Header from './components/Header'
import Main from './components/Main'
import './App.css';

function App() {
  return (
    <Grid container direction="column">
      <DataContext.Provider>
        <Header />
        <Main />
      </DataContext.Provider>
      </Grid>
  );
}

export default App;
