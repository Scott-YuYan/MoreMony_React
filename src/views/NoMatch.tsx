import {useLocation} from "react-router-dom";
import React from "react";
import Icons from "../components/Icons";
import styled from "styled-components";

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

function NoMatch() {
    let location = useLocation();

    return (
        <NotFound>
            <Icons name='404'/>
            <span>
            No match for <code>{location.pathname}</code>
            </span>
        </NotFound>
    );
}

export default NoMatch;