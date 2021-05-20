import React from 'react'
import { Main } from './components/Main'
import { Cards } from './components/Cards'
import { Route, Switch, Redirect } from 'react-router-dom'

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route  path="/" component={Main} />
                <Route exact path="/cards" component={Cards} />
            </Switch>
        </div>
    )
}
