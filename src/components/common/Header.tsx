import React from "react";
import styled from "styled-components";
import Logo from "../../static/images/pokemon_logo.png";

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
    height: 200px;
    padding: 10px;
    display: flex;
    justify-content: center;
`;
