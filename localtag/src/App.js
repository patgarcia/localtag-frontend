import React, { useState, useContext } from 'react'
import { DataContext } from './components/DataContext' 
import Main from './components/Main'
import './App.css';

function App() {
  return (
      <DataContext.Provider>
        <Main/>
      </DataContext.Provider>
  );
}

export default App;
