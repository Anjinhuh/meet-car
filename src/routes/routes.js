import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import login from '../pages/login/login'

// NECESSITA DE ADICIONAR DEV E COLOCAR PARA VER MAIS

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
            </Switch>
        </BrowserRouter>
    )
}