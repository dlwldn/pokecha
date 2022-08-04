import { atom } from "recoil";
import { PokemonDetailData } from "../server/pokemon";

interface UserState {
    pokemonList: PokemonDetailData[];
}

export const userState = atom<UserState>({
    key: 'userState',
    default: {
        pokemonList: []
    }
})