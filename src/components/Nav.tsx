import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const NavWrapper = styled.div`
  border: 1px solid black;
  text-align: center;
  padding: 16px;
  line-height: 22px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;

    > li {
      width: 33.33333%;
    }
  }
`

function Nav() {
    return (
        <NavWrapper>
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
        </NavWrapper>
    );
}

export default Nav;