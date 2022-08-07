import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import palette from "../../style/palette";
import { ReactComponent as Pokeball } from "../../static/svg/pokeball.svg";
import { NAV_LIST } from "../../lib/constant";

type Props = {};

const Nav = (props: Props) => {
    return (
        <Navigation>
            {NAV_LIST.map((item, idx) => {
                return (
                    <NavLink to={item.href} key={idx}>
                        {item.name}
                        <span>
                            <Pokeball />
                        </span>
                    </NavLink>
                );
            })}
        </Navigation>
    );
};

export default Nav;

const Navigation = styled.nav`
    position: sticky;
    top: 60px;
    margin-bottom: 10px;
    border-top: 1px solid ${palette.gray1};
    border-bottom: 1px solid ${palette.gray1};
    background-color: ${palette.white};
    z-index: 5;
    height: 40px;
    display: flex;
    justify-content: space-between;
    > a {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: 700;
        > span {
            width: 20px;
            margin-left: 5px;
            margin-top: 3px;
            display: none;
        }
    }
    > a.active {
        color: ${palette.red};
    }
    > a.active span {
        display: inline-block;
    }
`;
