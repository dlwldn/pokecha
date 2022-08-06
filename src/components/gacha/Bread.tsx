import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { POKEMON_BREADS } from "../../lib/constant";
import { getRandomBread } from "../../lib/util";
import transitions from "../../style/transition";

type Props = {
    isGacha: boolean;
    onClick: () => void;
};

const Bread = ({ isGacha, onClick }: Props) => {
    const [currentBread, setCurrentBread] = useState(
        getRandomBread(POKEMON_BREADS)
    );

    useEffect(() => {
        if (isGacha) {
            setCurrentBread(getRandomBread(POKEMON_BREADS));
        }
    }, [isGacha]);

    return (
        <Image
            isGacha={isGacha}
            onClick={isGacha ? onClick : () => {}}
            src={currentBread.image}
            alt={currentBread.name}
        />
    );
};

export default Bread;

const Image = styled.img<{ isGacha: boolean }>`
    position: relative;
    ${transitions.defaultTransition};
    top: 0;
    opacity: ${({ isGacha }) => (isGacha ? 1 : 0)};
    
    cursor: ${({ isGacha }) => (isGacha ? 'pointer' : 'default')};
    :hover {
        top: -30px;
        animation-name: ${transitions.shake};
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-delay: 1ms;
        animation-iteration-count: infinite;
    }
`;
