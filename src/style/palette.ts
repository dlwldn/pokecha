import { PokemonType, POKEMON_TYPE } from "../lib/constant";

export type Palette = PokemonType & {
    black: string;
    white: string;
    orange: string;
    gray1: string;
};

const palette: Palette = {
    ...POKEMON_TYPE,

    black: "#000000",
    white: "#ffffff",
    orange: "#ffbe47",
    gray1: "#eeeeee",
};

export default palette;
