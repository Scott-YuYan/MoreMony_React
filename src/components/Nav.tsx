import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icons from "./Icons";

const NavWrapper = styled.div`
  border: 1px solid black;
  text-align: center;
  padding: 5px;
  line-height: 22px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.33333%;

      > a {
        display: flex;
        flex-direction: column;
        align-items: center;

        &.selected {
          color: red;
          .icons{
            fill: red;
          }
        }
      }
    }
  }

`

function Nav() {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/label" activeClassName="selected"><Icons name='tag'/>标签</NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected"><Icons name={'money'}/>记一笔</NavLink>
                </li>
                <li>
                    <NavLink to="/statistic" activeClassName="selected"><Icons name={'chart'}/>统计</NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
}

export default Nav;