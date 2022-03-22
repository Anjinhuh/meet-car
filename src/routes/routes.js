import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import login from '../pages/login/login'
import MainPage from '../pages/mainPage/main'


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
                <Route path="/meet" exact component={MainPage} />
            </Switch>
        </BrowserRouter>
    )
}