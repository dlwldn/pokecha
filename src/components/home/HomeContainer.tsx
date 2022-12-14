import React, { ChangeEvent, useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { DEFAULT_POKEMON_KOREAN_LANGUAGE_ID, DEFAULT_POKEMON_LIST_LIMIT_COUNT } from "../../lib/constant";
import pokemonLangList from "../../lib/lang_list.json";
import Filter from "../common/Filter";
import SearchInput from "../common/SearchInput";
import PokemonList from "./PokemonList";

type Props = {};

const HomeContainer = (props: Props) => {
    const [keyword, setKeyword] = useState("");
    const [searchPokemonIdList, setSearchPokemonIdList] = useState<number[]>([]);
    const [currentFilter, setCurrentFilter] = useState<string[]>([]);
    const debounceKeyword = useDebounce(keyword);

    const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };

    const onClearKeyword = () => {
        setKeyword("");
    };

    const onClickFilter = (filterName: string) => {
        if (currentFilter.includes(filterName)) {
            setCurrentFilter([
                ...currentFilter.filter((item) => item !== filterName),
            ]);
            return;
        }
        setCurrentFilter([...currentFilter, filterName]);
    };

    useEffect(() => {
        if (debounceKeyword === "") return;
        setSearchPokemonIdList(
            pokemonLangList
                .filter(
                    (item) =>
                        item.name.includes(debounceKeyword) &&
                        item.local_language_id === DEFAULT_POKEMON_KOREAN_LANGUAGE_ID
                )
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
            <Filter value={currentFilter} onClick={onClickFilter} />
            <PokemonList
                pokemonIdList={
                    debounceKeyword
                        ? searchPokemonIdList
                        : Array.from({
                              length: DEFAULT_POKEMON_LIST_LIMIT_COUNT,
                          }).map((_, idx) => idx + 1)
                }
                filterTypes={currentFilter}
                PokemonShowMode={debounceKeyword ? 'find' : 'default'}
            />
        </div>
    );
};

export default HomeContainer;
