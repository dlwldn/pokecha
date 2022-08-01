import React, { ChangeEvent, useEffect, useState } from "react";
import SearchInput from "../components/common/SearchInput";
import PokemonList from "../components/home/PokemonList";
import PokemonSearchList from "../components/home/PokemonSearchList";
import useDebounce from "../hooks/useDebounce";
import pokemonLangList from "../lib/lang_list.json";

type Props = {};

const Home = (props: Props) => {
    const [keyword, setKeyword] = useState("");
    const [searchItems, setSearchItems] = useState<number[]>([]);
    const debounceKeyword = useDebounce(keyword);

    const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };

    const onClearKeyword = () => {
        setKeyword("");
    };

    useEffect(() => {
        if (debounceKeyword === "") return;
        setSearchItems(
            pokemonLangList
                .filter((item) => item.name.includes(debounceKeyword))
                .map((item) => item.pokemon_species_id)
        );
    }, [debounceKeyword]);

    return (
        <div>
            <SearchInput
                value={keyword}
                placeholder="포켓몬 이름 검색"
                onChange={onChangeKeyword}
                onClear={onClearKeyword}
            />
            {!debounceKeyword && <PokemonList />}
            {debounceKeyword && <PokemonSearchList lists={searchItems} />}
        </div>
    );
};

export default Home;
