import React, { useEffect, useMemo, useState } from "react";
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
    PokemonShowMode?: PokemonShowMode;
};
export type PokemonShowMode =
    | "default"
    | "find"
    | "collectionAll"
    | "collectionActive";

const PokemonList = ({
    pokemonIdList,
    filterTypes = [],
    PokemonShowMode = "default",
}: Prop) => {
    const {
        data: pokemonDetailList,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = usePokemonDetail(
        PokemonShowMode !== "collectionAll"
            ? pokemonIdList
            : Array.from({
                  length: DEFAULT_POKEMON_LIST_LIMIT_COUNT,
              }).map((_, idx) => idx + 1),
        { staleTime: 300000 }
    );

    const [intersectionTargetElement, setIntersectionTargetElement] =
        useState<HTMLDivElement | null>(null);
    const entry = useIntersection(intersectionTargetElement);
    const setModalClientState = useSetRecoilState(modalState);
    const pokemonList = useMemo(() => {
        if (!pokemonDetailList) return [];
        if (PokemonShowMode === "collectionAll") {
            return pokemonDetailList.pages
                .flat()
                .map((item, idx) => {
                    if (pokemonIdList.some((id) => id === item.id)) {
                        return pokemonDetailList.pages
                            .flat()
                            .find(
                                (pokemon) => pokemon.id === idx + 1
                            ) as PokemonDetailData;
                    }
                    return {
                        id: item.id,
                        height: -1,
                        weight: -1,
                        name: "???",
                        types: ["null"],
                        image: item.image,
                        genus: "",
                    };
                })
                .filter(
                    (pokemon) =>
                        filterTypes.filter((item) =>
                            pokemon.types.includes(item)
                        ).length === filterTypes.length
                );
        }
        return pokemonDetailList.pages
            .flat()
            .filter(
                (pokemon) =>
                    filterTypes.filter((item) => pokemon.types.includes(item))
                        .length === filterTypes.length
            );
    }, [pokemonDetailList, filterTypes, PokemonShowMode]);

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
                pokemonList: pokemonList.filter(
                    (item) => item.types[0] !== "null"
                ),
                isNew: false,
            };
        });
    }, [pokemonDetailList, filterTypes]);

    const renderPokemonCard = (pokemon: PokemonDetailData, idx: number) => {
        return (
            <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                index={
                    PokemonShowMode === "collectionAll"
                        ? filterTypes.length > 0
                            ? idx
                            : pokemonIdList.indexOf(pokemon.id)
                        : idx
                }
            />
        );
    };

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

    if (pokemonList.length === 0) {
        return <EmptyData />;
    }

    return (
        <List>
            {pokemonList.map(renderPokemonCard)}
            {isFetchingNextPage &&
                (PokemonShowMode === "default" ||
                    PokemonShowMode === "collectionAll") &&
                Array.from({ length: DEFAULT_POKEMON_LIST_LIMIT_COUNT }).map(
                    (_, idx) => <Skeleton key={idx} />
                )}
            {hasNextPage &&
                (PokemonShowMode === "default" ||
                    PokemonShowMode === "collectionAll") &&
                filterTypes.length === 0 && (
                    <div ref={setIntersectionTargetElement}></div>
                )}
        </List>
    );
};

export default PokemonList;
