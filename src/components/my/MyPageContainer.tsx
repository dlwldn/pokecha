import React, { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useDebounce from "../../hooks/useDebounce";
import { userState } from "../../lib/store/client/user";
import Filter from "../common/Filter";
import SearchInput from "../common/SearchInput";
import PokemonList from "../home/PokemonList";
import pokemonLangList from "../../lib/lang_list.json";
import { DEFAULT_POKEMON_KOREAN_LANGUAGE_ID } from "../../lib/constant";

type Props = {};

const MyPageContainer = (props: Props) => {
    const [userClientState, _] = useRecoilState(userState);
    const [keyword, setKeyword] = useState("");
    const [searchItems, setSearchItems] = useState<number[]>(
        userClientState.pokemonIdList
    );
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
        setSearchItems(
            userClientState.pokemonIdList.filter((item) =>
                pokemonLangList
                    .filter(
                        (item) =>
                            item.name.includes(debounceKeyword) &&
                            item.local_language_id === DEFAULT_POKEMON_KOREAN_LANGUAGE_ID
                    )
                    .map((item) => item.pokemon_species_id)
                    .includes(item)
            ).sort((a, b) => Number(a) - Number(b))
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
                pokemonIdList={searchItems}
                filterTypes={currentFilter}
                isNotUsedInfinite={true}
            />
        </div>
    );
};

export default MyPageContainer;
