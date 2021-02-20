import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";

function App() {
    return (
        <Router>
            <Wrapper>
                <Main/>
                <Nav/>
            </Wrapper>
        </Router>
    );
}

export default App;