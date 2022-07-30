import pokeApi from "."

export type PokemonQueryType = {
    limit: number;
    offset: number;
}

export type PokemonDataType = {
    count: number;
    next: string;
    previous: string;
    results: {
        name: string;
        url: string;
    }
}

export type PokemonDetailQueryType = {
    limit: number;
    offset: number;
}

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
        }
    }[];
    sprites: {
        other: {
            'official-artwork': {
                'front_default': string;
            }
        }
    };
}

export const getPokemon = async ({ limit, offset }: PokemonQueryType) => {
    const res = await pokeApi.get('/pokemon/', {
        params: {
            limit,
            offset
        }
    })
    return res.data;
}

export const getPokemonDetail = async ({ limit, offset }: PokemonDetailQueryType) => {
    const getDetailPokemon = Array.from({ length: limit }).map((pokemon, idx) => {
        return pokeApi.get(`/pokemon/${offset + idx}`)
    })
    const res = await Promise.all(getDetailPokemon).then((res)=> {
        return res.map(item => item.data)
    })
    return res;
}