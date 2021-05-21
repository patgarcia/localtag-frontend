import React, { useState, useContext } from 'react'
import { DataContext } from './components/DataContext'
import Header from './components/Header'
import Main from './components/Main'
import './App.css';

function App() {
  const [search, setSearch] = useState('')
  return (
      <DataContext.Provider value={{search, setSearch}}>
        <Header/>
        <Main/>
      </DataContext.Provider>
  );
}

export default App;
