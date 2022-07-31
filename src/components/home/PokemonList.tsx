import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useIntersection from "../../hooks/useIntersection";
import {
    PokemonDetailData,
    usePokemonDetail,
} from "../../lib/store/server/pokemon";
import PokemonCard from "./PokemonCard";

type Props = {
    limit: number;
    offset: number;
};

const PokemonList = ({ limit, offset }: Props) => {
    const {
        data: pokemonDetailList,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = usePokemonDetail({ limit, offset }, { staleTime: 36000 });
    const observerRef = useRef<HTMLDivElement>(null);
    const entry = useIntersection(observerRef);

    // const handleObserver: IntersectionObserverCallback = useCallback(
    //     (entries) => {
    //         const target = entries[0];
    //         if (target.isIntersecting) {
    //             fetchNextPage();
    //         }
    //     },
    //     []
    // );

    const renderPokemonCard = (pokemon: PokemonDetailData, idx: number) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
    };

    useEffect(() => {
        console.log(isLoading, entry);
        if(entry) fetchNextPage();
     
        // const observer = new IntersectionObserver(handleObserver, {
        //     root: null,
        //     threshold: 0.5,
        //     rootMargin: "0px",
        // });
        // if (observerRef.current) observer.observe(observerRef.current);
        // return () => observer.disconnect();
    }, [isLoading, entry]);

    if (isLoading) return <div>로딩중...</div>;
    if (!pokemonDetailList) return null;

    return (
        <List>
            {pokemonDetailList.pages.map((item) => item.map(renderPokemonCard))}
            {!isLoading && <div ref={observerRef} >로딩 옵져버</div>}
        </List>
    );
};

export default PokemonList;

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
`;
