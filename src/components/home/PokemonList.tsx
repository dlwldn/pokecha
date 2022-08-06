import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import useIntersection from "../../hooks/useIntersection";
import { DEFAULT_POKEMON_LIST_LIMIT_COUNT } from "../../lib/constant";
import { modalState } from "../../lib/store/client/modal";
import {
    PokemonDetailData,
    usePokemonDetail,
} from "../../lib/store/server/pokemon";
import EmptyData from "../common/EmptyData";
import List from "../common/List";
import Skeleton from "../common/Skeleton";
import PokemonCard from "./PokemonCard";

type Prop = {
    pokemonIdList: number[];
    filterTypes?: string[];
    isNotUsedInfinite?: boolean;
};

const PokemonList = ({ pokemonIdList, filterTypes = [], isNotUsedInfinite = false }: Prop) => {
    const {
        data: pokemonDetailList,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = usePokemonDetail(pokemonIdList, { staleTime: 36000 });
    const [intersectionTargetElement, setIntersectionTargetElement] =
        useState<HTMLDivElement | null>(null);
    const entry = useIntersection(intersectionTargetElement);
    const setModalClientState = useSetRecoilState(modalState);
    const pokemonList = pokemonDetailList?.pages
        .flat()
        .filter(
            (pokemon) =>
                filterTypes.filter((item) => pokemon.types.includes(item))
                    .length === filterTypes.length
        );

    const renderPokemonCard = (pokemon: PokemonDetailData, idx: number) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} index={idx} />;
    };

    useEffect(() => {
        if (intersectionTargetElement && entry) {
            entry.isIntersecting && fetchNextPage();
        }
    }, [intersectionTargetElement, entry]);

    useEffect(() => {
        if (!pokemonDetailList) return;
        setModalClientState((currVal) => {
            return {
                ...currVal,
                pokemonList: pokemonDetailList.pages
                    .flat()
                    .filter(
                        (pokemon) =>
                            filterTypes.filter((item) =>
                                pokemon.types.includes(item)
                            ).length === filterTypes.length
                    ),
                isNew: false,
            };
        });
    }, [pokemonDetailList, filterTypes]);

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
    if (pokemonList?.length === 0) {
        return <EmptyData />;
    }

    return (
        <List>
            {pokemonList?.map(renderPokemonCard)}
            {isFetchingNextPage &&
                !isNotUsedInfinite &&
                Array.from({ length: DEFAULT_POKEMON_LIST_LIMIT_COUNT }).map(
                    (_, idx) => <Skeleton key={idx} />
                )}
            {hasNextPage && !isNotUsedInfinite && filterTypes.length === 0 && (
                <div ref={setIntersectionTargetElement}></div>
            )}
        </List>
    );
};

export default PokemonList;
