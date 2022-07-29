import React from "react";
import { usePokemon } from "../lib/store/server/pokemon";

type Props = {};

const Home = (props: Props) => {
    const { data, isLoading } = usePokemon({ limit: 20, offset: 713 });

    return <div>Home</div>;
};

export default Home;
