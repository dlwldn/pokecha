import React from "react";
import styled from "styled-components";
import { POKEMON_BREADS } from "../../lib/constant";
import { getRandomBread } from "../../lib/util";
import transitions from "../../style/transition";

type Props = {
    onClick: () => void;
};

const Bread = ({ onClick }: Props) => {
    const currentBread = getRandomBread(POKEMON_BREADS);
    return (
        <BreadWrapper>
            <img
                onClick={onClick}
                src={currentBread.image}
                alt={currentBread.name}
            />
        </BreadWrapper>
    );
};

export default Bread;

const BreadWrapper = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
        cursor: pointer;
        position: relative;
        ${transitions.defaultTransition};
        top: 0;
    }
    > img:hover {
        top: -30px;
        animation-name: ${transitions.shake};
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-delay: 1ms;
        animation-iteration-count: infinite;
    }
`;
