import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PokemonBreadType, POKEMON_BREADS } from "../../lib/constant";
import { getRandomBread } from "../../lib/util";
import transitions from "../../style/transition";

type Props = {
    showBread: boolean;
    onClick: () => void;
};

const Bread = ({ showBread, onClick }: Props) => {
    const [currentBread, setCurrentBread] = useState<PokemonBreadType>({
        name: "",
        image: "",
    });

    useEffect(() => {
        if (showBread) {
            setCurrentBread(getRandomBread(POKEMON_BREADS));
        }
    }, [showBread]);

    return (
        <Image
            showBread={showBread}
            onClick={showBread ? onClick : () => {}}
            src={currentBread.image}
            alt={currentBread.name}
        />
    );
};

export default Bread;

const Image = styled.img<{ showBread: boolean }>`
    position: relative;
    ${transitions.defaultTransition};
    top: 0;
    opacity: ${({ showBread }) => (showBread ? 1 : 0)};

    cursor: ${({ showBread }) => (showBread ? "pointer" : "default")};
    :hover {
        top: -30px;
        animation-name: ${transitions.shake};
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-delay: 1ms;
        animation-iteration-count: infinite;
    }
`;
