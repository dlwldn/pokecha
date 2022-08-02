import { DEFAULT_POKEMON_LIST_LIMIT_COUNT } from "../../lib/constant";
import {
    PokemonDetailData,
    usePokemonDetail,
} from "../../lib/store/server/pokemon";
import EmptyData from "../common/EmptyData";
import List from "../common/List";
import Skeleton from "../common/Skeleton";
import PokemonCard from "./PokemonCard";

type Props = {
    lists: number[];
    filterTypes: string[];
};

const PokemonSearchList = ({ lists, filterTypes }: Props) => {
    const { data: pokemonDetailList, isLoading } = usePokemonDetail(lists, {
        staleTime: 36000,
    });

    const renderPokemonCard = (pokemon: PokemonDetailData) => {
        if (filterTypes.length === 0)
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        if (
            filterTypes.filter((item) => pokemon.types.includes(item)).length >
            0
        ) {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        }
    };

    if (isLoading)
        return (
            <List>
                {Array.from({ length: DEFAULT_POKEMON_LIST_LIMIT_COUNT }).map(
                    (_, idx) => (
                        <Skeleton key={idx} />
                    )
                )}
            </List>
        );

    if (
        pokemonDetailList?.pages
            .map((item) => item.map(renderPokemonCard).filter((item) => item))
            .flat().length === 0
    ) {
        return <EmptyData />;
    }
    
    return (
        <List>
            {pokemonDetailList?.pages.map((item) =>
                item.map(renderPokemonCard)
            )}
        </List>
    );
};

export default PokemonSearchList;
