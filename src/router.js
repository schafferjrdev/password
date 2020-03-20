import React from "react";
import {
    HashRouter,
    Switch,
    Route,
} from "react-router-dom";
import Home from './Components/Home'
import Game from './Components/Game'

const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/game">
                    <Game/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default Router;