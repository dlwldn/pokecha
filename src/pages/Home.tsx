import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import Filter from "../components/common/Filter";
import SearchInput from "../components/common/SearchInput";
import PokemonList from "../components/home/PokemonList";
import useDebounce from "../hooks/useDebounce";
import { DEFAULT_POKEMON_LIST_LIMIT_COUNT } from "../lib/constant";
import pokemonLangList from "../lib/lang_list.json";
import palette from "../style/palette";

type Props = {};

const Home = (props: Props) => {
    const [keyword, setKeyword] = useState("");
    const [searchItems, setSearchItems] = useState<number[]>([]);
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
        setSearchItems(
            pokemonLangList
                .filter((item) => item.name.includes(debounceKeyword))
                .map((item) => item.pokemon_species_id)
        );
    }, [debounceKeyword]);

    return (
        <div>
            <SearchWrapper>
                <SearchInput
                    value={keyword}
                    placeholder="포켓몬 이름 검색"
                    onChange={onChangeKeyword}
                    onClear={onClearKeyword}
                />
            </SearchWrapper>
            <Filter value={currentFilter} onClick={onClickFilter} />
            <PokemonList
                pokemonIdList={
                    debounceKeyword
                        ? searchItems
                        : Array.from({
                              length: DEFAULT_POKEMON_LIST_LIMIT_COUNT,
                          }).map((_, idx) => idx + 1)
                }
                filterTypes={currentFilter}
                isSearch={debounceKeyword ? true : false}
            />
        </div>
    );
};

export default Home;

const SearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
    background-color: ${palette.gray1};
    border-radius: 15px;
`;
