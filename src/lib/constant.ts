import poorinBread from "../static/images/bread-1.png";
import fireBread from "../static/images/bread-2.png";
import balchaengBread from "../static/images/bread-3.png";
import picaBread from "../static/images/bread-4.png";
import roketdanBread from "../static/images/bread-5.png";
import digdaBread from "../static/images/bread-6.png";
import ggobugiBread from "../static/images/bread-7.png";
import gosBread from "../static/images/bread-8.png";

export type PokemonType = {
    bug: string;
    dragon: string;
    fairy: string;
    fire: string;
    ghost: string;
    ground: string;
    normal: string;
    steel: string;
    dark: string;
    electric: string;
    fighting: string;
    flying: string;
    grass: string;
    ice: string;
    poison: string;
    rock: string;
    water: string;
    psychic: string;
    null: string;
};
export type PokemonFilterType = {
    name: string;
    color: string;
}
export type PokemonBreadType = {
    name: string;
    image: string;
}
export type NavListType = {
    href: string;
    name: string;
}

export const NAV_LIST: NavListType[] = [
    { href: "/", name: "홈" },
    { href: "/gacha", name: "뽑기" },
    { href: "/my", name: "내 포켓몬" },
];
export const DEFAULT_POKEMON_MAX_ID: number = 880;
export const DEFAULT_POKEMON_LIST_LIMIT_COUNT: number = 20;
export const DEFAULT_POKEMON_KOREAN_LANGUAGE_ID: number = 3;
export const POKEMON_TYPE: PokemonType = {
    normal: "#a4acaf",
    fighting: "#d56723",
    flying: "#3dc7ef",
    poison: "#b97fc9",
    ground: "#f7de3f",
    rock: "#a38c21",
    bug: "#729f3f",
    ghost: "#7b62a3",
    steel: "#678d9e",
    fire: "#fd7d24",
    water: "#4592c4",
    grass: "#9bcc50",
    electric: "#eed535",
    psychic: "#e57879",
    ice: "#51c4e7",
    dragon: "#53a4cf",
    dark: "#707070",
    fairy: "#fdb9e9",
    null: "#000000"
};
export const POKEMON_FILTER_LIST: PokemonFilterType[] = Object.keys(POKEMON_TYPE).map(
    (item, idx) => {
        return { name: item, color: Object.values(POKEMON_TYPE)[idx] };
    }
);
export const POKEMON_BREADS: PokemonBreadType[] = [
    { name: '푸린의 푹신푹신 딸기크림', image: poorinBread },
    { name: '파이리의 화르륵 핫소스', image: fireBread },
    { name: '발챙이의 빙글빙글 밀크요팡', image: balchaengBread },
    { name: '피카피카 촉촉 치즈케익', image: picaBread },
    { name: '돌아온 로켓단 초코롤', image: roketdanBread },
    { name: '디그다의 딸기 카스타드빵', image: digdaBread },
    { name: '꼬부기의 달콤파삭 꼬부기빵', image: ggobugiBread },
    { name: '돌아온 고오스 초코케익', image: gosBread },
];
