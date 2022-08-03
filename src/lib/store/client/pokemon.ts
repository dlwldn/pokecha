import { atom } from "recoil";
import { PokemonDetailData } from "../server/pokemon";

interface PokemonState {
    pokemonList: PokemonDetailData[];
}

export const pokemonState = atom<PokemonState>({
    key: 'pokemonState',
    default: {
        pokemonList: [],
    }
})