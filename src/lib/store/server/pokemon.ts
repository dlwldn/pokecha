import { useQuery } from "@tanstack/react-query"
import { queryKeys } from ".";
import { getPokemon, PokemonQueryType } from "../../api/pokemon"

export const usePokemon = ({ limit, offset }: PokemonQueryType) => {
    const pokemon = useQuery([`${queryKeys.getPokemon}`, limit, offset], () => getPokemon({ limit, offset }), {
        staleTime: 36000,
    });
    return pokemon
}