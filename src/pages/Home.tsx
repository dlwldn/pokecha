import React, { useState } from "react";
import PokemonList from "../components/home/PokemonList";

const DEFAULT_LIMIT = 20;

type Props = {};

const Home = (props: Props) => {
    const [limit, setLimit] = useState(DEFAULT_LIMIT);
    const [offset, setOffset] = useState(1);

    const onClickMore = () => {
        setOffset((offset) => offset + limit);
    }

    return (
        <div>
            <PokemonList limit={limit} offset={offset}/>
            <button onClick={onClickMore}>더불러오기</button>
        </div>
    );
};

export default Home;
