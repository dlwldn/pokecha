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
    const [isReadyBread, setIsReadyBread] = useState<boolean>(false);

    useEffect(()=> {
        if(!showBread) {
            setIsReadyBread(false)
        } else {
            const bread = getRandomBread(POKEMON_BREADS);
            const image = new Image();
            image.src = bread.image;
            image.onload = () => {
                setIsReadyBread(true);
                setCurrentBread(bread);
            }
        }
    }, [showBread])

    return (
        <BreadImage
            isReadyBread={isReadyBread}
            onClick={isReadyBread ? onClick : () => {}}
            src={currentBread.image}
            alt={currentBread.name}
        />
    );
};

export default Bread;

const BreadImage = styled.img<{ isReadyBread: boolean }>`
    position: relative;
    transition: 1s;
    top: 0;
    visibility: ${({ isReadyBread }) => (isReadyBread ? "visible" : "hidden")};
    opacity: ${({ isReadyBread }) => (isReadyBread ? 1 : 0)};

    cursor: pointer;
    :hover {
        top: -30px;
        animation-name: ${transitions.shake};
        animation-duration: 1s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
    }
`;
