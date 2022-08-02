import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import palette from "../../style/palette";

const NAV_LIST = [
    { href: "/", name: "홈" },
    { href: "/gacha", name: "뽑기" },
    { href: "/my", name: "내 포켓몬" },
];

type Props = {};

const Nav = (props: Props) => {
    return (
        <Navigation>
            {NAV_LIST.map((item, idx) => {
                return (
                    <NavLink to={item.href} key={idx}>
                        {item.name}
                    </NavLink>
                );
            })}
        </Navigation>
    );
};

export default Nav;

const Navigation = styled.nav`
    height: 60px;
    margin: 10px 0;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    > a {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    > a.active {
        color: ${palette.white};
        background: yellowgreen;
    }
`;
