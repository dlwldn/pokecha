import React, { useState } from "react";
import PokemonList from "../components/home/PokemonList";
import { usePokemonDetail } from "../lib/store/server/pokemon";

const DEFAULT_LIMIT = 20;

type Props = {};

const Home = (props: Props) => {
    const [limit, setLimit] = useState(DEFAULT_LIMIT);
    const [offset, setOffset] = useState(40);

    return (
        <div>
            <PokemonList limit={limit} offset={offset}/>
        </div>
    );
};

export default Home;
