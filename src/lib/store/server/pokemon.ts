import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { queryKeys } from ".";
import {
    getPokemon,
    PokemonDataType,
    PokemonQueryType,
    PokemonDetailApiDataType,
    getPokemonDetail,
} from "../../api/pokemon";
import {
    DEFAULT_POKEMON_KOREAN_LANGUAGE_ID,
    DEFAULT_POKEMON_LIST_LIMIT_COUNT,
    DEFAULT_POKEMON_MAX_ID,
} from "../../constant";
import nameList from "../../lang_list.json";

type UseQueryOptions = {
    enabled?: boolean;
    staleTime: number;
};

export type PokemonDetailPayload = {
    ids?: number[];
    isSearch?: boolean;
};

export type PokemonDetailData = {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: string[];
    image: string;
    genus: string | null;
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

export const usePokemonDetail = (ids: number[], options?: UseQueryOptions) => {
    return useInfiniteQuery<
        PokemonDetailApiDataType[],
        AxiosError,
        PokemonDetailData[]
    >(
        [`${queryKeys.getPokemonDetail}`, ids],
        ({ pageParam = 0 }) =>
            getPokemonDetail({
                ids: ids.map((item) => item + pageParam * DEFAULT_POKEMON_LIST_LIMIT_COUNT),
            }),
        {
            select: ({ pages, pageParams }) => {
                return {
                    pages: pages.map((data) => {
                        return data.map(
                            ({ sprites, types, id, height, weight }) => {
                                const matchedItem = nameList.filter(
                                    (item) =>
                                        item.pokemon_species_id === id &&
                                        item.local_language_id === DEFAULT_POKEMON_KOREAN_LANGUAGE_ID
                                )[0];
                                return {
                                    id,
                                    height,
                                    weight,
                                    name: matchedItem.name,
                                    types: types.map((item) => item.type.name),
                                    image: sprites.other["official-artwork"][
                                        "front_default"
                                    ],
                                    genus: matchedItem.genus,
                                };
                            }
                        );
                    }),
                    pageParams,
                };
            },
            ...options,
            getNextPageParam: (lastPage, pages) => {
                if (
                    pages.length ===
                    DEFAULT_POKEMON_MAX_ID / DEFAULT_POKEMON_LIST_LIMIT_COUNT
                )
                    return;
                return pages.length;
            },
        }
    );
};
