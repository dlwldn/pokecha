import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    PokemonDetailData,
    usePokemon,
    usePokemonDetail,
} from "../../lib/store/server/pokemon";
import PokemonCard from "./PokemonCard";

type Props = {
    limit: number;
    offset: number;
};

const PokemonList = ({ limit, offset }: Props) => {
    // const [currentList, setCurrentList] = useState<PokemonDetailData[]>([]);
    const { data: pokemons } = usePokemon(
        { limit, offset },
        { staleTime: 36000 }
    );
    const { data: pokemonDetailList, isLoading } = usePokemonDetail(
        { limit, offset },
        { enabled: !pokemons, staleTime: 36000 }
    );

    // useEffect(()=> {
    //     if(pokemonDetailList) {
    //         setCurrentList([
    //             ...currentList,
    //             ...pokemonDetailList
    //         ])
    //     }
    // }, [pokemonDetailList])

    const renderPokemonCard = (pokemon: PokemonDetailData, idx: number) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
    };

    // if (isLoading) return <div>로딩중...</div>;
    if (!pokemonDetailList) return null;

    return <List>{pokemonDetailList.map(renderPokemonCard)}</List>;
};

export default PokemonList;

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
`;
