import palette from "../../style/palette"
import { PokemonBreadType } from "../constant"

export const changeTypeName = (typeName: string): string => {
    switch(typeName) {
        case 'fire':
            return '불'
        case 'water':
            return '물'
        case 'bug':
            return '벌레'
        case 'dragon':
            return '드래곤'
        case 'fairy':
            return '페어리'
        case 'ghost':
            return '고스트'
        case 'ground':
            return '땅'
        case 'normal':
            return '노말'
        case 'steel':
            return '강철'
        case 'dark':
            return '악'
        case 'electric':
            return '전기'
        case 'fighting':
            return '격투'
        case 'flying':
            return '비행'
        case 'grass':
            return '풀'
        case 'ice':
            return '얼음'
        case 'poison':
            return '독'
        case 'rock':
            return '바위'
        case 'psychic':
            return '에스퍼'
        default:
            return '???'
    }
}

export const getRandomBread = (breads: PokemonBreadType[]): PokemonBreadType => {
    const randomIndex = Math.floor(Math.random() * breads.length);
    return breads[randomIndex];
}

export const getPokemonPercentColor = (percent: number) => {
    if(percent === 1) return palette.black;
    if(percent > 0.8) return palette.grass;
    if(percent > 0.5) return palette.water;
    if(percent > 0.3) return palette.electric;
    if(percent >= 0) return palette.red;
}