import React, { useState, useContext } from 'react'
import { DataContext } from './components/DataContext'
import Header from './components/Header'
import Main from './components/Main'
import './App.css';

function App() {
  const [view, setView] = useState('all')
  const [id, setId] = useState('')
  return (
      <DataContext.Provider value={{view, setView, id, setId}}>
        <Header/>
        <Main/>
      </DataContext.Provider>
  );
}

export default App;
