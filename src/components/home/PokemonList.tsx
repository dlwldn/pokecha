import React, { useEffect, useState } from "react";
import useIntersection from "../../hooks/useIntersection";
import { DEFAULT_POKEMON_LIST_LIMIT_COUNT } from "../../lib/constant";
import {
    PokemonDetailData,
    usePokemonDetail,
} from "../../lib/store/server/pokemon";
import EmptyData from "../common/EmptyData";
import List from "../common/List";
import Skeleton from "../common/Skeleton";
import PokemonCard from "./PokemonCard";

type Prop = {
    filterTypes: string[];
};

const PokemonList = ({ filterTypes }: Prop) => {
    const {
        data: pokemonDetailList,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = usePokemonDetail(
        Array.from({ length: DEFAULT_POKEMON_LIST_LIMIT_COUNT }).map(
            (_, idx) => idx + 1
        ),
        { staleTime: 36000 }
    );
    const [intersectionTargetElement, setIntersectionTargetElement] =
        useState<HTMLDivElement | null>(null);
    const entry = useIntersection(intersectionTargetElement);

    const renderPokemonCard = (pokemon: PokemonDetailData) => {
        if (filterTypes.length === 0)
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        if (
            filterTypes.filter((item) => pokemon.types.includes(item)).length >
            0
        ) {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        }
    };

    useEffect(() => {
        if (intersectionTargetElement && entry) {
            entry.isIntersecting && fetchNextPage();
        }
    }, [intersectionTargetElement, entry]);

    if (isLoading)
        return (
            <List>
                {Array.from({ length: DEFAULT_POKEMON_LIST_LIMIT_COUNT }).map(
                    (_, idx) => (
                        <Skeleton key={idx} />
                    )
                )}
            </List>
        );

    if (
        pokemonDetailList?.pages
            .map((item) => item.map(renderPokemonCard).filter((item) => item))
            .flat().length === 0
    ) {
        return <EmptyData />;
    }

    return (
        <List>
            {pokemonDetailList?.pages.map((item) =>
                item.map(renderPokemonCard)
            )}
            {isFetchingNextPage &&
                Array.from({ length: DEFAULT_POKEMON_LIST_LIMIT_COUNT }).map(
                    (_, idx) => <Skeleton key={idx} />
                )}
            {hasNextPage && filterTypes.length === 0 && (
                <div ref={setIntersectionTargetElement}></div>
            )}
        </List>
    );
};

export default PokemonList;
