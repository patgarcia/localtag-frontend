import React, { useState, useContext } from 'react'
import { DataContext } from './components/DataContext'
import { Route, Switch } from 'react-router-dom' 
import Header from './components/Header'
import Main from './components/Main'
import Logo from './components/Logo'
import Viewport from './components/Viewport'
import './App.css';

function App() {
  const [view, setView] = useState('all')
  const [id, setId] = useState('')
  return (
      <DataContext.Provider value={{view, setView, id, setId}}>
        <Switch>
          {/* Home */}
          <Route exact path="/">
            <Header/>
            <Main/>
          </Route>

          {/* Detail */}
          <Route exact path="/collection/:id" render={routerProps => <Viewport match={routerProps.match}/>}/>
            

        </Switch>
      </DataContext.Provider>
  );
}

export default App;
