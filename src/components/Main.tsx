import styled from "styled-components";
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import React from "react";

const MainWrapper = styled.div`
  flex-grow: 1;
  overflow: auto;
`

function Main() {
    return (
        <MainWrapper>
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
        </MainWrapper>
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
 export default Main;