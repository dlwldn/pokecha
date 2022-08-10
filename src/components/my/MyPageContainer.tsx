import React, { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useDebounce from "../../hooks/useDebounce";
import { userState } from "../../lib/store/client/user";
import Filter from "../common/Filter";
import SearchInput from "../common/SearchInput";
import PokemonList, { PokemonShowMode } from "../home/PokemonList";
import pokemonLangList from "../../lib/lang_list.json";
import { DEFAULT_POKEMON_KOREAN_LANGUAGE_ID, DEFAULT_POKEMON_MAX_ID } from "../../lib/constant";
import ListModeButtons from "./ListModeButtons";
import styled from "styled-components";
import PokemonCount from "./PokemonCount";

type Props = {};

const MyPageContainer = (props: Props) => {
    const [userClientState, _] = useRecoilState(userState);
    const [keyword, setKeyword] = useState<string>("");
    const [pokemonIdList, setPokemonIdList] = useState<number[]>(
        userClientState.pokemonIdList
    );
    const [currentFilter, setCurrentFilter] = useState<string[]>([]);
    const [showMode, setShowMode] = useState<PokemonShowMode>("collectionAll");
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

    const onClickChangeMode = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowMode(e.currentTarget.name as PokemonShowMode);
    };

    useEffect(() => {
        setPokemonIdList(
            userClientState.pokemonIdList
                .filter((item) =>
                    pokemonLangList
                        .filter(
                            (item) =>
                                item.name.includes(debounceKeyword) &&
                                item.local_language_id ===
                                    DEFAULT_POKEMON_KOREAN_LANGUAGE_ID
                        )
                        .map((item) => item.pokemon_species_id)
                        .includes(item)
                )
                .sort((a, b) => Number(a) - Number(b))
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
            <Util>
                <PokemonCount
                    value={userClientState.pokemonIdList.length}
                    total={DEFAULT_POKEMON_MAX_ID}
                    hideTotalCount={showMode === "collectionActive"}
                />
                <ListModeButtons value={showMode} onClick={onClickChangeMode} />
            </Util>
            <PokemonList
                pokemonIdList={pokemonIdList}
                filterTypes={currentFilter}
                PokemonShowMode={debounceKeyword ? "find" : showMode}
            />
        </div>
    );
};

export default MyPageContainer;

const Util = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 25px 0;
`;
