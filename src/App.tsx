import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/label">标签</Link>
                        </li>
                        <li>
                            <Link to="/money">记一笔</Link>
                        </li>
                        <li>
                            <Link to="/statistic">统计</Link>
                        </li>
                    </ul>
                </nav>

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
            </div>
        </Router>
    );
}

function Label() {
    return <h2>标签页</h2>;
}

function Money() {
    return <h2>记一笔</h2>;
}

function Statistic() {
    return <h2>统计</h2>;
}

function NoMatch() {
    let location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

export default App;