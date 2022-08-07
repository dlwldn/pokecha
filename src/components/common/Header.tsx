import React from "react";
import styled from "styled-components";
import Logo from "../../static/images/pokemon_logo.png";
import palette from "../../style/palette";

type Props = {};

const Header = (props: Props) => {
    return (
        <HeaderWrapper>
            <img src={Logo} />
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.header`
    position: relative;
    height: 60px;
    padding: 10px;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    background-color: ${palette.white};
    z-index: 5;
`;
