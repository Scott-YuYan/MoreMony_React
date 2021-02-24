import {useLocation} from "react-router-dom";
import React from "react";
import Icons from "../components/Icons";
import NotFoundWrapper from "./money/Wrapper/NotFoundWrapper";

function NoMatch() {
    let location = useLocation();

    return (
        <NotFoundWrapper>
            <Icons name='404'/>
            <span>
            No match for <code>{location.pathname}</code>
            </span>
        </NotFoundWrapper>
    );
}

export default NoMatch;