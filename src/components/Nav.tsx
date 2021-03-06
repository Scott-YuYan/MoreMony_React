import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icons from "./Icons";

const NavWrapper = styled.div`
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

        &.test {
          color: #9a9a9a;

          .icons {
            fill: #9a9a9a;
          }
        }

        &.selected {
          color: #000000;

          .icons {
            fill: #000000;
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
                    <NavLink to="/label" exact className='test' activeClassName="selected">
                        <Icons name='tag'/>标签</NavLink>
                </li>
                <li>
                    <NavLink to="/money" exact className='test' activeClassName="selected">
                        <Icons name={'money'}/>记一笔</NavLink>
                </li>
                <li>
                    <NavLink to="/statistic" exact className='test' activeClassName="selected">
                        <Icons name={'chart'}/>统计</NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
}

export default Nav;