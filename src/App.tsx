import React from 'react';
import {
    BrowserRouter as Router, Redirect, Route, Switch,
} from "react-router-dom";

import NoMatch from "views/NoMatch";
import Statistic from "views/Statistic";
import Money from "views/Money";
import Label from "views/Label";
<<<<<<< HEAD
=======

>>>>>>> yy

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/label">
                    <Label/>
                </Route>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/statistic">
                    <Statistic/>
                </Route>
                <Redirect exact from="/" to="statistic"/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;