import React from "react";
import { PokemonDetailData } from "../../lib/store/server/pokemon";

type Props = {
    pokemon: PokemonDetailData;
};

const PokemonCard = ({ pokemon }: Props) => {
    return (
        <div>
            {String(pokemon.id).padStart(3, "0")}
            {pokemon.name}
            <img src={pokemon.image} alt="" />
        </div>
    );
};

export default PokemonCard;
