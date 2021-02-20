import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`

const Nav = styled.div`
  border: 1px solid black;
  text-align: center;
  padding: 10px;
  background-color: blue;

  > ul {
    display: flex;

    > li {
      width: 33.33333%;
    }
  }
`

function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
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
                </Main>
                <Nav>
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
                </Nav>
            </Wrapper>
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