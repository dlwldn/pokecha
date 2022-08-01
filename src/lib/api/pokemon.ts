import pokeApi from ".";
import { DEFAULT_POKEMON_LIST_LIMIT_COUNT } from "../constant";

export type PokemonQueryType = {
    limit: number;
    offset: number;
};

export type PokemonDataType = {
    count: number;
    next: string;
    previous: string;
    results: {
        name: string;
        url: string;
    };
};

export type PokemonDetailQueryType = {
    ids: number[];
};

export type PokemonDetailApiDataType = {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
    sprites: {
        other: {
            "official-artwork": {
                front_default: string;
            };
        };
    };
};

export const getPokemon = async ({ limit, offset }: PokemonQueryType) => {
    const res = await pokeApi.get("/pokemon/", {
        params: {
            limit,
            offset,
        },
    });
    return res.data;
};

export const getPokemonDetail = async ({
    ids,
}: PokemonDetailQueryType) => {
    const getDetailPokemon = ids.map((id) => {
        return pokeApi.get(`/pokemon/${id}`);
    });
    const res = await Promise.all(getDetailPokemon).then((res) => {
        return res.map((item) => item.data);
    });
    return res;
};
