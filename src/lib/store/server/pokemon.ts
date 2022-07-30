import { useQuery } from "@tanstack/react-query";
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
import nameList from '../../lang_list.json';

type UseQueryOptions = {
    enabled?: boolean;
    staleTime: number;
}   

export type PokemonDetailData = {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: string[];
    image: string;
}


export const usePokemon = ({ limit, offset }: PokemonQueryType, options?: UseQueryOptions ) => {
    return useQuery<PokemonDataType, AxiosError>(
        [`${queryKeys.getPokemon}`, limit, offset],
        () => getPokemon({ limit, offset }),
        options
    );
};

export const usePokemonDetail = ({ limit, offset }: PokemonDetailQueryType, options?: UseQueryOptions) => {
    return useQuery<PokemonDetailApiDataType[], AxiosError, PokemonDetailData[]>(
        [`${queryKeys.getPokemonDetail}`, limit, offset],
        () => getPokemonDetail({ limit, offset }),
        {
            select: (data) => {
                return data.map(({ sprites, types, name, ...etc }, idx) => {
                    return {
                        ...etc,
                        name: nameList.filter(item => item.pokemon_species_id === idx + offset && item.local_language_id === 3)[0].name,
                        types: types.map(item => item.type.name),
                        image: sprites.other['official-artwork']['front_default']
                    }
                })
            },
            ...options
        }
    )
}