import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { queryKeys } from ".";
import {
    getPokemon,
    PokemonDataType,
    PokemonQueryType,
    PokemonDetailQueryType,
    PokemonDetailApiDataType,
    getPokemonDetail,
} from "../../api/pokemon";
import nameList from "../../lang_list.json";

type UseQueryOptions = {
    enabled?: boolean;
    staleTime: number;
};

export type PokemonDetailData = {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: string[];
    image: string;
};

export const usePokemon = (
    { limit, offset }: PokemonQueryType,
    options?: UseQueryOptions
) => {
    return useQuery<PokemonDataType, AxiosError>(
        [`${queryKeys.getPokemon}`, limit, offset],
        () => getPokemon({ limit, offset }),
        options
    );
};

export const usePokemonDetail = (
    { limit, offset }: PokemonDetailQueryType,
    options?: UseQueryOptions
) => {
    return useInfiniteQuery<
        PokemonDetailApiDataType[],
        AxiosError,
        PokemonDetailData[]
    >(
        [`${queryKeys.getPokemonDetail}`, limit, offset],
        ({ pageParam = 0 }) => getPokemonDetail({ limit, offset: (pageParam * limit) + 1 }),
        {
            select: ({ pages, pageParams }) => {
                return {
                    pages: pages.map((data) => {
                        return data.map(
                            ({ sprites, types, id, height, weight }) => {
                                return {
                                    id,
                                    height,
                                    weight,
                                    name: nameList.filter(
                                        (item) =>
                                            item.pokemon_species_id === id &&
                                            item.local_language_id === 3
                                    )[0].name,
                                    types: types.map((item) => item.type.name),
                                    image: sprites.other["official-artwork"][
                                        "front_default"
                                    ],
                                };
                            }
                        );
                    }),
                    pageParams,
                };
            },
            ...options,
            getNextPageParam: (lastPage, pages) => {
                return pages.length
            }
        },
        
    );
};
