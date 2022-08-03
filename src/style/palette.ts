import { PokemonType, POKEMON_TYPE } from "../lib/constant";

export type Palette = PokemonType & {
    black: string;
    black1: string;
    black2: string;
    white: string;
    orange: string;
    gray1: string;
    gray2: string;
    red: string;
};

const palette: Palette = {
    ...POKEMON_TYPE,

    black: "#000000",
    black1: "#0e0e0e",
    black2: "#393939",
    white: "#ffffff",
    orange: "#ffbe47",
    red: "#da343c",
    gray1: "#eeeeee",
    gray2: "#ebebeb",
};

export default palette;
