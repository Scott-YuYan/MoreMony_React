import React from 'react';
import {
    BrowserRouter as Router, Redirect, Route, Switch,
} from "react-router-dom";

import NoMatch from "views/NoMatch";
import Statistic from "views/Statistic";
import Money from "views/Money";
import Label from "views/Label";
import LabelEdit from "./views/LabelEdit";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/label">
                    <Label/>
                </Route>
                <Route exact path="/label/:id">
                    <LabelEdit/>
                </Route>
                <Route exact path="/money">
                    <Money/>
                </Route>
                <Route exact path="/statistic">
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