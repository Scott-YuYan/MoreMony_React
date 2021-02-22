import Wrapper from "./Wrapper";
import Main from "./Main";
import Nav from "./Nav";
import React from "react";


function Layout(props:any){
    return(
        <Wrapper>
            <Main className={props.className}>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    );
}

export default Layout;