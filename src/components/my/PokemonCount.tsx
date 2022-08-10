import React from "react";
import styled from "styled-components";
import { getPokemonPercentColor } from "../../lib/util";

type Props = {
    value: number;
    total: number;
    hideTotalCount?: boolean;
};

const PokemonCount = ({ value, total, hideTotalCount = false }: Props) => {
    return (
        <CountWrapper>
            <span>포켓몬 : </span>
            <CurrentCount percentOfPokemon={value / total}>
                {value}
            </CurrentCount>
            {!hideTotalCount && (
                <>
                    <span>{` / `}</span>
                    <MaxCount>{total}</MaxCount>
                </>
            )}
            <span>
                &nbsp; ({((value / total) * 100).toFixed(1)}%)
            </span>
        </CountWrapper>
    );
};

export default PokemonCount;

const CountWrapper = styled.div`
    font-weight: 700;
    font-size: 14px;
`;
const MaxCount = styled.span``;
const CurrentCount = styled.span<{ percentOfPokemon: number }>`
    color: ${({ percentOfPokemon }) =>
        getPokemonPercentColor(percentOfPokemon)};
`;
