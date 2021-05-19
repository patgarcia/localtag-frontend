import React, { useState, useContext } from 'react'
import { DataContext } from './components/DataContext' 
import Main from './components/Main'
import './App.css';
import Header from './components/Header'

function App() {
  return (
      <DataContext.Provider>
        {/* <h1>LocalTag Frontend</h1> */}
        <Header />
      </DataContext.Provider>
  );
}

export default App;
