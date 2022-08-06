import { atom } from "recoil";
import { PokemonDetailData } from "../server/pokemon";

interface ModalState {
    targetIndex: number;
    pokemonList: PokemonDetailData[];
    showModal: boolean;
    isNew: boolean;
}

export const modalState = atom<ModalState>({
    key: "modalState",
    default: {
        targetIndex: 0,
        pokemonList: [],
        showModal: false,
        isNew: false,
    },
});
