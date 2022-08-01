import { DEFAULT_POKEMON_LIST_LIMIT_COUNT } from "../../lib/constant";
import { PokemonDetailData, usePokemonDetail } from "../../lib/store/server/pokemon";
import List from "../common/List";
import Skeleton from "../common/Skeleton";
import PokemonCard from "./PokemonCard";

type Props = {
    lists: number[];
};

const PokemonSearchList = ({ lists }: Props) => {
    const {
        data: pokemonDetailList,
        isLoading,
    } = usePokemonDetail(
        lists,
        { staleTime: 36000 }
    );

    const renderPokemonCard = (pokemon: PokemonDetailData) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
    };

    if (isLoading)
        return (
            <List>
                {Array.from({ length: DEFAULT_POKEMON_LIST_LIMIT_COUNT }).map((_, idx) => (
                    <Skeleton key={idx} />
                ))}
            </List>
        );

    return (
        <List>
            {pokemonDetailList?.pages.map((item) => item.map(renderPokemonCard))}
        </List>
    );
};

export default PokemonSearchList;
