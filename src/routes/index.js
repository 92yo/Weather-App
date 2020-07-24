import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Favorites from '../components/Favorites'

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/favorites' component={Favorites} />
        </Switch>
    )
}

export default Routes

