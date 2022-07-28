import pokeApi from "."

export const getPokemon = async () => {
    const res = await pokeApi.get('')
    return res;
}