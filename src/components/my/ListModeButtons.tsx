import React from "react";
import styled from "styled-components";
import palette from "../../style/palette";
import { PokemonShowMode } from "../home/PokemonList";

type Props = {
    value: PokemonShowMode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ListModeButtons = ({ value, onClick }: Props) => {
    return (
        <ButtonsWrapper>
            <Button
                isActive={value === "collectionAll"}
                name="collectionAll"
                onClick={onClick}
            >
                컬렉션 보기
            </Button>
            <Button
                isActive={value === "collectionActive"}
                name="collectionActive"
                onClick={onClick}
            >
                일반 보기
            </Button>
        </ButtonsWrapper>
    );
};

export default ListModeButtons;

const ButtonsWrapper = styled.div`
    display: inline-block;
`;
const Button = styled.button<{ isActive: boolean }>`
    font-weight: 700;
    color: ${({ isActive }) => (isActive ? palette.orange : palette.black)};
`;
