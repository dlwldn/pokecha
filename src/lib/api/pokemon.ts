import pokeApi from "."

export type PokemonQueryType = {
    limit: number;
    offset: number;
}

export type PokemonDataType = {
    
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